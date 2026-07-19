import MovieItem from "./MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

interface Movie {
  title: string;
  director: string;
  description: string;
}

const Cinema = ({name, movies}: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      {movies.map((movie) => (
        <MovieItem key={movie.title} title={movie.title} director={movie.director} description={movie.description} />
      ))}
    </div>
  );
};

export default Cinema;