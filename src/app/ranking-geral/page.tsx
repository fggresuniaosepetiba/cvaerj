import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RankingTable } from "@/components/ranking/RankingTable";
import { generalRanking } from "@/data/ranking";

export const metadata: Metadata = {
  title: "Ranking Geral do Circuito",
  description:
    "Ranking Geral do CVAERJ, estrutura preparada para consolidar a pontuação de todas as temporadas do circuito de vôlei amador do Estado do Rio de Janeiro.",
};

export default function RankingGeralPage() {
  return (
    <>
      <PageHeader
        eyebrow="Acervo do Circuito"
        title="Ranking Geral do Circuito"
        description="Estrutura preparada para reunir a pontuação de todas as temporadas. O ranking começará a ser construído na primeira temporada do circuito."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-gold-500/40 bg-gold-400/10 p-5">
              <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <p className="text-sm leading-relaxed text-navy-900/75">
                O ranking geral acumulará os pontos de todas as edições do
                circuito. Ao final de cada temporada, 100% da pontuação obtida
                pelas equipes será consolidada neste ranking, preservando o
                legado de cada clube no CVAERJ.
              </p>
            </div>
          </Reveal>

          {generalRanking.length > 0 ? (
            <Reveal delay={100}>
              <RankingTable entries={generalRanking} />
            </Reveal>
          ) : (
            <Reveal delay={100}>
              <div className="flex flex-col items-center rounded-xl bg-white px-8 py-16 text-center shadow-sm ring-1 ring-navy-900/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                  <Landmark className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
                  O ranking geral começa agora
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
                  Esta tabela está preparada para eternizar o desempenho das
                  equipes em todas as temporadas do circuito. A primeira
                  temporada começa em breve.
                </p>
              </div>
            </Reveal>
          )}

          <p className="mt-10 text-center text-sm leading-relaxed text-navy-900/55">
            Quando a primeira temporada for concluída, as equipes que
            conquistarem títulos entrarão para a história nesta tabela oficial.
          </p>
        </Container>
      </section>
    </>
  );
}
