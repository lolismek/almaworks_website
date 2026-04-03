import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Almaworks | Columbia's Premier Startup Accelerator",
    template: "%s | Almaworks",
  },
  description:
    "Columbia University's premier startup accelerator. 100+ graduated startups, $150M+ collectively raised. No equity, no fees — just world-class support for student founders.",
  keywords: [
    "Columbia University",
    "startup accelerator",
    "student founders",
    "Almaworks",
    "NYC startups",
  ],
  openGraph: {
    title: "Almaworks | Columbia's Premier Startup Accelerator",
    description:
      "100+ graduated startups. $150M+ collectively raised. No equity, no fees.",
    siteName: "Almaworks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
