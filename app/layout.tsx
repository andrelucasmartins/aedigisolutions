import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AE Digi Solutions",
  description:
    "Criação de sites e sistemas, desenvolvimento de aplicações web, e-commerce e muito mais.",
  verification: {
    google: "psTI9M2KFhTJ2Yghx7YsQOQHx1tjLH-pSnqXDpibn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body style={inter.style} className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
