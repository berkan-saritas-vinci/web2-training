import { Router } from "express";
import { NewFilm } from "../types";
import { readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm } from "../services/films";

const router = Router();

router.get("/", (req, res) => {

  const minDuration = Number(req.query["minimum-duration"]);
  const films = readAllFilms(minDuration);
  return res.status(200).json(films);
});


router.get("/:id", (req, res) => {

    const id = Number(req.params.id);
    const film = readOneFilm(id);

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

    const newFilm = createOneFilm( {
        title,
        director,
        duration,
        budget,
        description,
        imageUrl
    });
    return res.json(newFilm);
});

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);
  const film = deleteOneFilm(id);

  if(!film){
    return res.sendStatus(404);
  }

  return res.json(film);  

});

router.patch("/:id", (req, res) => {

  const id = Number(req.params.id);

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

  const updatedFilm = updateOneFilm(id, {title, director, duration, budget, description, imageUrl});

  if(!updatedFilm) {
    return res.sendStatus(404);
  }
  return res.json(updatedFilm);
});

router.put("/:id", (req, res)=> {

  const id = Number(req.params.id);

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



 const updatedFilm = updateOneFilm(id, {title, director, duration, budget, description, imageUrl});

  if(!updatedFilm) {
    return res.sendStatus(404);
  }
  return res.json(updatedFilm);
});


export default router;
