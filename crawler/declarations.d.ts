declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      YOUTUBE_API_KEY: string;
    }
  }
}
