import MovieItem from "../hooks/MovieItem";

const movies = [
  { title: "Inception", director: "Christopher Nolan", description: "..." },
  { title: "Interstellar", director: "Christopher Nolan", description: "..." },
];

const CinemaPage = () => {
  return (
    <div>
      <h2>UCG De Brouckère</h2>
      {movies.map((movie) => (
        <MovieItem
          key={movie.title}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default CinemaPage;
