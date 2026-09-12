import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "../public/fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Dhruv Bhardwaj — Developer & Data Science",
  description:
    "Portfolio of Dhruv Bhardwaj — CS Engineering student at NSUT, New Delhi. Building AI tools, data platforms and fast, thoughtful products.",
  openGraph: {
    title: "Dhruv Bhardwaj — Developer & Data Science",
    description:
      "Building AI tools, data platforms and fast, thoughtful products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${clash.variable}`}>
      <body className="bg-bg text-text antialiased">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
