interface Film {
    id: number;
    title: string;
    director: string;
    duration: number;
    link?: string;
    description?: string;
    budget?: number;
}

type NewFilm = Omit<Film, "id">;

interface FilmContext {
    films: Film[];
    setFilms: (films: Film[]) => void;
    addFilm: (newFilm: NewFilm) => void;
}

export type { Film, NewFilm, FilmContext }