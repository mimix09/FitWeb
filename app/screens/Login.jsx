import React, { useState } from "react";
import "../style/login.css";

// Google Button
    import GoogleButton from 'react-google-button'
// Context
    import { AppContext } from "../../hooks/AppContext";
// Navigate
    import { useNavigate } from "react-router-dom";

function Login() {
    const {user} = AppContext()
    const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
      setShowLoginForm(!showLoginForm);
  };

  // Jeśli user jest zalogowany to go przenosi na strone główną
  if(user){
    navigate('/')
  }

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
    const {handleGoogleSignIn} = AppContext()
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
              <a style={{textAlign:"center",textDecoration:"underline",cursor:"pointer"}} onClick={toggleForm}>Zarejestruj się</a>
                <GoogleButton style={{margin:"25px auto 0 auto"}} onClick={() => handleGoogleSignIn()}/>
          </form>
      </div>
  );
}

function Rejestrowanie({ toggleForm }) {
    const {handleGoogleSignIn} = AppContext()
  return (
      <div className="formularz">
          <h2>Zarejestruj się</h2>
          <form>
              <div>
              <div className="inputy">
                  <input type="text" placeholder="Imie"/>
              </div>

              <div className="inputy2">
                  <input type="text" placeholder="Nazwisko" />
              </div>

              </div>
              <div>
                  <input type="email" placeholder="Email" />
              </div>
              <div>
                  <input type="password" placeholder="Hasło" />
              </div>
  
              <button>Załóż konto</button>
              <a style={{textAlign:"center",textDecoration:"underline",cursor:"pointer"}} onClick={toggleForm}>Powrót do logowania</a>
                <GoogleButton style={{margin:"15px auto 0 auto"}} onClick={() =>handleGoogleSignIn()}/>
          </form>
      </div>
  );
}

export default Login;
