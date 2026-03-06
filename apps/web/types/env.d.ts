/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      // Database (via @lesfeedback/db)
      DATABASE_URL: string;
      // Auth.js (LES-7)
      AUTH_SECRET: string;
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
      // Resend email provider (LES-13)
      RESEND_API_KEY: string;
      // Sentry (LES-17)
      SENTRY_DSN?: string;
      // Public vars
      NEXT_PUBLIC_WIDGET_URL: string;
    }
  }
}

export {};
