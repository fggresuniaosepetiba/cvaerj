import type { Metadata } from "next";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a organização do CVAERJ por WhatsApp, e-mail ou redes sociais. Tire dúvidas, inscreva sua equipe ou proponha parcerias.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    note: "Resposta rápida em horário comercial",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Resposta em até 24 horas úteis",
  },
  {
    icon: MapPin,
    title: "Base do Circuito",
    value: siteConfig.city,
    href: undefined,
    note: "Etapas previstas em todo o estado",
  },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.instagram },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.facebook },
  { icon: YoutubeIcon, label: "YouTube", href: siteConfig.youtube },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fale Conosco"
        title="Contato"
        description="Estamos prontos para ouvir atletas, equipes, torcedores e parceiros do vôlei do Estado do Rio de Janeiro."
      />

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map((channel, index) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                    <channel.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                    {channel.title}
                  </h3>
                  <p className="mt-1 break-words font-semibold text-gold-600">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-xs text-navy-900/55">{channel.note}</p>
                </>
              );
              return (
                <Reveal key={channel.title} delay={index * 80}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group block h-full rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy-900/10 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {content}
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-900/50 transition-colors group-hover:text-gold-600">
                        Abrir canal
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  ) : (
                    <div className="h-full rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy-900/10">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-navy-900/15 bg-white px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:border-gold-500 hover:text-gold-600"
              >
                <social.icon className="h-4.5 w-4.5" />
                {social.label}
              </a>
            ))}
          </div>

          <div className="mt-20">
            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-navy-900/10 ring-1 ring-navy-900/10 sm:p-12">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-balance text-center font-display text-2xl font-extrabold uppercase tracking-tight text-navy-900 sm:text-3xl">
                  Envie sua mensagem
                </h2>
                <p className="mt-3 text-center text-sm text-navy-900/60">
                  Dúvidas sobre inscrições, etapas, filiação de equipes ou
                  parcerias? Fale com a organização.
                </p>
                <div className="mt-8">
                  <ContactForm subject="Contato — Site CVAERJ" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
