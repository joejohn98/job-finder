import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Board - Find Your Dream Job",
  description:
    "Discover thousands of job opportunities from top companies. Post jobs, search for candidates, and build your career with our comprehensive job posting platform.",
  keywords:
    "jobs, careers, employment, job search, job posting, hiring, recruitment",
  authors: [{ name: "Job Board Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {" "}
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Toaster position="top-right" richColors />
        </div>
      </body>
    </html>
  );
}
