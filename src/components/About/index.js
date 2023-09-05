import React from "react";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="page-section-secondary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-dark mt-0">Sobre nós</h2>
            <hr className="divider divider-light" />
            <p className="text-dark-75 text-justify mb-4">
              Você certamente já viu um pet andando pela rua sozinho ou em
              alguma residência em péssimas condições e não pode acolhê-lo e
              levá-lo para sua casa, não é?
            </p>
            <p className="text-dark-75 text-justify mb-4">
              Diante disso, esse site foi criado para ajudarmos esses{" "}
              <strong>seres vivos</strong> a terem condições melhores em suas
              vidas. Temos um sistema de <strong>DENÚNCIAS</strong> no qual você
              pode fazer uma descrição do local e do que sabe a respeito, assim
              facilitando o resgate e até a rapidez do atendimento em caso de
              urgência.
            </p>
            <strong>
              <h5 className="mb-4">
                Não deixe pra amanhã o pet que você pode salvar hoje!
              </h5>
            </strong>
            <Link to='/sobrenos'>
              <Button text="Saiba Mais" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
