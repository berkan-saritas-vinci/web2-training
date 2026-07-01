import { Router } from "express";
import { Film } from "../types";

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
    }
];

router.get("/", (_req, res) => {
    return res.json(defaultFilms);
});


export default router;

