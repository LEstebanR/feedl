// En Vercel y producción, las variables de entorno ya están disponibles
// Solo cargar dotenv en desarrollo local cuando no hay VERCEL
if (
  !process.env.VERCEL &&
  !process.env.DATABASE_URL &&
  typeof require !== 'undefined'
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('dotenv').config();
  } catch {
    // dotenv no disponible o ya configurado
  }
}

export default {
  datasource: {
    url: process.env.DATABASE_URL || '',
  },
};
