import type { Metadata } from "next";
import { CalendarDays, MapPin, Users, Trophy } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { stages, stageStatusMeta, currentEdition } from "@/data/stages";

export const metadata: Metadata = {
  title: "Etapas",
  description:
    "Conheça o calendário oficial de etapas do CVAERJ, com datas, cidades e categorias de cada rodada do circuito.",
};

const formatRange = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  const day = (d: Date) => d.getDate();
  const month = (d: Date) =>
    d.toLocaleDateString("pt-BR", { month: "long" }).slice(0, 3);
  return s.getMonth() === e.getMonth()
    ? `${day(s)}–${day(e)} ${month(s)} ${s.getFullYear()}`
    : `${day(s)} ${month(s)} – ${day(e)} ${month(e)} ${s.getFullYear()}`;
};

export default function EtapasPage() {
  const upcoming = stages.filter((s) => s.status !== "realizada");
  const past = stages.filter((s) => s.status === "realizada");

  return (
    <>
      <PageHeader
        eyebrow="Calendário"
        title="Etapas do Circuito"
        description={`Calendário oficial do ${currentEdition}. Oito etapas planejadas cruzando a capital e o interior do estado.`}
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-gold-600" />
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-navy-900">
              Próximas etapas
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((stage, index) => {
              const meta = stageStatusMeta[stage.status];
              return (
                <Reveal key={stage.id} delay={index * 70}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-navy-950 p-7 shadow-lg transition-shadow hover:shadow-2xl hover:shadow-navy-900/30">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 85% 10%, #f6be63 0, transparent 45%)",
                      }}
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-cream-100/50">
                          Etapa {stage.id.replace("s", "")} · {stage.edition}
                        </span>
                        <h3 className="mt-2 text-balance font-display text-xl font-extrabold uppercase leading-tight text-white">
                          {stage.name}
                        </h3>
                      </div>
                      <Badge className={`shrink-0 ${meta.className}`}>
                        {meta.label}
                      </Badge>
                    </div>

                    <div className="relative mt-6 space-y-3 text-sm text-cream-100/80">
                      <p className="flex items-start gap-2.5">
                        <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {formatRange(stage.start, stage.end)}
                      </p>
                      <p className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {stage.city} — {stage.venue}
                      </p>
                      <p className="flex items-start gap-2.5">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {stage.categories.join(" · ")}
                      </p>
                    </div>

                    {stage.highlights && stage.highlights.length > 0 && (
                      <div className="relative mt-6 border-t border-white/10 pt-4">
                        <ul className="space-y-1.5">
                          {stage.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-center gap-2 text-xs font-medium text-gold-300"
                            >
                              <span className="h-1 w-1 rounded-full bg-gold-400" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>

          {past.length > 0 ? (
            <>
              <div className="mt-20 mb-10 flex items-center gap-3">
                <Trophy className="h-6 w-6 text-gold-600" />
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-navy-900">
                  Etapas realizadas
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {past.map((stage, index) => {
                  const meta = stageStatusMeta[stage.status];
                  return (
                    <Reveal key={stage.id} delay={index * 70}>
                      <article className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy-900/10">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-navy-900/45">
                              Etapa {stage.id.replace("s", "")} · {stage.edition}
                            </span>
                            <h3 className="mt-2 text-balance font-display text-xl font-extrabold uppercase leading-tight text-navy-900">
                              {stage.name}
                            </h3>
                          </div>
                          <Badge className={`shrink-0 ${meta.className}`}>
                            {meta.label}
                          </Badge>
                        </div>
                        <div className="mt-6 space-y-3 text-sm text-navy-900/70">
                          <p className="flex items-start gap-2.5">
                            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                            {formatRange(stage.start, stage.end)}
                          </p>
                          <p className="flex items-start gap-2.5">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                            {stage.city} — {stage.venue}
                          </p>
                          <p className="flex items-start gap-2.5">
                            <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                            {stage.categories.join(" · ")}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </>
          ) : (
            <Reveal>
              <div className="mt-20 rounded-xl border border-gold-500/40 bg-gold-400/10 p-8 text-center">
                <h2 className="font-display text-lg font-extrabold uppercase tracking-tight text-navy-900">
                  Resultados em breve
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                  Os resultados e os destaques de cada etapa serão publicados
                  aqui após a realização da primeira etapa da temporada.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
