import { ArrowRight, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(1,17,48,.94) 0%, rgba(1,17,48,.82) 60%, rgba(1,10,30,.9) 100%), url('https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-400">
              <Trophy className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Sua equipe no maior palco do vôlei amador do Estado do Rio de Janeiro
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/75 sm:text-lg">
              Garanta a vaga da sua equipe na primeira temporada do CVAERJ e
              escreva o nome do seu clube na história do vôlei amador do Rio de
              Janeiro.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/contato" size="lg">
                Inscreva sua equipe
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/regulamento" size="lg" variant="outline">
                Consultar regulamento
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
