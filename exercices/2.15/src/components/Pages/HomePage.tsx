import { Link } from "react-router-dom";
import type { FilmContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const texte =
    "L'adresse idéale pour voir nos séléction de films et nos cinémas";

  const { films }: FilmContext = useOutletContext();

  return (
    <div>
      <h3>Bienvenue chez CineMass</h3>

{films.map((film) => (
    <Link key={film.id} to={`/movie/${film.id}`} style={{display: "block"}}>
        {film.title}
    </Link>
))}

      <p>{texte}</p>
    </div>
  );
};

export default HomePage;
