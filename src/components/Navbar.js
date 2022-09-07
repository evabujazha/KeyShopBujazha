import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div>
      <header>
        <h1>Licencias Arg</h1>
        <nav>
          <a href="/#">Home</a>
          <a href="/#">Sistema Operativo</a>
          <a href="/#">Software</a>
          <a href="/#">Juegos</a>
          <a href="/#">
            <CartWidget />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
