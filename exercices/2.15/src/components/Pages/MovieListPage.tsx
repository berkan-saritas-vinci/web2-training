import type { FilmContext } from "../../types";
import Cinema from "../hooks/Cinema";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {

  const {
    films,
  }: FilmContext = useOutletContext();

    return (
      <div>
        <Cinema films={films} />
      </div>
    )
}

export default MovieListPage;