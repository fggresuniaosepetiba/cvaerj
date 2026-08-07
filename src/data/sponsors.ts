export type Sponsor = {
  id: string;
  name: string;
  tier: "titular" | "patrocinador" | "apoio";
  initials: string;
  color: string;
};

export const sponsors: Sponsor[] = [
  { id: "sp1", name: "Banco Atlântico", tier: "titular", initials: "BA", color: "#062047" },
  { id: "sp2", name: "Rede Energia RJ", tier: "titular", initials: "REN", color: "#7f1d1d" },
  { id: "sp3", name: "Esportes Prime", tier: "titular", initials: "EP", color: "#14532d" },
  { id: "sp4", name: "Água Pura Vida", tier: "titular", initials: "PV", color: "#164e63" },
  { id: "sp5", name: "Transportes Ligação", tier: "titular", initials: "TL", color: "#581c87" },
  { id: "sp6", name: "Academia Performance", tier: "titular", initials: "AP", color: "#9a3412" },
  { id: "sp7", name: "Material Esportivo Viva", tier: "titular", initials: "VE", color: "#0f172a" },
  { id: "sp8", name: "Hotel Vale Imperial", tier: "titular", initials: "HVI", color: "#831843" },
];
