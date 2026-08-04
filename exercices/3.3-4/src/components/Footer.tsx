import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={props.theme === 'light' ? 'footer-light' : 'footer-dark'}>
      <div>{props.children}</div>
      <img src={props.urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
