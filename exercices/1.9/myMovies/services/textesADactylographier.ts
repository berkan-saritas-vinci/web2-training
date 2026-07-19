import { TexteADactylographier, NewTexteADactylographier, Level } from "../types";
import path from "node:path";
import { parse, serialize } from "../utils/json";
import { randomUUID } from "node:crypto";

const jsonDbPath = path.join(__dirname, "/../data/textesADactylographier.json");

const defaultTextesADactylographier: TexteADactylographier[] = [
  {
    id: randomUUID(),
    content:
      "Le développement logiciel demande de la rigueur, de la patience et une pratique régulière afin de maîtriser les différents concepts de programmation.",
    level: Level.easy,
  },
  {
    id: randomUUID(),
    content:
      "TypeScript est une surcouche de JavaScript qui ajoute un système de typage statique permettant de détecter de nombreuses erreurs avant l'exécution du programme.",
    level: Level.medium,
  },
  {
    id: randomUUID(),
    content:
      "L'architecture d'une application moderne repose souvent sur une séparation claire des responsabilités entre les routes, les contrôleurs, les services et les accès aux données, ce qui facilite la maintenance et l'évolution du projet.",
    level: Level.hard,
  },
];

function readAllTextes(level?: "easy" | "medium" | "hard"): TexteADactylographier[] {

    const textes = parse(jsonDbPath, defaultTextesADactylographier);

    if(!level){
        return textes;
    }

    const filteredTextes = textes.filter((texte) => texte.level === level);
    return filteredTextes;
}

function readOneTexte(id: string): TexteADactylographier | undefined {

    const textes = parse(jsonDbPath, defaultTextesADactylographier);
    const texte = textes.find((texte) => texte.id === id);

    if(!texte) {
        return undefined;
    }

    return texte;
    
}

function createOneTexte(newTexte : NewTexteADactylographier): TexteADactylographier {

    const textes = parse(jsonDbPath, defaultTextesADactylographier);

    const createdTexte = {
        id: randomUUID(),
        ...newTexte,
    };

    textes.push(createdTexte);
    serialize(jsonDbPath, textes);

    return createdTexte;
}

function deleteOneTexte(texteId: string): TexteADactylographier | undefined {
    const textes = parse(jsonDbPath, defaultTextesADactylographier);
    const index = textes.findIndex((texte) => texte.id === texteId);

    if(index === -1) {
        return undefined;
    }

    const deletedElement = textes.splice(index, 1);
    return deletedElement[0];
}

function updateOneTexte(texteId : string, newTexte: Partial<NewTexteADactylographier>): TexteADactylographier |undefined {

    const textes = parse(jsonDbPath, defaultTextesADactylographier);
    const texte = textes.find((texte) => texte.id === texteId);

    if(!texte) {
        return undefined;
    }

    if(newTexte.content !== undefined){
        texte.content = newTexte.content;
    }

    if(newTexte.level !== undefined) {
        texte.level = newTexte.level;
    }

    return texte;
}

export {
    readAllTextes,
    readOneTexte,
    createOneTexte,
    deleteOneTexte,
    updateOneTexte
};