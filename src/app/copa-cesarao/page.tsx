import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TeamRegistrationForm } from "@/components/ui/TeamRegistrationForm";

export const metadata: Metadata = {
  title: "Copa Cesarão do Quarteto de Vôlei",
  description:
    "Garanta a vaga da sua equipe na primeira temporada da Copa Cesarão do Quarteto de Vôlei. Preencha os dados abaixo e a organização entrará em contato pelo WhatsApp para confirmar a participação.",
};

export default function CopaCesaraoPage() {
  return (
    <>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-20 pb-16">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(1,17,48,.96) 0%, rgba(1,10,30,.98) 70%), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 15%, rgba(246,190,99,.25) 0, transparent 45%)",
          }}
        />

        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-300">
              <Trophy className="h-3.5 w-3.5" />
              1ª Copa Cesarão
            </p>

            <h1 className="text-balance font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Garanta a vaga da sua equipe na primeira temporada da{" "}
              <span className="text-gold-400">
                Copa Cesarão do Quarteto de Vôlei
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium text-cream-100/85 sm:text-lg">
              Preencha os dados abaixo e a organização entrará em contato pelo
              WhatsApp para confirmar a participação.
            </p>
          </div>
        </Container>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
        />
      </section>

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
                  <TeamRegistrationForm orgName="Copa Cesarão" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
