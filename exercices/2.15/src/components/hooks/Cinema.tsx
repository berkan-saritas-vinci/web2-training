import type { Film } from "../../types";
import "./Cinema.css";

interface CinemaProps {
  films: Film[];
}

const Cinema = ({ films }: CinemaProps) => {
  return (
    <div>
      {films.map((film) => (
        <ul className="list" key={film.id}>
          <li>Titre: {film.title}</li>
          <li>Directeur: {film.director}</li>
          <li>Durée: {film.duration} Minutes</li>
          <li>Lien: {film.link}</li>
          <li>Description: {film.description}</li>
          <li>Budget: {film.budget} Million</li>
        </ul>
      ))}
    </div>
  );
};

export default Cinema;
