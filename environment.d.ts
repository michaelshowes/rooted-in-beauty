declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PUBLIC_URL: string;
      WORDPRESS_API_URL: string;
      NEXT_PUBLIC_WORDPRESS_URL: string;
    }
  }
}

export {};
