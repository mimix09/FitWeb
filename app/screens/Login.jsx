import React, { useState } from "react";
import "../style/login.css";

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
      setShowLoginForm(!showLoginForm);
  };

  return (
      <div className="cont">
          {showLoginForm ? (
              <Logowanie toggleForm={toggleForm} />
          ) : (
              <Rejestrowanie toggleForm={toggleForm} />
          )}
      </div>
  );
}

function Logowanie({ toggleForm }) {
  return (
      <div className="formularz">
          <h2>Zaloguj się</h2>
          <form>
              <div>
                  <input type="text" placeholder="Login" />
              </div>
              <div>
                  <input type="password" placeholder="Hasło" />
              </div>
  
              <button>Zaloguj</button>
              <button onClick={toggleForm}>Zarejestruj się</button>
          </form>
      </div>
  );
}

function Rejestrowanie({ toggleForm }) {
  return (
      <div className="formularz">
          <h2>Zarejestruj się</h2>
          <form>
              <div>
              <div className="inputy">
                  <input type="text" placeholder="Imie"/>
              </div>

              <div className="inputy2">
                  <input type="text" placeholder="Nawzisko" />
              </div>

              </div>
              <div>
                  <input type="email" placeholder="Email" />
              </div>
              <div>
                  <input type="password" placeholder="Hasło" />
              </div>
  
              <button>Załóż konto</button>
              <button onClick={toggleForm}>Powrót do logowania</button>
          </form>
      </div>
  );
}

export default Login;
