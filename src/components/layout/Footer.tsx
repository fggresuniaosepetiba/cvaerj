import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre o Circuito", href: "/sobre" },
  { label: "Etapas", href: "/etapas" },
  { label: "Equipes Participantes", href: "/equipes" },
  { label: "Ranking da Temporada", href: "/ranking" },
  { label: "Ranking Geral", href: "/ranking-geral" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Galeria", href: "/galeria" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Contato", href: "/contato" },
];

const institutionalLinks = [
  { label: "Regulamento Geral", href: "/regulamento" },
  { label: "Documentos Oficiais", href: "/regulamento" },
  { label: "Seja um Patrocinador", href: "/patrocinadores" },
  { label: "Fale Conosco", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-cream-100">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-16 w-16" />
              <div className="leading-none">
                <p className="font-display text-xl font-black uppercase tracking-wide text-white">
                  CVAERJ
                </p>
                <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-gold-400">
                  Circuito de Vôlei Amador
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {siteConfig.name}. Uma competição que vai transformar a paixão
              pelo vôlei em tradição em todo o estado.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <YoutubeIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
              Institucional
            </h3>
            <ul className="mt-5 space-y-3">
              {institutionalLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.city}</span>
              </li>
            </ul>
            <Link
              href="/contato"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold-500 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-gold-400"
            >
              Fale com a organização
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-100/50">
            © {new Date().getFullYear()} CVAERJ — Circuito de Vôlei Amador do
            Estado do Rio de Janeiro. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream-100/40">
            Presidente Executivo: João Ribeiro
          </p>
          <p className="text-xs uppercase tracking-widest text-cream-100/40">
            Feito com paixão pelo vôlei
          </p>
        </Container>
      </div>
    </footer>
  );
}
