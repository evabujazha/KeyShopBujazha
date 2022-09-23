import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to={`/`}>Licencias Arg</Link>
        </h1>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/category/SistemaOperativo"> Sistema Operativo </Link>
          <Link to="/category/Software"> Software </Link>
          <Link to="/category/Juegos"> Juegos </Link>
          <Link to="/Cart">
            <CartWidget />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
