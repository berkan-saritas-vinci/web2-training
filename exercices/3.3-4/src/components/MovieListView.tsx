import MovieCard from "./MovieCard";
import { Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
  onMovieDeleted: (id: number) => void;
}

const MovieListView = ({ movies, onMovieDeleted }: MovieListViewProps) => {
  return (
    <div >
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieDeleted={onMovieDeleted} />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
