import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      gamertag: string;
      role: 'user' | 'org_admin' | 'super_admin';
      level: number;
      experience: number;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    gamertag: string;
    role: 'user' | 'org_admin' | 'super_admin';
    level: number;
    experience: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    gamertag: string;
    role: 'user' | 'org_admin' | 'super_admin';
    level: number;
    experience: number;
  }
}