import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, ShieldCheck, Scale, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre o Circuito",
  description:
    "Conheça o projeto, a missão, a visão e os valores do Circuito de Vôlei Amador do Estado do Rio de Janeiro.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Paixão pelo vôlei",
    text: "Tudo o que fazemos nasce do amor pelo esporte e do respeito a quem o pratica.",
  },
  {
    icon: ShieldCheck,
    title: "Integridade",
    text: "Competição limpa, regras claras e conduta ética dentro e fora de quadra.",
  },
  {
    icon: Scale,
    title: "Equidade",
    text: "Mesmo nível de competitividade e oportunidade para todas as equipes e categorias.",
  },
  {
    icon: Users,
    title: "Comunidade",
    text: "Um circuito construído com as equipes, pelas cidades e para a torcida do Estado do Rio de Janeiro.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "O nascimento do projeto",
    text: "Um grupo de apaixonados por vôlei se une com um objetivo claro: criar uma competição estadual organizada e itinerante para o vôlei amador do Rio de Janeiro.",
  },
  {
    year: "2024",
    title: "Estruturação do circuito",
    text: "Regulamento oficial, categorias e formato de disputa são definidos para garantir organização e competitividade desde a primeira etapa.",
  },
  {
    year: "2025",
    title: "Plataforma e parcerias",
    text: "A plataforma oficial é construída e as primeiras cidades do estado manifestam interesse em receber o circuito.",
  },
  {
    year: "2026",
    title: "A temporada de estreia",
    text: "O CVAERJ abre as inscrições para a primeira temporada, com etapas planejadas para diferentes regiões do estado.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre o Circuito"
        title="Uma competição que une o Rio"
        description="Conheça o projeto, os valores e o propósito do circuito que vai elevar o vôlei amador do Estado do Rio de Janeiro."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="O Projeto" title="Nasceu da paixão, pronto para crescer com o estado" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-900/75 sm:text-lg">
                <p>
                  O CVAERJ nasceu do encontro de atletas e entusiastas que
                  perceberam uma lacuna no vôlei amador do Estado do Rio de Janeiro: faltava uma
                  competição com nível de organização, estrutura e
                  competitividade à altura da tradição esportiva do estado.
                </p>
                <p>
                  De uma ideia reunida em torno de algumas quadras, o circuito
                  se prepara para se tornar a maior competição de vôlei amador
                  do Estado do Rio de Janeiro — um calendário que vai
                  atravessar a capital, a Região Serrana, os Lagos, o Norte e o
                  Centro-Sul.
                </p>
                <p>
                  A partir da primeira etapa, cada rodada será uma celebração
                  do esporte: arbitragem oficial, estrutura completa, torcida
                  presente e o mesmo respeito que se vê nas grandes ligas
                  profissionais.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/10">
                <img
                  src="https://images.unsplash.com/photo-1479859546309-cd77fa21c8f6?q=80&w=1200&auto=format&fit=crop"
                  alt="Quadra do circuito vista de cima"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, #123b75 0, transparent 45%), radial-gradient(circle at 90% 80%, #f6be63 0, transparent 35%)",
          }}
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Propósito"
            title="Missão · Visão · Valores"
            align="center"
            dark
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-gold-400/40">
                <Target className="h-8 w-8 text-gold-400" />
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                  Missão
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cream-100/75">
                  Transformar a paixão pelo vôlei em uma experiência
                  competitiva, organizada e inesquecível para atletas e equipes
                  de todo o Estado do Rio de Janeiro.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-gold-400/30 bg-gold-400/5 p-8 transition-colors hover:bg-gold-400/10">
                <Eye className="h-8 w-8 text-gold-400" />
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                  Visão
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cream-100/80">
                  {siteConfig.vision}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-400/40 hover:bg-white/[0.06]">
                  <value.icon className="h-7 w-7 text-gold-400" />
                  <h4 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Linha do Tempo"
            title="Um projeto construído para durar"
            align="center"
          />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              aria-hidden
              className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold-400 via-navy-900/20 to-gold-400 sm:left-1/2"
            />
            <ol className="space-y-10">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 60}>
                  <li
                    className={`relative flex gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                      index % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-2.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-navy-900 sm:left-auto ${
                        index % 2 === 0
                          ? "sm:-right-[7px]"
                          : "sm:-left-[7px]"
                      }`}
                    />
                    <div>
                      <span className="font-display text-sm font-black uppercase tracking-widest text-gold-600">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                        {item.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
