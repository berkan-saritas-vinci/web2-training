import { Film, NewFilm } from "../types";
import path from "node:path";
import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Breaking Bad",
    director: "Walter White",
    duration: 1136,
  },
  {
    id: 2,
    title: "Recep Ivedik",
    director: "Sahan Gokbakar",
    duration: 125,
  },
  {
    id: 3,
    title: "Cars 3",
    director: "Pixar",
    duration: 148,
  },
];

function readAllFilms(minDuration: number): Film[] {
    const films = parse(jsonDbPath, defaultFilms);

    if(!minDuration) {
        return films;
    }

    const minDurationNumber = Number(minDuration);

    const filteredFilms = films.filter( (film) => {
        return film.duration >= minDurationNumber;
    });

    return filteredFilms;
}


function readOneFilm(id: number): Film | undefined {

    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find( (film) => film.id === id);

    if(!film) {
        return undefined;
    }

    return film;
}


function createOneFilm(newFilm: NewFilm): Film {

    const films = parse(jsonDbPath, defaultFilms);

    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const createdFilm = {
        id: nextId,
        ...newFilm,
    };

    films.push(createdFilm);
    serialize(jsonDbPath, films);

    return createdFilm;
}

function deleteOneFilm(filmId: number): Film | undefined {

    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);

    if(index === -1) {
        return undefined;
    }

    const deletedFilm = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedFilm[0];
}

function updateOneFilm(filmId: number, newFilm: Partial<NewFilm>): Film | undefined {

    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === filmId);

    if(!film) {
        return undefined;
    }

    if(newFilm.title !== undefined) {
        film.title = newFilm.title;
    }

    if(newFilm.director !== undefined){
        film.director = newFilm.director;
    }

    if(newFilm.duration !== undefined) {
        film.duration = newFilm.duration;
    }

    if(newFilm.budget !== undefined) {
        film.budget = newFilm.budget;
    }

    if(newFilm.description !== undefined) {
        film.description = newFilm.description;
    }

    if(newFilm.imageUrl !== undefined) {
        film.imageUrl = newFilm.imageUrl;
    }

    return film;
}

export {
    readAllFilms,
    readOneFilm,
    createOneFilm, 
    deleteOneFilm,
    updateOneFilm
};