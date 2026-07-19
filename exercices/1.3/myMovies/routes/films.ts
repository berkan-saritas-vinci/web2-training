import { Router } from "express";
import { Film, NewFilm } from "../types";

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
  if (!req.query["minimum-duration"]) {
    return res.json(defaultFilms);
  }

  const minDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = defaultFilms.filter( (film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredFilms);
});


router.get("/:id", (req, res) => {

    const id = Number(req.params.id);
    const film = defaultFilms.find( (film) => film.id === id);

    if(!film) {
        return res.sendStatus(404);
    }
    return res.json(film);
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

    const nextId = defaultFilms.reduce( (maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1; 

    const newFilm : Film = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl
    };

    defaultFilms.push(newFilm);
    return res.json(newFilm);
});


export default router;
