import { CalendarDays, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { nextStage } from "@/data/stages";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export function NextStage() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Próxima Etapa"
            title="Prepare sua equipe para a temporada de estreia"
          />
          <Link
            href="/etapas"
            className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-700"
          >
            Ver todas as etapas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Reveal className="mt-12">
          <div className="group relative overflow-hidden rounded-2xl bg-navy-950 shadow-2xl shadow-navy-900/30 ring-1 ring-navy-900/10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 85% 10%, #f6be63 0, transparent 40%), radial-gradient(circle at 10% 90%, #123b75 0, transparent 45%)",
              }}
            />
            <div className="relative grid gap-0 lg:grid-cols-[1.3fr_1fr]">
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-gold-400/15 text-gold-300 ring-gold-400/40">
                    Inscrições abertas
                  </Badge>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cream-100/60">
                    {nextStage.edition}
                  </span>
                </div>

                <h3 className="mt-5 text-balance font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                  {nextStage.name}
                </h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                        Data
                      </p>
                      <p className="mt-1 font-medium text-white">
                        {formatDate(nextStage.start)} ·{" "}
                        {new Date(nextStage.end).getDate()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                        Local
                      </p>
                      <p className="mt-1 font-medium text-white">
                        {nextStage.city} · {nextStage.venue}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                      Categorias
                    </p>
                    <p className="mt-1 font-medium text-white">
                      {nextStage.categories.join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <ButtonLink href="/contato">
                    Inscreva sua equipe
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1728971124745-423b12df446d?q=80&w=1200&auto=format&fit=crop"
                  alt={`Arena da etapa em ${nextStage.city}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-navy-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur">
                  <Clock className="h-4 w-4" />
                  Contagem regressiva em breve
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
