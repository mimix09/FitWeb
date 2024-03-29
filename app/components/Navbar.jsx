import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="naglowek">
        <div className="logo">
          <Link to="/">
            <img src="./app/assets/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>

        <Link className="action_btn" to="/pakiety">Get started</Link>

        <div className="toggle_btn" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown_menu">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="./login.html">Login</a>
            </li>
            <li>
              <a href="./kontakt.html">Contact</a>
            </li>
            <li>
              <a href="./oferty.html" className="action_btn">
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
