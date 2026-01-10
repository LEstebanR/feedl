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
            message: 'This email is already on the waitlist',
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
      // Error de Prisma (posiblemente constraint violation)
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'This email is already on the waitlist',
          },
          { status: 409 }
        );
      }

      throw error;
    }
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
