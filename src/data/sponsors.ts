export type Sponsor = {
  id: string;
  name: string;
  tier: "titular" | "patrocinador" | "apoio";
  logo: string;
  fill?: boolean;
};

export const sponsors: Sponsor[] = [
  {
    id: "sp1",
    name: "Associação de Moradores do Conjunto Otacílio Câmara",
    tier: "apoio",
    logo: "/sponsors/amococ-logo.jpeg",
  },
  {
    id: "sp2",
    name: "Instituto VIV",
    tier: "patrocinador",
    logo: "/sponsors/viv-logo.jpeg",
  },
  {
    id: "sp3",
    name: "Trinary Solutions",
    tier: "patrocinador",
    logo: "/sponsors/logo-trinary.png",
  },
  {
    id: "sp4",
    name: "União de Sepetiba",
    tier: "apoio",
    logo: "/sponsors/logo-escola.jpeg",
  },
  {
    id: "sp5",
    name: "Instituto Ubuntu",
    tier: "apoio",
    logo: "/sponsors/logo-ubuntu.png",
  },
  {
    id: "sp6",
    name: "Hunwxê Zó Nitazoji",
    tier: "apoio",
    logo: "/sponsors/hunwxe-logo.jpeg",
    fill: true,
  },
];
