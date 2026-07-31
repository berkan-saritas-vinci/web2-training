import { type SyntheticEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { FilmContext } from "../../types";

const AddMoviePage = () => {

    const {
        addFilm,
    }: FilmContext = useOutletContext();

    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(
      "submit:",
      title,
      director,
      duration,
      link,
      description,
      budget,
    );

    addFilm({title, director, duration, link, description, budget});
    navigate("/movie");
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("Change in title:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("Change in director:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("Change in duration", durationInput.value);
    setDuration(Number(durationInput.value));
  };

  const handleLinkChange = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("Change in link:", linkInput.value);
    setLink(linkInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("Change in description:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("Change in budget:", budgetInput.value);
    setBudget(Number(budgetInput.value));
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="titre">Titre</label>
        <input
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          required
        />
        <label htmlFor="director">Directeur</label>
        <input
          value={director}
          type="text"
          id="director"
          name="director"
          onChange={handleDirectorChange}
          required
        />
        <label htmlFor="duration">Durée</label>
        <input
          value={duration}
          type="number"
          id="duration"
          name="duration"
          onChange={handleDurationChange}
          required
        />
        <label htmlFor="link">Lien</label>
        <input
          value={link}
          type="text"
          id="link"
          name="link"
          onChange={handleLinkChange}
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
        />
        <label htmlFor="budget">Budget</label>
        <input
          value={budget}
          type="number"
          id="budget"
          name="budget"
          onChange={handleBudgetChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddMoviePage;