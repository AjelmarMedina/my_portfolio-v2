import type { Metadata } from "next";

import { inter } from "@/components/(ui)/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    template: "%s | Ajel Medina",
    default: "Ajelmar Medina?",
  },
  description: "Ajel Medina is a Front-end— Back-end freelancing developer and designer",
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
