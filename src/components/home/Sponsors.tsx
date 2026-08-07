import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";

export function Sponsors() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Patrocinadores"
          title="Marcas que vão apoiar o vôlei amador do Estado do Rio de Janeiro"
          align="center"
          dark
        />
      </Container>
      <div className="mt-12">
        <SponsorsMarquee />
      </div>
      <Container className="mt-12 text-center">
        <p className="text-sm text-cream-100/60">
          Sua marca pode estar aqui.{" "}
          <a
            href="/patrocinadores"
            className="font-semibold text-gold-400 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
          >
            Conheça as cotas de patrocínio
          </a>
        </p>
      </Container>
    </section>
  );
}
