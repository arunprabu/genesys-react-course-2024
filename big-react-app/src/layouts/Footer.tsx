import MenuList from "./MenuList";

const Footer: React.FC = () => {
  const copyrightYear = 2024;
  const developerName = "Arun Vijayarengan";

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
