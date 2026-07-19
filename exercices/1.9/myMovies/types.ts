interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewFilm = Omit<Film, "id">;

interface TexteADactylographier {
  id: string;
  content: string;
  level: Level;
}

type NewTexteADactylographier = Omit<TexteADactylographier, "id">;

export enum Level {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}


export type { Film, NewFilm, TexteADactylographier, NewTexteADactylographier };
