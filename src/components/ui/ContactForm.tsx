"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  subject?: string;
  ctaLabel?: string;
  compact?: boolean;
};

const inputClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/40 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

export function ContactForm({
  subject = "Contato pelo site",
  ctaLabel = "Enviar mensagem",
  compact = false,
}: ContactFormProps) {
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
          Mensagem enviada
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-900/65">
          Recebemos sua mensagem. A organização do CVAERJ entrará em contato em
          breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Nome
          </span>
          <input type="text" name="name" required placeholder="Seu nome" className={inputClasses} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            E-mail
          </span>
          <input type="email" name="email" required placeholder="voce@email.com" className={inputClasses} />
        </label>
      </div>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Telefone / WhatsApp
          </span>
          <input type="tel" name="phone" placeholder="(21) 99999-9999" className={inputClasses} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
            Empresa / Equipe
          </span>
          <input type="text" name="company" placeholder="Opcional" className={inputClasses} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-900/70">
          Mensagem
        </span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          placeholder="Como podemos ajudar?"
          className={cn(inputClasses, "resize-y")}
        />
      </label>
      <input type="hidden" name="subject" value={subject} />
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {submitting ? "Enviando..." : ctaLabel}
        {!submitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
