import type { Metadata } from "next";
import { MapPin, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { teams, teamCategories } from "@/data/teams";

export const metadata: Metadata = {
  title: "Equipes Participantes",
  description:
    "Conheça as equipes participantes do CVAERJ, organizadas por categoria e cidade.",
};

function TeamEmblem({
  initials,
  color,
  fg,
}: {
  initials: string;
  color: string;
  fg: string;
}) {
  return (
    <div
      aria-hidden
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl font-display text-lg font-black uppercase shadow-md"
      style={{ backgroundColor: color, color: fg }}
    >
      {initials}
    </div>
  );
}

export default function EquipesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clubes e Equipes"
        title="Equipes Participantes"
        description="As equipes de todo o Estado do Rio de Janeiro poderão se inscrever na temporada de estreia do circuito. A lista de participantes será publicada após a conclusão das inscrições."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-wrap items-center gap-2">
            {teamCategories.map((category) => (
              <Badge
                key={category}
                className="bg-navy-900 text-gold-300 ring-navy-900/20"
              >
                {category}
              </Badge>
            ))}
          </div>

          {teams.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teams.map((team, index) => {
                const [color, fg] = team.emblem.split(":");
                return (
                  <Reveal key={team.id} delay={(index % 6) * 60}>
                    <article className="group flex h-full items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-navy-900/10 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                      <TeamEmblem initials={team.initials} color={color} fg={fg} />
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold leading-snug text-navy-900">
                          {team.name}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-navy-900/55">
                          <MapPin className="h-3.5 w-3.5 text-gold-600" />
                          {team.city}
                        </p>
                        <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-navy-900/70">
                          <Users className="h-3 w-3" />
                          {team.category}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <Reveal>
              <div className="flex flex-col items-center rounded-xl bg-white px-8 py-16 text-center shadow-sm ring-1 ring-navy-900/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                  <Users className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
                  A lista de equipes está chegando
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
                  A relação das equipes participantes será publicada aqui após
                  a conclusão das inscrições da primeira temporada. Este espaço
                  está preparado para receber cada equipe por categoria e
                  cidade.
                </p>
              </div>
            </Reveal>
          )}

          <p className="mt-12 text-center text-sm text-navy-900/55">
            Quer levar sua equipe para a primeira temporada?{" "}
            <a
              href="/inscricao"
              className="font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              Faça a inscrição e entre no circuito
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
