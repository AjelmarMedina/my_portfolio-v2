import type { Metadata } from "next";

import { Navbar } from "@/components/ui/nav";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ajel Medina's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("h-full")}>
      <Navbar isLanding={false} />
      <span className="h-16" />
      {children}
    </main>
  );
}
