import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { ConditionalNavbar } from '@/components/navigation/conditional-navbar';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OverKill - Gaming Social Platform',
  description: 'Connect, compete, and collaborate with gamers worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${inter.variable} font-sans min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
          >
            <div className="relative flex min-h-screen flex-col">
              <ConditionalNavbar />
              <main className="flex-1">
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}