interface CinemaProps {
  name: string;
  movies: Movie[];
}

interface Movie {
  title: string;
  director: string;
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.movies.map((movie) => (
        <ul key={movie.title}>
          <li><strong>{movie.title}</strong> - Réalisateur : {" "} {movie.director}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cinema;