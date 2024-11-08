import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  const logo =
    "https://1000marcas.net/wp-content/uploads/2022/02/Dragon-Ball-Logo.png";

  return (
    <header className="MuiPaper-root">
      <div id="fondo-logo-header">
        <img id="logo-header" src={logo} alt="Logo Dragon Ball" />
      </div>
      <div id="titulos">
        <h1>Dragon Ball</h1>
        <h2>Personajes</h2>
      </div>
      <NavBar/>
    </header>
  );
};

export default Header;
