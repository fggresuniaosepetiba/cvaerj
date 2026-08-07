import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { regulationSections, officialDocuments } from "@/data/regulation";

export const metadata: Metadata = {
  title: "Regulamento",
  description:
    "Regulamento geral, regras de disputa e documentos oficiais do Circuito de Vôlei Amador do Estado do Rio de Janeiro.",
};

export default function RegulamentoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentos Oficiais"
        title="Regulamento do Circuito"
        description="As regras que vão organizar a maior competição de vôlei amador do Estado do Rio de Janeiro."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            <div className="space-y-6">
              {regulationSections.map((section, index) => (
                <Reveal key={section.id} delay={index * 40}>
                  <article className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy-900/10">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950 font-display text-sm font-black text-gold-400">
                        {section.number}
                      </span>
                      <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-navy-900/70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="rounded-xl border border-navy-900/10 bg-white p-7 shadow-sm">
                  <h2 className="flex items-center gap-2 font-display text-lg font-extrabold uppercase tracking-tight text-navy-900">
                    <FileText className="h-5 w-5 text-gold-600" />
                    Documentos oficiais
                  </h2>
                  <p className="mt-2 text-sm text-navy-900/60">
                    Baixe os documentos oficiais do circuito em formato PDF.
                  </p>
                  <ul className="mt-6 space-y-4">
                    {officialDocuments.map((doc) => (
                      <li key={doc.title}>
                        <div className="group block rounded-lg border border-navy-900/10 p-4 transition-colors hover:border-gold-500/50 hover:bg-gold-400/5">
                          <span className="flex items-start justify-between gap-3">
                            <span className="font-display text-sm font-bold leading-snug text-navy-900">
                              {doc.title}
                            </span>
                            <Download className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 transition-transform group-hover:translate-y-0.5" />
                          </span>
                          <span className="mt-1 block text-xs text-navy-900/55">
                            {doc.description}
                          </span>
                          <span className="mt-2 inline-block text-[0.65rem] font-bold uppercase tracking-wider text-gold-600">
                            {doc.tag}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-relaxed text-navy-900/45">
                    Os arquivos em PDF serão disponibilizados em breve pela
                    organização do circuito.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
