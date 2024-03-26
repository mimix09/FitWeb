import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer";

import StronaGlowna from "../app/screens/StronaGlowna";
import Login from "../app/screens/Login";
import Contact from "../app/screens/Contact"
import Pakiety from "../app/screens/Pakiety";

import "../app/style/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StronaGlowna />}></Route>
        {/* <Route path="/about" element={<StronaGlowna />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/pakiety" element={<Pakiety />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
