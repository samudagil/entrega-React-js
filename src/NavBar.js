import React from "react";
import "./App.css";
import CartWidget from "./CartWidget.js"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MiLogo</div>
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;