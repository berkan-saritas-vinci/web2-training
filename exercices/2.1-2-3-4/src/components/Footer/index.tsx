interface FooterProps {
  image: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <>
      <img src={props.image} alt="image" />
      <div>{props.children}</div>
    </>
  );
};

export default Footer;