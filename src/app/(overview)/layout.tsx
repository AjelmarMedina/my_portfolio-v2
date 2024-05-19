
import { inter } from "@/components/ui/fonts";
import { Navbar } from "@/components/ui/nav";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn(inter.className)}>
      <Navbar isLanding={true} />
      {children}
    </main>
  );
}
