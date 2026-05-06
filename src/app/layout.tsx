import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '../globals.css';
import NavigationLayout from '../components/Layout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Resona - Academic Platform',
  description: 'The modern academic operating system',
  icons: {
    icon: '/favicon.svg',
  },
};

import { ThemeProvider } from '../components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider defaultTheme="system">
          <NavigationLayout>
            {children}
          </NavigationLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
