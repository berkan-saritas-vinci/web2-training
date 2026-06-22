
interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
}


// à retirer à la fin de l'exercice

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Film };
