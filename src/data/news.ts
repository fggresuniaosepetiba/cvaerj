export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
};

export const news: NewsItem[] = [
  {
    id: "n01",
    title: "Inscrições abertas para a primeira temporada do CVAERJ",
    excerpt:
      "Equipes amadoras de todo o Estado do Rio de Janeiro já podem garantir vaga na temporada de estreia do circuito, com etapas em diferentes regiões.",
    category: "Inscrições",
    date: "2026-07-20",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1400&auto=format&fit=crop",
    readTime: "3 min",
  },
  {
    id: "n02",
    title: "Rankings preparados para registrar a pontuação oficial",
    excerpt:
      "O Ranking da Temporada e o Ranking Geral estão prontos para receber a pontuação das equipes a partir da primeira etapa do circuito.",
    category: "Ranking",
    date: "2026-07-06",
    image:
      "https://images.unsplash.com/photo-1686753767715-37cb0c34212c?q=80&w=1400&auto=format&fit=crop",
    readTime: "4 min",
  },
  {
    id: "n03",
    title: "Calendário da temporada de estreia começa a ser revelado",
    excerpt:
      "A organização confirma as primeiras cidades-sede da temporada inaugural, cruzando a capital, a Região Serrana, os Lagos e o interior do estado.",
    category: "Etapas",
    date: "2026-06-22",
    image:
      "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1400&auto=format&fit=crop",
    readTime: "3 min",
  },
  {
    id: "n04",
    title: "CVAERJ apresenta o formato oficial da competição",
    excerpt:
      "Regulamento, categorias e critérios de pontuação já estão disponíveis para as equipes interessadas em disputar a temporada inaugural.",
    category: "Circuito",
    date: "2026-06-08",
    image:
      "https://images.unsplash.com/photo-1479859546309-cd77fa21c8f6?q=80&w=1400&auto=format&fit=crop",
    readTime: "5 min",
  },
];

export const formatDatePtBR = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
