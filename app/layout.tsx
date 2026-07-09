import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Kaushik | Portfolio",
  description: "A handcrafted portfolio built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  );
}
