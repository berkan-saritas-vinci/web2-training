interface FooterProps {
    texte: string;
}

const Footer = ({texte}: FooterProps) => {

    return(
        <>
        <p>{texte}</p>
        </>
    )
}

export default Footer;