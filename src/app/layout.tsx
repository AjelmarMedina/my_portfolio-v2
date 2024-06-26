import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { inter } from "@/components/ui/fonts";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ajelmarmedina.vercel.app'),
  title: {
    template: "%s | Ajel Medina",
    default: "Who's Ajelmar Medina?",
  },
  description: "Ajel Medina is a Front-end— Back-end freelancing developer and designer",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: {
    name: "Ajelmar Medina",
    url: "https://github.com/AjelmarMedina"
  },
  creator: "Ajelmar Medina",
  keywords: ["ajel", "ajelmar", "ajelmar medina", "medina", "web developer", "front end", "back end", "web design"],
  robots: "index, follow",
  manifest: "https://ajelmarmedina.vercel.app/manifest.json",
  openGraph: {
    type: "website",
    url: "https://ajelmarmedina.vercel.app",
    title: "Ajelmar Medina",
    description: "Ajelmar Medina's Portfolio website showcasing his Web Development career",
    siteName: "Ajelmar Medina Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        {children}
        <Footer />
        
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
