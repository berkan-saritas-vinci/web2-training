interface HeaderProps {
    texte: string;
}

const Header = ({texte}: HeaderProps) => {

    return(
        <>
        <h1>{texte}</h1>
        </>
    )
}

export default Header;