import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Context
    import { AppContext } from "../../hooks/AppContext";

function Navbar() {
  const {user, handleLogOut} = AppContext()
  
  // hook odpowiedzialny za pobranie ścieżki w której znajduje się użytkownik
    const location = useLocation();
  // useState przechowujący wartość ścieżki w której jest użytkownik (domyślnie to home)
    const [ path, setPath ] = useState("/");
    
  const [isOpen, setIsOpen] = useState(false);

  // jeśli się zmieni wartość zmiennej "location" to zostaje wywołana funkcja strzałkowa
  // w której zmienia się wartość zmiennej "path" na aktualną
    useEffect(() => {
      setPath(location.pathname)
    },[location]);

    // useEffect ogólnie jest zajebisty, bo zostaje wywołany za każdym razem gdy zmieni się wartość zmiennej podanej w tablicy
    // a jeśli nie podasz w tablicy żadnej zmiennej, to useEffect domyślnie wywoła się raz, podczas otwierania strony :)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div className="naglowek">
          <Link to="/" className="logo">
            Michał Kopcza
          </Link>

          <ul className="links">
            <li>
              {/* Sprawdzenie czy ścieżka jest równa "/" jeśli tak, to podświetla przycisk UwU */}
              <Link to="/" className={path==="/" ? "active" : ""}>Strona Główna</Link>
            </li>
            <li>
              <Link to="/about" className={path==="/about" ? "active" : ""}>O mnie</Link>
            </li>
            <li>
              <Link to="/kontakt" className={path==="/kontakt" ? "active" : ""}>Kontakt</Link>
            </li>
            {!user ? <li>
              <Link to="/login" className={path==="/login" ? "active" : ""}>Logowanie</Link>
            </li>:
            <li style={{cursor:"pointer"}}>
              <a onClick={()=>handleLogOut()}>Wyloguj się</a>
            </li>
            }
            
          </ul>

          <Link className="action_btn" to="/pakiety">Get started</Link>

          <div className={`toggle_btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className={path==="/" ? "active" : ""}>Strona Główna</Link>
            </li>
            <li>
              <Link to="/about" className={path==="/about" ? "active" : ""}>O mnie</Link>
            </li>
            <li>
              <Link to="/login" className={path==="/login" ? "active" : ""}>Logowanie</Link>
            </li>
            <li>
              <Link to="/kontakt" className={path==="/kontakt" ? "active" : ""}>Kontakt</Link>
            </li>
            <li>
              <Link to="/pakiety" className="action_btn">
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
