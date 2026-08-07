import type { Metadata } from "next";
import {
  Megaphone,
  TrendingUp,
  Users,
  MonitorPlay,
  BadgePercent,
  Handshake,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Patrocinadores",
  description:
    "Conheça as oportunidades de patrocínio do CVAERJ e associe sua marca à maior competição de vôlei amador do Rio de Janeiro.",
};

const benefits = [
  {
    icon: Megaphone,
    title: "Marca em evidência",
    text: "Visibilidade da sua marca em toda a comunicação oficial, quadras e materiais do circuito.",
  },
  {
    icon: TrendingUp,
    title: "Mídia espontânea",
    text: "Cobertura da imprensa esportiva e dos canais oficiais em cada etapa do circuito.",
  },
  {
    icon: Users,
    title: "Audiência qualificada",
    text: "Acesso direto a atletas, equipes e torcedores apaixonados por esporte em todo o estado.",
  },
  {
    icon: MonitorPlay,
    title: "Conteúdo exclusivo",
    text: "Destaque em transmissões, fotos, vídeos e resumos oficiais de cada etapa.",
  },
  {
    icon: BadgePercent,
    title: "Cotas flexíveis",
    text: "Pacotes de patrocínio ajustáveis ao objetivo e ao orçamento da sua empresa.",
  },
  {
    icon: Handshake,
    title: "Ativação em quadra",
    text: "Ativações presenciais, brindes e experiências junto às torcidas nas cidades-sede.",
  },
];

const packages = [
  {
    name: "Cota Titular",
    price: "Maior visibilidade",
    highlight: true,
    features: [
      "Logo em destaque em todas as etapas",
      "Naming em etapas e premiações",
      "Ativações em quadra e com torcida",
      "Destaque nos canais e transmissões",
      "Relatório de exposição da marca",
    ],
  },
  {
    name: "Cota Patrocinador",
    price: "Exposição regional",
    highlight: false,
    features: [
      "Logo nos materiais oficiais",
      "Presença nas redes sociais do circuito",
      "Ativação em etapas selecionadas",
      "Menção nas transmissões",
    ],
  },
  {
    name: "Cota Apoio",
    price: "Entrada no circuito",
    highlight: false,
    features: [
      "Logo na seção de patrocinadores do site",
      "Menção nos canais oficiais",
      "Kit institucional do circuito",
    ],
  },
];

export default function PatrocinadoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Para Empresas"
        title="Patrocine o vôlei amador do Estado do Rio de Janeiro"
        description="Associe sua marca à maior competição de vôlei amador do Estado do Rio de Janeiro e conecte-se com milhares de atletas e torcedores."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Benefícios"
            title="Por que patrocinar o CVAERJ"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 60}>
                <div className="h-full rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy-900/10 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                    <benefit.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {benefit.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="Cotas de Patrocínio"
              title="Escolha o pacote ideal para sua marca"
              align="center"
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <Reveal key={pkg.name} delay={index * 80}>
                  <div
                    className={
                      pkg.highlight
                        ? "relative flex h-full flex-col rounded-2xl bg-navy-950 p-8 shadow-2xl shadow-navy-900/40"
                        : "flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-900/10"
                    }
                  >
                    {pkg.highlight && (
                      <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-4 py-1 font-display text-xs font-black uppercase tracking-wider text-navy-950">
                        Destaque
                      </span>
                    )}
                    <h3
                      className={
                        pkg.highlight
                          ? "font-display text-xl font-extrabold uppercase tracking-wide text-gold-400"
                          : "font-display text-xl font-extrabold uppercase tracking-wide text-navy-900"
                      }
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={
                        pkg.highlight
                          ? "mt-1 text-sm font-semibold text-cream-100/60"
                          : "mt-1 text-sm font-semibold text-navy-900/50"
                      }
                    >
                      {pkg.price}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className={
                            pkg.highlight
                              ? "flex gap-2.5 text-sm leading-relaxed text-cream-100/80"
                              : "flex gap-2.5 text-sm leading-relaxed text-navy-900/70"
                          }
                        >
                          <span
                            className={
                              pkg.highlight
                                ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                                : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                            }
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contato"
                      className={
                        pkg.highlight
                          ? "mt-8 inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-gold-400"
                          : "mt-8 inline-flex items-center justify-center rounded-lg border border-navy-900/20 px-6 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
                      }
                    >
                      Solicitar proposta
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="contato" className="mt-24 scroll-mt-28">
            <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-lg shadow-navy-900/10 ring-1 ring-navy-900/10 sm:p-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Fale com a gente"
                  title="Vamos conversar sobre sua marca"
                  description="Preencha o formulário e nossa equipe comercial entrará em contato com uma proposta personalizada."
                />
                <div className="mt-8 space-y-4 text-sm text-navy-900/70">
                  <p className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                    Retorno em até 24 horas úteis
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                    Relatório de visibilidade incluso
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                    Ativações em todo o estado
                  </p>
                </div>
              </div>
              <ContactForm subject="Proposta de patrocínio" ctaLabel="Enviar proposta" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
