import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirby Ammari",
  description: "Software Developer Personal Portfolio Website for Kirby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f9f8fd] antialiased w-screen text-black bg-white dark:text-white dark:bg-[#111010]`}>
        <div className='relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 pt-8 px-4 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

//