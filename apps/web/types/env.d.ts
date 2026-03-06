/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      // Database (via @lesfeedback/db)
      DATABASE_URL: string;
      // Better Auth (LES-7)
      BETTER_AUTH_SECRET: string;
      BETTER_AUTH_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      // Sentry (LES-17)
      SENTRY_DSN?: string;
      // Public vars
      NEXT_PUBLIC_WIDGET_URL: string;
    }
  }
}

export {};
