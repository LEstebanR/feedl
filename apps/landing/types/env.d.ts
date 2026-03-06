/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      // Database
      DATABASE_URL: string;
      // Landing-specific
      MIGRATION_SECRET: string;
      NEXT_PUBLIC_APP_URL: string;
    }
  }
}

export {};
