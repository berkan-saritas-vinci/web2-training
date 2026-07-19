

interface User {
  name: string;
  age: number;
}

interface CardProps {
  users: User[];
}

const Card = (props: CardProps) => {
  return (
    <div>
      {props.users.map((user) => (
        <ul key={user.name}>
        <li>{user.name}</li>
        <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default Card;