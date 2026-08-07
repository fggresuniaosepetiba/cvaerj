"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Trophy,
  Medal,
  ShieldCheck,
  Info,
} from "lucide-react";

const inputClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/40 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

const rules = [
  "Equipe de 4 jogadores em quadra",
  "Cada equipe poderá inscrever 5 atletas",
  "A equipe pode ter uma atleta feminina (não obrigatório)",
  "1Kg de alimento não perecível por integrante da equipe, para distribuição de cesta básica para a comunidade",
];

const prizes = [
  { place: "1º lugar", label: "Troféu e medalhas", icon: Trophy },
  { place: "2º lugar", label: "Medalhas", icon: Medal },
  { place: "3º lugar", label: "Medalhas", icon: Medal },
];

export function TeamRegistrationForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 900);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-navy-900">
          Inscrição recebida
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-900/65">
          Recebemos a inscrição da sua equipe. A organização do CVAERJ entrará
          em contato pelo WhatsApp para confirmar a participação.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Nome do time
          </span>
          <input
            type="text"
            name="teamName"
            required
            placeholder="Nome da equipe"
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Nome do responsável
          </span>
          <input
            type="text"
            name="responsibleName"
            required
            placeholder="Representante oficial da equipe"
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Telefone para contato
          </span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(21) 99999-9999"
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Nº do WhatsApp para o grupo
          </span>
          <input
            type="tel"
            name="whatsapp"
            required
            placeholder="(21) 99999-9999"
            className={inputClasses}
          />
        </label>
      </div>

      <div className="rounded-xl border border-navy-900/15 bg-cream-50 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-gold-600" />
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Regras da inscrição
          </h3>
        </div>
        <ul className="mt-4 grid gap-3">
          {rules.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/80"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-navy-900/15 bg-cream-50 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-gold-600" />
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Premiação
          </h3>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className="flex items-center gap-3 rounded-lg bg-white p-4 ring-1 ring-navy-900/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                <prize.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
                  {prize.place}
                </p>
                <p className="mt-0.5 text-xs text-navy-900/60">{prize.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-navy-900/50">
          <Info className="h-3.5 w-3.5 shrink-0" />
          Detalhes da premiação serão confirmados pela organização.
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-navy-900/5 p-4">
        <input
          type="checkbox"
          name="acceptRules"
          required
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-gold-500"
        />
        <span className="text-sm leading-relaxed text-navy-900/80">
          Li e concordo com as{" "}
          <span className="font-semibold text-navy-900">regras</span> e com a{" "}
          <span className="font-semibold text-navy-900">premiação</span> acima,
          e declaro que as informações informadas são verdadeiras.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {submitting ? "Enviando..." : "Enviar inscrição"}
        {!submitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
