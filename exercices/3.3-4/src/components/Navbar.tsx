import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticatedUser } from "../types";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

const NavBar = ({ authenticatedUser, clearUser }: NavBarProps) => {
  const navigate = useNavigate();

  if (authenticatedUser) {
    return (
      <nav className="navbar">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/cinemas")}>Cinemas</button>
        <button onClick={() => navigate("/movie-list")}>
          My favorite movies
        </button>
        <button onClick={() => navigate("/add-movie")}>
          Add a movie
        </button>
        <button onClick={() => clearUser()}>Se déconnecter</button>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </nav>
  );
};

export default NavBar;