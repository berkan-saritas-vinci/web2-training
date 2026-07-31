import { useMatch, useOutletContext } from "react-router-dom"
import type { FilmContext } from "../../types"

const MoviePage = () => {

const {
    films,
}: FilmContext = useOutletContext();

const match = useMatch("/movie/:movieId");
const movieId = match?.params.movieId;
const numberMovieId = Number(movieId);

if(!movieId){
    return (
        <p>Movie not found</p>
    );
}

const movie = films.find((film) => film.id === numberMovieId);

if(!movie) {
    return (
        <p>Movie not found</p>
    );
}

return (
    <div>
        <h2>Titre: {movie.title}</h2>
        <p>Directeur: {movie.director}</p>
        <p>Durée: {movie.duration} Minutes</p>
        <p>Lien: {movie.link ? movie.link : "Pas de lien"}</p>
        <p>Description: {movie.description ? movie.description : "Pas préciser"}</p>
        <p>Budget: {movie.budget ? movie.budget + "Million" : "Pas préciser"}</p>
    </div>
);
};

export default MoviePage;
