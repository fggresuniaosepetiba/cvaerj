export type Sponsor = {
  id: string;
  name: string;
  tier: "titular" | "patrocinador" | "apoio";
  logo: string;
};

export const sponsors: Sponsor[] = [
  {
    id: "sp1",
    name: "Trinary Solutions",
    tier: "patrocinador",
    logo: "/sponsors/logo-trinary.png",
  },
  {
    id: "sp2",
    name: "Instituto VIV",
    tier: "patrocinador",
    logo: "/sponsors/viv-logo.jpeg",
  },
  {
    id: "sp3",
    name: "União de Sepetiba",
    tier: "apoio",
    logo: "/sponsors/logo-escola.jpeg",
  },
  {
    id: "sp4",
    name: "Instituto Ubuntu",
    tier: "apoio",
    logo: "/sponsors/logo-ubuntu.png",
  },
];
