import React from "react";
import "./style.css";
import BackNavbar from "../../components/BackNavbar";
import InputMask from "react-input-mask";

const Cadastro = () => {
  return (
    <section className="BackgroundCadastro">
      <BackNavbar />
      <div className="BoxFormsCadastro">
        <h4>Cadastro</h4>
        <form id="contactForm">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="localicao"
              placeholder="localização"
            />
            <label>Nome Completo</label>
          </div>
          <div className="form-floating mb-3">
            <InputMask
              className="form-control"
              mask="999.999.999-99"
              placeholder="CPF"
            />
            <label>CPF</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="cpf" placeholder="email" />
            <label>Email </label>
          </div>
          <div className="form-floating mb-3">
            <InputMask
              className="form-control"
              mask="(99)9999-99999"
              placeholder="telefone de contato"
            />
            <label>Telefone de Contato</label>
          </div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
              <div className="fw-bolder">Formulário enviado com sucesso!</div>
            </div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Erro ao enviar a mensagem!
            </div>
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-xl "
              id="submitButton"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
