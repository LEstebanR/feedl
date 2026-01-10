// En Vercel, las variables de entorno ya están disponibles
// Solo cargar dotenv en desarrollo local
if (
  process.env.NODE_ENV !== 'production' &&
  !process.env.VERCEL &&
  typeof require !== 'undefined'
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('dotenv').config();
  } catch {
    // dotenv no disponible
  }
}

export default {
  datasource: {
    url: process.env.DATABASE_URL,
  },
};
