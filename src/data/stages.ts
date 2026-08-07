export type StageStatus = "confirmada" | "inscricoes" | "realizada";

export type Stage = {
  id: string;
  name: string;
  edition: string;
  city: string;
  venue: string;
  start: string;
  end: string;
  status: StageStatus;
  categories: string[];
  highlights?: string[];
};

export const currentEdition = "1º Circuito CVAERJ";

export const stages: Stage[] = [
  {
    id: "s01",
    name: "Etapa de Abertura — Rio de Janeiro",
    edition: currentEdition,
    city: "Rio de Janeiro",
    venue: "Arena Carioca — Centro Esportivo Miécimo da Silva",
    start: "2026-09-19",
    end: "2026-09-20",
    status: "inscricoes",
    categories: ["Masculino Livre", "Feminino Livre", "Misto", "Master"],
    highlights: ["Inscrições abertas para a temporada de estreia"],
  },
  {
    id: "s02",
    name: "Etapa Serra Imperial — Petrópolis",
    edition: currentEdition,
    city: "Petrópolis",
    venue: "Ginásio Poliesportivo Pedro Jahara",
    start: "2026-10-17",
    end: "2026-10-18",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto"],
  },
  {
    id: "s03",
    name: "Etapa das Praias — Cabo Frio",
    edition: currentEdition,
    city: "Cabo Frio",
    venue: "Ginásio Municipal de Cabo Frio",
    start: "2026-11-07",
    end: "2026-11-08",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto", "Feminino Master"],
  },
  {
    id: "s04",
    name: "Etapa Norte Fluminense — Campos",
    edition: currentEdition,
    city: "Campos dos Goytacazes",
    venue: "Ginásio de Esportes Godofredo Tinoco",
    start: "2026-11-21",
    end: "2026-11-22",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto", "Masculino Master"],
  },
  {
    id: "s05",
    name: "Etapa Região dos Lagos — Rio das Ostras",
    edition: currentEdition,
    city: "Rio das Ostras",
    venue: "Ginásio Municipal de Esportes",
    start: "2026-12-05",
    end: "2026-12-06",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto", "Master"],
  },
  {
    id: "s06",
    name: "Etapa Centro-Sul — Valença",
    edition: currentEdition,
    city: "Valença",
    venue: "Ginásio Municipal Paulo Machado",
    start: "2027-01-16",
    end: "2027-01-17",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto"],
  },
  {
    id: "s07",
    name: "Etapa Metropolitana — São Gonçalo",
    edition: currentEdition,
    city: "São Gonçalo",
    venue: "Ginásio Poliesportivo do Mutondo",
    start: "2027-02-06",
    end: "2027-02-07",
    status: "confirmada",
    categories: ["Masculino Livre", "Feminino Livre", "Misto", "Master"],
  },
  {
    id: "s08",
    name: "Grande Final — Rio de Janeiro",
    edition: currentEdition,
    city: "Rio de Janeiro",
    venue: "Arena do Circuito CVAERJ",
    start: "2027-03-13",
    end: "2027-03-14",
    status: "confirmada",
    categories: ["Todas as categorias"],
    highlights: ["Grande Final da temporada de estreia", "Troféu de Campeão Estadual CVAERJ"],
  },
];

export const nextStage = stages.find((s) => s.status === "inscricoes") ?? stages[0];

export const stageStatusMeta: Record<
  StageStatus,
  { label: string; className: string }
> = {
  confirmada: {
    label: "Confirmada",
    className: "bg-gold-400/15 text-gold-300 ring-gold-400/40",
  },
  inscricoes: {
    label: "Inscrições abertas",
    className: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/40",
  },
  realizada: {
    label: "Realizada",
    className: "bg-white/10 text-cream-100 ring-white/20",
  },
};
