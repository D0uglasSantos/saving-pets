import React from "react";
import "./style.css";
import Number1 from "../../assets/images/numbers/1.svg"
import Number2 from "../../assets/images/numbers/2.svg"
import Number3 from "../../assets/images/numbers/3.svg"
import Number4 from "../../assets/images/numbers/4.svg"

const HowReport = () => {
  return (
    <section className="page-section" id="como-denunciar">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Como Realizar Denúncias</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-4 flutuar">
                <img src={Number1} alt="" />
              </div>
              <h3 className="h4 mb-2">Acesse a página "Denúncias"</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-4 flutuar">
                <img src={Number2} alt="" />
              </div>
              <h3 className="h4 mb-2">Preencha os espaços com o que se pede</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-4 flutuar">
                <img src={Number3} alt="" />
              </div>
              <h3 className="h4 mb-2">
                Clique no botão enviar para registrar sua denúncia
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-4 flutuar">
                <img src={Number4} alt="" />
              </div>
              <h3 className="h4 mb-2">Aguarde a equipe entrar em contato!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowReport;
