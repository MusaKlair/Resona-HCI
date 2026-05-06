import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '../globals.css';
import NavigationLayout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeProvider';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans">
        <ThemeProvider>
          <NavigationLayout>
            {children}
          </NavigationLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
