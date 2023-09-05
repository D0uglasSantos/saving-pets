import React from "react";
import "./style.css";
import Button from "../Button";
import { useLocation } from "react-router-dom";

const Section1 = (props) => {

  // Obtenha a rota atual
  const location = useLocation();

  // Verifique se a rota atual é "/politicaprivacidade"
  const isPrivacyPolicyPage = location.pathname === "/politicaprivacidade";

  return (
    <header className="masthead" id="page-top">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">{props.title}</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">{props.text}</p>
            {/* Renderizar o <Button /> apenas se não for a página de política de privacidade */}
            {isPrivacyPolicyPage ? null : <Button text="Ler Mais" link="#about" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Section1;
