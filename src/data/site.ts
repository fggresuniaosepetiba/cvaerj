export const siteConfig = {
  shortName: "CVAERJ",
  name: "Circuito de Vôlei Amador do Estado do Rio de Janeiro",
  slogan: "O maior palco do vôlei amador do Estado do Rio de Janeiro.",
  vision: "Ser a maior competição de vôlei amador do Estado do Rio de Janeiro.",
  description:
    "O site oficial do Circuito de Vôlei Amador do Estado do Rio de Janeiro (CVAERJ) — o maior palco do vôlei amador do Estado do Rio de Janeiro, com etapas, equipes, rankings e notícias de todo o estado.",
  url: "https://www.cvaerj.com.br",
  email: "contato@cvaerj.com.br",
  whatsapp: "5521999999999",
  whatsappDisplay: "(21) 99999-9999",
  instagram: "https://instagram.com/cvaerj",
  facebook: "https://facebook.com/cvaerj",
  youtube: "https://youtube.com/@cvaerj",
  city: "Rio de Janeiro – RJ",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre o Circuito", href: "/sobre" },
  { label: "Etapas", href: "/etapas" },
  { label: "Equipes", href: "/equipes" },
  { label: "Ranking", href: "/ranking" },
  { label: "Galeria", href: "/galeria" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Contato", href: "/contato" },
];
