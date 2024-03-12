import type { Metadata } from "next";
import "./globals.css";

import { Header } from "~/widgets/header";

export const metadata: Metadata = {
  title: "LikeCactus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
