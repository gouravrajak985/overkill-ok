import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import connectDB from './mongodb';
import User from '@/models/User';

const client = new MongoClient(process.env.MONGODB_URI!);
const clientPromise = client.connect();

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectDB();
        const user = await User.findOne({ email: credentials.email });

        if (!user || !user.password) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          gamertag: user.gamertag,
          role: user.role,
          level: user.level,
          experience: user.experience,
          image: user.image,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.gamertag = user.gamertag;
        token.role = user.role;
        token.level = user.level;
        token.experience = user.experience;
      }

      if (trigger === 'update' && session) {
        token = { ...token, ...session };
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.gamertag = token.gamertag;
        session.user.role = token.role;
        session.user.level = token.level;
        session.user.experience = token.experience;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        await connectDB();
        const existingUser = await User.findOne({ email: user.email });
        
        if (!existingUser) {
          // Create gamertag from email
          const baseGamertag = user.email?.split('@')[0] || 'gamer';
          let gamertag = baseGamertag;
          let counter = 1;
          
          while (await User.findOne({ gamertag })) {
            gamertag = `${baseGamertag}${counter}`;
            counter++;
          }

          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            gamertag,
            role: 'user',
            level: 1,
            experience: 0,
          });
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to feed page after successful authentication
      if (url.startsWith('/') && !url.startsWith('/auth/')) {
        return `${baseUrl}/feed`;
      }
      // Default redirect to feed for successful auth
      return `${baseUrl}/feed`;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};