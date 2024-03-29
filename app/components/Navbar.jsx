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

        <div className={`toggle_btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <ul>
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
            <Link to="/kontakt">Contact</Link>
          </li>
          <li>
            <Link to="/pakiety" className="action_btn">
              Get started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
