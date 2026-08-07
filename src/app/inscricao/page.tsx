import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TeamRegistrationForm } from "@/components/ui/TeamRegistrationForm";

export const metadata: Metadata = {
  title: "Inscrição de Equipe",
  description:
    "Inscreva sua equipe no CVAERJ. Preencha os dados do time e do responsável para garantir vaga nas etapas do circuito.",
};

export default function InscricaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inscrições"
        title="Inscreva sua equipe"
        description="Garanta a vaga da sua equipe na temporada de estreia do CVAERJ. Preencha os dados abaixo e a organização entrará em contato pelo WhatsApp para confirmar a participação."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-2xl bg-white p-8 shadow-lg shadow-navy-900/10 ring-1 ring-navy-900/10 sm:p-12">
                <h2 className="text-balance text-center font-display text-2xl font-extrabold uppercase tracking-tight text-navy-900 sm:text-3xl">
                  Formulário de inscrição
                </h2>
                <p className="mt-3 text-center text-sm text-navy-900/60">
                  Temporada 2026 · Vagas limitadas · Inscrições por etapa
                  conforme o calendário oficial.
                </p>
                <div className="mt-8">
                  <TeamRegistrationForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
