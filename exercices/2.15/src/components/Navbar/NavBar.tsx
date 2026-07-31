import { useNavigate } from "react-router-dom";

const NavBar = () => {
const navigate = useNavigate();

return (
    <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/cinema")}>Cinema</button>
        <button onClick={() => navigate("/movie")}>Movie List</button>
        <button onClick={() => navigate("add-film")}>Ajouter un film</button>
    </nav>
)
}

export default NavBar;