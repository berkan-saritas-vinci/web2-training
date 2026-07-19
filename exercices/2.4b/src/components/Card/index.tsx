import "./Card.css";

interface CardProps {
    name: string;
    age: number;
    isOnline: boolean; 
}

const Card = (props: CardProps) => {

    return (
        <>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        <p className={props.isOnline ? "online" : "offline"}>{props.isOnline ? "En ligne" : "Hors ligne"}</p>
        </>
    )
}

export default Card;