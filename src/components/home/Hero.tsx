import { ArrowRight, Trophy, CalendarDays, ListOrdered } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pt-28 pb-16">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(1,17,48,.92) 0%, rgba(1,10,30,.96) 70%), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(246,190,99,.25) 0, transparent 45%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8">
            <Logo className="mx-auto h-36 w-36 sm:h-44 sm:w-44" priority />
          </div>

          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-300">
            <Trophy className="h-3.5 w-3.5" />
            1º Circuito Estadual · Temporada 2026
          </p>

          <h1 className="text-balance font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Circuito de Vôlei Amador
            <span className="block text-gold-400">do Estado do Rio de Janeiro</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium text-cream-100/85 sm:text-xl">
            {siteConfig.slogan}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/contato" size="lg">
              Inscreva sua equipe
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="/etapas" size="lg" variant="outline">
              <CalendarDays className="h-5 w-5" />
              Próxima etapa
            </ButtonLink>
            <ButtonLink href="/ranking" size="lg" variant="ghost">
              <ListOrdered className="h-5 w-5" />
              Rankings
            </ButtonLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
    </section>
  );
}
