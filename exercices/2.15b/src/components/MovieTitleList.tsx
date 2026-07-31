import { Link } from "react-router-dom";
import { Movie } from "../types";

interface MovieTitleListProps {
  movies: Movie[];
  onMovieDeleted: (id: number) => void;
}

const MovieTitleList = ({ movies, onMovieDeleted }: MovieTitleListProps) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{" "}

          <button onClick={() => onMovieDeleted(movie.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieTitleList;
