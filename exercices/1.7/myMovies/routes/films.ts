import { Router } from "express";
import { Film, NewFilm } from "../types";
import path from "node:path";
import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const router = Router();

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

router.get("/", (req, res) => {

  const films = parse(jsonDbPath, defaultFilms);
  if (!req.query["minimum-duration"]) {
    return res.status(200).json(films);
  }

  const minDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter( (film) => {
    return film.duration >= minDuration;
  });
  return res.status(200).json(filteredFilms);
});


router.get("/:id", (req, res) => {

    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find( (film) => film.id === id);

    if(!film) {
        return res.sendStatus(404);
    }
    return res.status(200).json(film);
});

router.post("/", (req, res) => {

    const body : unknown = req.body;

    if(
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        !body.title.trim() ||
        !body.director.trim()
    ) {
        return res.sendStatus(400);
    }

    if(
      "budget" in body &&
        (typeof body.budget !== "number" || body.budget <= 0)

    ) {
      return res.status(400).json("Wrong budget");
    }

    if(
      !("duration" in body) ||
      (typeof body.duration !== "number" || body.duration <= 0)
     ){
      return res.status(400).json("Wrong duration");
    }

    const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

    const films = parse(jsonDbPath, defaultFilms);

    const nextId = films.reduce( (maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1; 

    const newFilm : Film = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl
    };

    if(films.find( (film) => film.title === newFilm.title && film.director === newFilm.director )){
      return res.sendStatus(409);
    }

    films.push(newFilm);
    serialize(jsonDbPath, films);
    return res.json(newFilm);
});

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex( (film) => film.id === id );

  if(index === -1) {
    return res.sendStatus(404);
  }

  const deletedFilm = films.splice(index, 1);
  return res.json(deletedFilm[0]);
});

router.patch("/:id", (req, res) => {

  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find( (film) => film.id === id);

  if(!film) {
    return res.sendStatus(404);
  }

  const body : unknown = req.body;

  if(
    !body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || Number(body.duration) <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" ||Number(body.budget) <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl} : Partial<NewFilm> = body;

  if(title){
    film.title = title;
  }

  if(director) {
    film.director = director;
  }

  if(duration) {
    film.duration = duration;
  }

  if(budget) {
    film.budget = budget;
  }

  if(description) {
    film.description = description;
  }

  if(imageUrl) {
    film.imageUrl = imageUrl;
  }

  return res.json(film);
});

router.put("/:id", (req, res)=> {

  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find( (film) => film.id === id);

  if(!film) {
    return res.sendStatus(404);
  }

  const body : unknown = req.body;

  if(
     !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        !body.title.trim() ||
        !body.director.trim() ||
        !("duration" in body) ||
        typeof body.duration !== "number" ||
        body.duration <= 0 ||
    ("budget" in body && (typeof body.budget !== "number" ||Number(body.budget) <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl } = body as NewFilm;

    film.title = title;
    film.director = director;
    film.duration = duration;
    film.budget = budget;
    film.description = description;
    film.imageUrl = imageUrl;

return res.status(200).json(film);
});


export default router;
