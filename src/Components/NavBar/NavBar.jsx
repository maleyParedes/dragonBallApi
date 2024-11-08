import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div id="botones">
        <Link to={"/"}>
          <Button sx={{ width: 150 }} variant="contained">
            Inicio
          </Button>
        </Link>
        <Link to={"/character/Human"}>
          <Button sx={{ width: 150 }} variant="contained">
            Human
          </Button>
        </Link>
        <Link to={"/character/NoHuman"}>
          <Button sx={{ width: 150 }} variant="contained">
            No Human
          </Button>
        </Link>
        <Link to={"/details/0"}>
          <Button sx={{ width: 150 }} variant="contained">
            Detalles
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
