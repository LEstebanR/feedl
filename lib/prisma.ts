import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getPrismaClient() {
  const connectionString = process.env.DATABASE_URL;

  // Durante el build, usar un placeholder si no hay DATABASE_URL
  // La validación real ocurrirá en runtime cuando se use el cliente
  if (!connectionString) {
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      // Durante el build, crear un cliente con placeholder
      const placeholderPool = new Pool({
        connectionString: 'postgresql://placeholder',
      });
      const placeholderAdapter = new PrismaPg(placeholderPool);
      return new PrismaClient({
        adapter: placeholderAdapter,
        log: ['error'],
      });
    }
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
}

export const prisma = globalForPrisma.prisma ?? getPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
