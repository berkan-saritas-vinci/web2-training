interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <img src={props.image} alt="logo" />
      <div>{props.children}</div>
    </>
  );
};

export default Header;