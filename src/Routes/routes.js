import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PoliticaPrivacidade from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/politicaprivacidade" element={<PoliticaPrivacidade />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
