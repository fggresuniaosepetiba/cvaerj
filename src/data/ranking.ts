export type RankingEntry = {
  position: number;
  team: string;
  teamId: string;
  points: number;
  stages: number;
  titles: number;
};

export const seasonRanking: RankingEntry[] = [];

export const generalRanking: RankingEntry[] = [];
