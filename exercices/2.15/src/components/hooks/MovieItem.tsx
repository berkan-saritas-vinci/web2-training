import { useState } from "react";
import "./MovieItem.css"

interface MovieItemProps {
  title: string;
  director: string;
  description: string;
}

const MovieItem = ({ title, director, description }: MovieItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <ul className="ul">
      <li onClick={() => setShowDescription(!showDescription)}>
        <strong>{title}</strong> - Réalisateur : {director}
      </li>
      {showDescription ? <li>{description}</li> : null}
    </ul>
  );
};

export default MovieItem;