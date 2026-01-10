import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

// Lista de dominios temporales/comunes de spam a rechazar
const TEMPORARY_EMAIL_DOMAINS = [
  '10minutemail.com',
  '10minutemail.de',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'mailinator.com',
  'tempmail.com',
  'temp-mail.org',
  'throwaway.email',
  'yopmail.com',
  'getnada.com',
  'maildrop.cc',
  'mohmal.com',
  'sharklasers.com',
  'trashmail.com',
];

// Regex avanzado para validar formato de email
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateEmailFormat(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function validateEmailDomain(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;

  return !TEMPORARY_EMAIL_DOMAINS.some(tempDomain =>
    domain.includes(tempDomain)
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Validar formato
    if (!validateEmailFormat(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validar dominio
    if (!validateEmailDomain(trimmedEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Temporary email addresses are not allowed',
        },
        { status: 400 }
      );
    }

    // Verificar duplicados e insertar
    try {
      const existingEmail = await prisma.waitlist.findUnique({
        where: { email: trimmedEmail },
      });

      if (existingEmail) {
        return NextResponse.json(
          {
            success: false,
            message:
              "You're already on the waitlist! We'll notify you when we launch.",
          },
          { status: 409 }
        );
      }

      await prisma.waitlist.create({
        data: {
          email: trimmedEmail,
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Successfully added to waitlist!',
        },
        { status: 201 }
      );
    } catch (error: unknown) {
      // Error de Prisma - tabla no existe (P2021) o schema no encontrado
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error.code === 'P2021' ||
          error.code === 'P1001' ||
          error.code === 'P1003')
      ) {
        console.error(
          'Database table not found. Attempting to create table:',
          error
        );

        // Intentar crear la tabla automáticamente
        try {
          await prisma.$executeRaw`
            CREATE TABLE IF NOT EXISTS "waitlist" (
              "id" TEXT NOT NULL,
              "email" TEXT NOT NULL,
              "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
              CONSTRAINT "waitlist_pkey" PRIMARY KEY ("id")
            );
          `;

          await prisma.$executeRaw`
            CREATE UNIQUE INDEX IF NOT EXISTS "waitlist_email_key" ON "waitlist"("email");
          `;

          // Reintentar la inserción después de crear la tabla
          try {
            await prisma.waitlist.create({
              data: {
                email: trimmedEmail,
              },
            });

            return NextResponse.json(
              {
                success: true,
                message: 'Successfully added to waitlist!',
              },
              { status: 201 }
            );
          } catch (retryError) {
            // Si aún falla después de crear la tabla, puede ser un duplicado
            if (
              retryError &&
              typeof retryError === 'object' &&
              'code' in retryError &&
              retryError.code === 'P2002'
            ) {
              return NextResponse.json(
                {
                  success: false,
                  message:
                    "You're already on the waitlist! We'll notify you when we launch.",
                },
                { status: 409 }
              );
            }
            throw retryError;
          }
        } catch (createError) {
          console.error('Failed to create table:', createError);
          return NextResponse.json(
            {
              success: false,
              message:
                'The waitlist service is being set up. Please try again in a few moments.',
            },
            { status: 503 }
          );
        }
      }

      // Error de Prisma - constraint violation (email duplicado)
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This email is already on the waitlist. We'll notify you when we launch!",
          },
          { status: 409 }
        );
      }

      // Error de conexión a la base de datos
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        (error.code === 'P1000' || error.code === 'P1001')
      ) {
        console.error('Database connection error:', error);
        return NextResponse.json(
          {
            success: false,
            message:
              'Unable to connect to our database. Please try again in a few moments.',
          },
          { status: 503 }
        );
      }

      throw error;
    }
  } catch (error) {
    console.error('Error adding to waitlist:', error);

    // Detectar si es un error de tabla no encontrada
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (
      errorMessage.includes('does not exist') ||
      errorMessage.includes('relation') ||
      errorMessage.includes('table') ||
      errorMessage.includes('P2021')
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'The waitlist service is being set up. Please try again in a few moments.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'We encountered an issue adding you to the waitlist. Please try again, or contact support if the problem persists.',
      },
      { status: 500 }
    );
  }
}
