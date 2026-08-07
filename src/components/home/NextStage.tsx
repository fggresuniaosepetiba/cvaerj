import { CalendarDays, MapPin, Users, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Countdown } from "@/components/home/Countdown";
import { seasonLaunch } from "@/data/season";

export function NextStage() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Evento de Estreia"
          title="Prepare sua equipe para a temporada de estreia"
        />

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
                    Estreia da temporada
                  </Badge>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cream-100/60">
                    1º Circuito CVAERJ
                  </span>
                </div>

                <h3 className="mt-5 text-balance font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                  Evento de estreia no Cesarão
                </h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                        Data
                      </p>
                      <p className="mt-1 font-medium text-white">
                        {seasonLaunch.dateLabel}
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
                        {seasonLaunch.venue}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                      Categoria
                    </p>
                    <p className="mt-1 font-medium text-white">
                      {seasonLaunch.category}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <ButtonLink href="/inscricao">
                    Inscreva sua equipe
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <div className="relative flex flex-col lg:min-h-full">
                <div className="relative min-h-[280px] lg:flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1728971124745-423b12df446d?q=80&w=1200&auto=format&fit=crop"
                    alt="Arena do evento de estreia do CVAERJ"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent lg:bg-gradient-to-r" />
                </div>
                <Countdown />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
