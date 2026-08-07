import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

const pillars = [
  {
    title: "Competitividade",
    text: "Formato profissional, arbitragem qualificada e disputa equilibrada.",
  },
  {
    title: "Organização",
    text: "Temporada planejada, comunicação clara e infraestrutura completa na cidade-sede.",
  },
  {
    title: "Comunidade",
    text: "Um circuito que une atletas, equipes, torcida e cidades em torno da paixão pelo vôlei.",
  },
];

export function About() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/10">
                <img
                  src="https://images.unsplash.com/photo-1686753767715-37cb0c34212c?q=80&w=1200&auto=format&fit=crop"
                  alt="Atleta de vôlei em suspensão na quadra"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden h-36 w-36 sm:block">
                <Logo className="h-full w-full shadow-2xl shadow-navy-950/40 ring-4 ring-cream-50" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Sobre o Circuito"
              title="A casa do vôlei amador do Estado do Rio de Janeiro"
            />
            <p className="mt-6 text-base leading-relaxed text-navy-900/75 sm:text-lg">
              O CVAERJ nasceu para transformar a paixão pelo vôlei em uma
              experiência competitiva, organizada e inesquecível para atletas e
              equipes de todo o Estado do Rio de Janeiro.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              A partir do evento de estreia, o circuito vai reunir equipes
              amadoras de todo o estado em uma competição organizada e
              disputada, construindo uma nova tradição esportiva no Rio de
              Janeiro.
            </p>

            <ul className="mt-8 space-y-5">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-900/65">
                      {pillar.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/sobre"
              className="mt-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-700"
            >
              Conheça o circuito
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
