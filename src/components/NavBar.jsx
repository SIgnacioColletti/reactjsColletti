import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>

      <ul className="menu">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
