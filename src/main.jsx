import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer";

import StronaGlowna from "../app/screens/StronaGlowna";
import Login from "../app/screens/Login";
import Contact from "../app/screens/Contact"
import Pakiety from "../app/screens/Pakiety";
import Omnie from "../app/screens/Omnie";

// Context
  import { AppContextProvider } from "../hooks/AppContext";

import "../app/style/main.css";


const Scroll = () => {
  const { pathname } = useLocation();
  // Za każdym razem gdy zmieni się ścieżka to użytkownik zostanie przeniesiony na góre strony
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Scroll/>
        <Navbar />
        <Routes>
          <Route path="/" element={<StronaGlowna />}></Route>
          <Route path="/about" element={<Omnie />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/kontakt" element={<Contact />}></Route>
          <Route path="/pakiety" element={<Pakiety />}></Route>
        </Routes>
        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
