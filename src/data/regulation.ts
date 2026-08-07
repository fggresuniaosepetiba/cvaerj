export type RegulationSection = {
  id: string;
  number: string;
  title: string;
  items: string[];
};

export const regulationSections: RegulationSection[] = [
  {
    id: "geral",
    number: "01",
    title: "Disposições Gerais",
    items: [
      "O CVAERJ — Circuito de Vôlei Amador do Estado do Rio de Janeiro é uma competição anual, organizada em etapas realizadas em cidades do estado.",
      "A participação é aberta a equipes amadoras de qualquer município do Estado do Rio de Janeiro, mediante filiação e inscrição em etapa.",
      "As etapas são disputadas nas categorias Masculino Livre, Feminino Livre, Misto, Masculino Master e Feminino Master.",
      "A organização do circuito detém a supervisão técnica e disciplinar de todas as etapas.",
    ],
  },
  {
    id: "inscricoes",
    number: "02",
    title: "Inscrição de Equipes",
    items: [
      "Cada equipe deve apresentar um representante oficial responsável pela inscrição e pelo contato com a organização.",
      "O número mínimo de atletas por equipe, em cada etapa, é de 8 (oito), com limite máximo de 12 (doze) atletas inscritos.",
      "Atletas com registro profissional em federações de vôlei no ano corrente não podem compor equipes nas categorias Livres.",
      "As inscrições de cada etapa são encerradas conforme o prazo divulgado no calendário oficial.",
    ],
  },
  {
    id: "jogos",
    number: "03",
    title: "Formato de Disputa",
    items: [
      "As etapas são disputadas em grupos, seguidos de fase eliminatória, conforme o número de equipes inscritas.",
      "Todos os jogos são disputados no sistema de melhor de 3 sets, com tie-break em 15 pontos a partir do 3º set.",
      "A pontuação segue o sistema de setas e pontos corridos, conforme o regulamento técnico oficial.",
      "A classificação final de cada etapa gera pontos válidos para o Ranking da Temporada.",
    ],
  },
  {
    id: "pontuacao",
    number: "04",
    title: "Pontuação e Ranking",
    items: [
      "Vitória por 3 sets a 0 ou 3 a 1: 3 pontos. Vitória por 3 a 2: 2 pontos. Derrota por 2 a 3: 1 ponto. Derrota por 0 ou 1 set: 0 pontos.",
      "Os pontos do Ranking da Temporada são somados ao longo do ano e definem a classificação final do circuito.",
      "Ao final da temporada, a pontuação é consolidada no Ranking Geral do CVAERJ.",
      "A Grande Final conta com pontuação em dobro para o Ranking da Temporada.",
    ],
  },
  {
    id: "disciplina",
    number: "05",
    title: "Disciplina e Conduta",
    items: [
      "Atletas, comissões técnicas e equipes devem respeitar o espírito esportivo dentro e fora de quadra.",
      "Condutas antidesportivas são julgadas pela Comissão Disciplinar do circuito, conforme o regulamento.",
      "As decisões da arbitragem em quadra são soberanas para a partida em curso.",
      "Recursos devem ser protocolados por escrito junto à organização no prazo máximo de 48 horas após o encerramento da etapa.",
    ],
  },
  {
    id: "premios",
    number: "06",
    title: "Premiação",
    items: [
      "As equipes campeãs e vice-campeãs de cada etapa recebem troféus e medalhas.",
      "Ao final da temporada, os campeões de cada categoria recebem o Troféu de Campeão Estadual do CVAERJ.",
      "As equipes do pódio final do Ranking da Temporada recebem premiação de acordo com o regulamento da edição.",
    ],
  },
];

export const officialDocuments = [
  {
    title: "Regulamento Geral do Circuito",
    description: "Documento completo com todas as normas da competição.",
    tag: "PDF · Atualizado em 2026",
  },
  {
    title: "Regulamento Técnico de Etapa",
    description: "Regras de disputa, arbitragem e pontuação das etapas.",
    tag: "PDF · Atualizado em 2026",
  },
  {
    title: "Código de Conduta Esportiva",
    description: "Normas disciplinares aplicáveis a atletas, equipes e torcidas.",
    tag: "PDF · Atualizado em 2026",
  },
  {
    title: "Termo de Filiação de Equipe",
    description: "Documento para filiação oficial de novas equipes ao circuito.",
    tag: "PDF · Modelo",
  },
];
