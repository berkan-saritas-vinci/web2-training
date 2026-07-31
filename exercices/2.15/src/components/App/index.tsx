import "./App.css";
import Header from "../Header/index";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import type { FilmContext, NewFilm, Film } from "../../types";

// const defaultFilms: Film[] = [
//   {
//     id: 1,
//     title: "Bleach",
//     director: "Noriyuki Abe",
//     duration: 366,
//   },
//   {
//     id: 2,
//     title: "Inception",
//     director: "Christopher Nolan",
//     duration: 148,
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     duration: 169,
//   },
//   {
//     id: 4,
//     title: "Parasite",
//     director: "Bong Joon-ho",
//     duration: 132,
//   },
//   {
//     id: 5,
//     title: "Spirited Away",
//     director: "Hayao Miyazaki",
//     duration: 125,
//   },
// ];

function App() {
  const [films, setFilms] = useState<Film[]>([]);

  async function getAllFilms() {
    try {
      const response = await fetch("/api/films");

      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`,
        );
      }

      const films = await response.json();

      return films;
    } catch (err) {
      console.error("getAllFilms::error: ", err);
      throw err;
    }
  }

  const addFilm = async (newFilm: NewFilm) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newFilm),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/films", options);

      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`,
        );
      }

      await response.json();

      await loadFilms();
    } catch (err) {
      console.error("AddFilm::error", err);
    }
  };

  const loadFilms = async () => {
    const films = await getAllFilms();
    setFilms(films);
  };

  useEffect(() => {
    loadFilms();
  }, []);

  const fullFilmContext: FilmContext = {
    addFilm,
    films,
    setFilms,
  };

  return (
    <>
      <Header texte="Welcome on CineMass" />
      <NavBar />

      <Outlet context={fullFilmContext} />

      <Footer texte="2026 Corporate" />
    </>
  );
}

// const nextFilmId = (films: Film[]) => {
//   return films.reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
// };

export default App;
