import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={props.theme === "dark" ? "header-dark" : "header-light"}>
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
      <div className="boutton-fond">
        <button onClick={props.toggleTheme}>
          {props.theme === 'light' ? "Mode sombre" : "Mode clair" }
        </button>
      </div>
    </header>
  );
};

export default Header;
