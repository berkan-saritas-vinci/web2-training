import { Router } from "express";
import { NewTexteADactylographier } from "../types";
import { readAllTextes, readOneTexte, createOneTexte, deleteOneTexte, updateOneTexte } from "../services/textesADactylographier";

const router = Router();

router.get("/", (req, res) => {

    const level = req.query["level"];

    if (level !== undefined && 
        level !== "easy" &&
        level !== "medium" &&
        level !== "hard"
    ) {
        return res.sendStatus(400);
    }

    const textes = readAllTextes(level);
    return res.status(200).json(textes);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const texte = readOneTexte(id);

    if(!texte) {
        return res.sendStatus(404);
    }

    return res.status(200).json(texte);
});

router.post("/", (req, res) => {

    const body : unknown = req.body;

    if(
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        !body.content.trim() ||
        !body.level
    ) {
        return res.sendStatus(400);
    }

    const { content, level } = body as NewTexteADactylographier;

    const newTexteADactylographier = createOneTexte( {
        content,
        level
    });
    return res.json(newTexteADactylographier);
});

router.delete("/:id", (req, res) => {

    const id = req.params.id;
    const texte = deleteOneTexte(id);

    if(!texte) {
        return res.sendStatus(404);
    }

    return res.json(texte);
});

router.put("/:id", (req, res) => {

    const id = req.params.id;
    const body: unknown = req.body;


    if(
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        !body.content.trim() ||
        !body.level
    ) {
        return res.sendStatus(400);
    }

    const { content, level } = body as NewTexteADactylographier;

    const updatedTexte = updateOneTexte(id, {content, level});

    if(!updatedTexte) {
        return res.sendStatus(404);
    }
    return res.json(updatedTexte);
});

export default router;