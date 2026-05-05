import type { Metadata } from 'next';
import '../globals.css';
import NavigationLayout from '../components/Layout';

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
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        <NavigationLayout>
          {children}
        </NavigationLayout>
      </body>
    </html>
  );
}
