import type { Metadata } from 'next';
import { Roboto as FontSans, Lora as FontSerif } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
