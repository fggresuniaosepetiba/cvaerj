import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RankingTable } from "@/components/ranking/RankingTable";
import { seasonRanking } from "@/data/ranking";
import { currentEdition } from "@/data/stages";

export const metadata: Metadata = {
  title: `Ranking da Temporada — ${currentEdition}`,
  description:
    "Ranking da Temporada do CVAERJ. A classificação oficial será publicada após a realização de cada etapa do circuito.",
};

export default function RankingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Classificação Oficial"
        title="Ranking da Temporada"
        description="A disputa pelo título estadual passará pelo ranking. As posições serão atualizadas após a realização de cada etapa do circuito."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-navy-900/5 px-4 py-2.5 text-sm text-navy-900/70">
              <Info className="h-4 w-4 text-gold-600" />
              A pontuação será publicada após a realização de cada etapa.
            </div>
            <Link
              href="/ranking-geral"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-700"
            >
              Ver ranking geral
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {seasonRanking.length > 0 ? (
            <Reveal>
              <RankingTable entries={seasonRanking} />
            </Reveal>
          ) : (
            <Reveal>
              <div className="flex flex-col items-center rounded-xl bg-white px-8 py-16 text-center shadow-sm ring-1 ring-navy-900/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                  <Info className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
                  Ranking em construção
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
                  O Ranking da Temporada será preenchido com a pontuação
                  oficial das equipes a partir da primeira etapa do circuito.
                  Acompanhe o calendário e as próximas etapas.
                </p>
              </div>
            </Reveal>
          )}

          <p className="mt-10 text-center text-sm leading-relaxed text-navy-900/55">
            O ranking é atualizado ao final de cada etapa conforme o regulamento
            oficial do circuito.{" "}
            <Link
              href="/regulamento"
              className="font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              Consulte o regulamento
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
