interface FooterProps {
  texte: string;
}

const Footer = (props: FooterProps) => {
  return (
  <footer>
    <h5>{props.texte}</h5>
  </footer>
  )
}

export default Footer;