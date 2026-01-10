/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }

  var process: {
    env: NodeJS.ProcessEnv;
  };
}

export {};
