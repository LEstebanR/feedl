import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

// Endpoint para ejecutar migraciones manualmente si es necesario
// Solo debería usarse en casos de emergencia
export async function POST(request: Request) {
  try {
    // Verificar que sea una solicitud autorizada (puedes agregar autenticación aquí)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.MIGRATION_SECRET}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verificar si la tabla existe
    try {
      await prisma.$queryRaw`SELECT 1 FROM waitlist LIMIT 1`;
      return NextResponse.json({
        success: true,
        message: 'Table already exists',
      });
    } catch {
      // La tabla no existe, crearla
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

      return NextResponse.json({
        success: true,
        message: 'Table created successfully',
      });
    }
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Migration failed',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
