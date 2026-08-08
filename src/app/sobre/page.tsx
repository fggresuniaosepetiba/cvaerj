import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, ShieldCheck, Scale, Users, UserRound } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DirectorPhoto } from "@/components/ui/DirectorPhoto";
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
    year: "2024",
    title: "G.R.E.S. União de Sepetiba",
    text: "João Ribeiro funda a G.R.E.S. União de Sepetiba, escola de samba da região.",
  },
  {
    year: "2025",
    title: "Quinto Set Escolinha de Vôlei",
    text: "Marlon Silva procura João Ribeiro e, juntos, idealizam a Quinto Set Escolinha de Vôlei.",
  },
  {
    year: "2026",
    title: "O nascimento do CVAERJ",
    text: "Marlon Silva e João Ribeiro tiram a Quinto Set do papel e, juntos, fundam o CVAERJ para realizar competições de vôlei amador.",
  },
];

const executiveBoard = [
  {
    name: "João Ribeiro",
    role: "Presidente",
    initials: "JR",
    photo: "/sobre/joao-ribeiro.jpg",
    bio: "Empreendedor, cientista de dados e dirigente, Ribeiro atua na construção de projetos esportivos, culturais e sociais voltados ao fortalecimento de sua comunidade.",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Marlon Silva",
    role: "Diretor Executivo Geral",
    initials: "MS",
    photo: "/sobre/marlon-silva.jpg",
    bio: "Professor de Educação Física e atleta amador, Marlon é idealizador da Quinto Set e atua na construção esportiva do projeto.",
    aspect: "aspect-[3/4]",
  },
];

const boardMembers: {
  name: string;
  role: string;
  initials: string;
  photo?: string;
}[] = [];

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
              <SectionHeading
                eyebrow="O Projeto"
                title="Nasce da educação esportiva, pronto para crescer por todo o estado"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-900/75 sm:text-lg">
                <p>
                  O CVAERJ nasce da educação esportiva. A história começa com
                  Marlon Silva — professor de Educação Física formado pela
                  Universidade Federal Rural do Rio de Janeiro (UFRRJ) e atleta
                  amador — que sempre teve o desejo de criar uma escolinha de
                  vôlei para os jovens e adolescentes de sua comunidade.
                </p>
                <p>
                  Para tirar essa ideia do papel, Marlon procurou João Ribeiro,
                  cientista de dados formado pela UNINABUCO, presidente
                  executivo da G.R.E.S. União de Sepetiba e diretor executivo
                  do Instituto Ubuntu. Desse encontro nasceu a Quinto Set
                  Escolinha de Vôlei, projeto de formação que João passou a
                  presidir.
                </p>
                <p>
                  Foi a partir da experiência e da construção conjunta em torno
                  da escolinha que surgiu uma nova ambição: criar uma
                  competição capaz de reunir equipes e atletas do vôlei amador
                  de diferentes regiões do Estado do Rio de Janeiro. É desse
                  movimento que nasce o CVAERJ.
                </p>
                <p>
                  O circuito está começando agora. A primeira edição será
                  disputada no Cesarão, no Rio de Janeiro — não como uma
                  limitação, mas como o ponto de partida desta história. Nos
                  próximos anos, a meta é percorrer o estado, aproximar as
                  regiões e construir uma das grandes referências do vôlei
                  amador brasileiro.
                </p>
                <p className="border-l-2 border-gold-500 pl-4 font-display text-lg font-bold text-navy-900">
                  Começamos em um lugar, mas pensamos no Estado inteiro.
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
                    className={`relative flex gap-6 pl-12 sm:w-1/2 ${
                      index % 2 === 0
                        ? "sm:pl-0 sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-2.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-navy-900 ${
                        index % 2 === 0
                          ? "sm:left-auto sm:-right-[7px]"
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
            eyebrow="Liderança"
            title="Diretoria Executiva"
            align="center"
            dark
            description="Duas pessoas, uma mesma visão: construir o vôlei amador do Estado do Rio de Janeiro."
          />
          <div className="mx-auto mt-16 grid max-w-4xl gap-14 sm:grid-cols-2 sm:gap-10 lg:gap-16">
            {executiveBoard.map((member, index) => (
              <Reveal key={member.name} delay={index * 120}>
                <article
                  className={`flex flex-col ${index % 2 === 1 ? "lg:mt-16" : ""}`}
                >
                  <DirectorPhoto
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    initials={member.initials}
                    className={member.aspect}
                  />
                  <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-display text-sm font-bold uppercase tracking-widest text-gold-400">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
                    {member.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Estrutura"
            title="Diretores"
            align="center"
            description="A composição completa da diretoria será anunciada em breve."
          />

          {boardMembers.length > 0 ? (
            <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 80}>
                  <figure className="text-center">
                    <DirectorPhoto
                      src={member.photo}
                      alt={`Foto de ${member.name}`}
                      initials={member.initials}
                      className="aspect-square"
                    />
                    <figcaption className="mt-4">
                      <p className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
                        {member.role}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto mt-14 max-w-xl rounded-xl border border-gold-500/40 bg-gold-400/10 p-10 text-center">
                <UserRound className="mx-auto h-10 w-10 text-gold-600" />
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
                  Em breve
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  Os demais diretores do CVAERJ serão apresentados aqui, com
                  foto, nome e cargo de cada integrante da diretoria.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
