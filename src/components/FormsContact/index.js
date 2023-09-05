import React from "react";
import "./style.css"

const FormsContact = () => {
  return (
    <div className="Box-forms-contact">
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
          <input className="form-control" id="cpf" placeholder="email" />
          <label>Email de contato</label>
        </div>
        <div className="from-floating mb-3">
          <textarea
            className="form-control"
            name="local"
            id="local"
            cols="20"
            rows="8"
            placeholder="Nos diga o motivo do contato!"
          ></textarea>
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
  );
};

export default FormsContact;
