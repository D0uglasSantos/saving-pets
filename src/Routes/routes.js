import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/politicaprivacidade" element={<PoliticaPrivacidade />} />
        <Route path="/sobrenos" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
