import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Fotos e vídeos das etapas do Circuito de Vôlei Amador do Estado do Rio de Janeiro. O conteúdo será publicado a partir da primeira temporada.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Momentos do Circuito"
        title="Galeria"
        description="As jogadas, as quadras, a torcida e os bastidores do CVAERJ. As fotos e os vídeos serão publicados após a realização de cada etapa da primeira temporada."
      />
      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center rounded-xl bg-white px-8 py-20 text-center shadow-sm ring-1 ring-navy-900/10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
              <Camera className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tight text-navy-900">
              A galeria começa na primeira etapa
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-900/65">
              As fotos e os vídeos das etapas serão publicados aqui após a
              realização de cada etapa da temporada de estreia. Acompanhe o
              circuito e veja os melhores momentos chegarem.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
