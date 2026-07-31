import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/components/App/index.tsx";
import HomePage from "./components/Pages/HomePage.tsx";
import CinemaPage from "./components/Pages/CinemaPage.tsx";
import MovieListPage from "./components/Pages/MovieListPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMoviePage from "./components/Pages/AddMoviePage.tsx";
import MoviePage from "./components/Pages/MoviePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movie",
        element: <MovieListPage />,
      },
      {
        path: "add-film",
        element: <AddMoviePage />,
      },
      {
        path: "movie/:movieId",
        element: <MoviePage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
