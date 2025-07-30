import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyBlog - A Next.js Blog",
  description: "A simple blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
           {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-8 ">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" aria-label="Twitter" className="hover:text-blue-600">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="hover:text-blue-600">
             <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
