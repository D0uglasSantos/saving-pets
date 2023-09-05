import React from "react";
import "./style.css";
import BackNavbar from "../../components/BackNavbar";
import FormsRegister from "../../components/FormsRegister";

const Cadastro = () => {
  return (
    <section className="BackgroundCadastro">
      <BackNavbar />
      <div className="BoxFormsCadastro">
        <h4>Cadastro</h4>
        <FormsRegister />
      </div>
    </section>
  );
};

export default Cadastro;
