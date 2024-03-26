import type { Metadata } from 'next';
import { Lora as FontSans } from 'next/font/google';
import './globals.css';

import { Header } from '~/widgets/header';
import { cn } from '~/shared/lib';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
        className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
