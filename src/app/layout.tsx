import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manropeSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable}`}>
        <div className="grain-overlay"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
