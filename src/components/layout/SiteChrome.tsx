"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const bareRoutes = new Set(["/copa-cesarao"]);

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (bareRoutes.has(pathname)) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
