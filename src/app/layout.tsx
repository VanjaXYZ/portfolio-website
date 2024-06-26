import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header, { MobileHeader } from "./(components)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex flex-col min-h-screen bg-black overflow-x-hidden"
        }
      >
        <Header />
        <section className="flex-grow">{children}</section>
        <MobileHeader />
      </body>
    </html>
  );
}
