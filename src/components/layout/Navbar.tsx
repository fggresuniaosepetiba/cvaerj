"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/95 shadow-lg shadow-navy-950/40 backdrop-blur-md"
          : "bg-gradient-to-b from-navy-950/80 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Início — CVAERJ">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-black uppercase tracking-wide text-white">
              CVAERJ
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold-400 sm:block">
              Vôlei Amador · Rio de Janeiro
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
                isActive(item.href)
                  ? "text-gold-400"
                  : "text-cream-100/85 hover:text-white",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
              )}
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-gold-500 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-gold-400"
          >
            Inscreva sua equipe
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/98 lg:hidden">
          <nav
            className="flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto px-4 py-6"
            aria-label="Navegação móvel"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-3 text-base font-semibold uppercase tracking-wide transition-colors",
                  isActive(item.href)
                    ? "bg-white/5 text-gold-400"
                    : "text-cream-100/90 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-4 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950"
            >
              Inscreva sua equipe
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
