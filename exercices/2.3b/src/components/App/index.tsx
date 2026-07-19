import "./App.css";
import PageTitle from "../PageTitle";
import Card from "../UserCard";
import Footer from "../Footer";

const App = () => {
  const title = "Welcome to My App";

  const usersList = [

    {
      name: "Alice",
      age: 25
    },
    {
      name: "Bob",
      age: 30
    },
    {
      name: "Charlie",
      age: 35
    }
  ]

  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <Card users={usersList} />
      <Footer texte={footerText} />
    </div>
  );
};

export default App;
