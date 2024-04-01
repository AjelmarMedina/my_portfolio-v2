import type { Metadata } from "next";

import { inter } from "@/components/(ui)/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL('https://ajelmarmedina.vercel.app'),
  title: {
    template: "%s | Ajel Medina",
    default: "Who's Ajelmar Medina?",
  },
  description: "Ajel Medina is a Front-end— Back-end freelancing developer and designer",
  authors: {
    name: "Ajelmar Medina",
    url: "https://github.com/AjelmarMedina"
  },
  creator: "Ajelmar Medina",
  keywords: ["ajel", "ajelmar", "ajelmar medina", "medina", "web developer", "front end", "back end", "web design"],
  robots: "index, follow",
  manifest: "./manifest.json",
  openGraph: {
    type: "website",
    url: "https://ajelmarmedina.vercel.app",
    title: "Ajelmar Medina",
    description: "Ajelmar Medina's Portfolio website showcasing his Web Development career",
    siteName: "Ajelmar Medina Portfolio",
    images: [{
      url: "/Heading.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    "images": "/Heading.png"

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        {children}
      </body>
    </html>
  );
}
