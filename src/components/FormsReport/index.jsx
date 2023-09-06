import React from "react";
import "./style.css";

const FormReport = () => {
  return (
    <div id="denuncias" className="divReport">
      <div className="container-fluid p-0">
        <section className="page-section" id="denuncias">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 text-center">
                <h2 className="mt-0 text-dark">Denúncie</h2>
                <hr className="divider divider-light" />
                <p className="text-dark mb-5">Denúncie e ajude um ser vivo!</p>
              </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
              <div className="col-lg-6">
                <form id="contactForm">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="Característias do animal"
                      type="text"
                      placeholder="Descreva as características físicas do animal..."
                      required
                    />
                    <label>Características do animal</label>
                  </div>
                  <div className="from-floating mb-3">
                    <textarea
                      className="form-control"
                      name="local"
                      id="local"
                      cols="20"
                      rows="8"
                      placeholder="Descreva o local"
                    ></textarea>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="localicao"
                      placeholder="localização"
                    />
                    <label>Informe a localização</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="portePet"
                      placeholder="portePet"
                    />
                    <label>Informe o porte do Pet</label>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Formulário enviado com sucesso!
                      </div>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormReport;
