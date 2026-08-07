export type Team = {
  id: string;
  name: string;
  city: string;
  category: string;
  emblem: string;
  initials: string;
  color: string;
};

export const teamCategories = [
  "Masculino Livre",
  "Feminino Livre",
  "Misto",
  "Masculino Master",
  "Feminino Master",
] as const;

export const teams: Team[] = [];
