import type { Metadata } from 'next';
import { Roboto as FontSans, Lora as FontSerif } from 'next/font/google';
import './globals.css';

import { Footer } from '~/widgets/footer';
import { Header } from '~/widgets/header';
import { cn } from '~/shared/lib';

const fontSans = FontSans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'LikeCactus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
