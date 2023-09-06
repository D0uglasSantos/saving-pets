import React from "react";
import "./style.css";
import Logo from "../../assets/images/logos/logo-footer-saving-pets.svg";
import { Link } from "react-router-dom";

import Button from "../Button";
import MediaSocial from "../MediaSocial";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <div className="mb-3">
          <a href="#page-top">
            <img src={Logo} alt="Logo Saving Pets" />
          </a>
        </div>

        <div className="text-center">
          <h6 className="mb-3">Copyright &copy;2023</h6>
          <small className="blockquote-footer">Saving Pets</small>
        </div>
      </div>
      <div>
        <div className="section2-footer">
          <div className="text-left lead more">
            <div className="more--itens">
              <li>Nossa História</li>
              <li>Contato</li>
            </div>

            <div className="more--itens">
              <Link
                to={"/politicaprivacidade"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <li>Política de Privacidade</li>
              </Link>
              <li>Depoimentos</li>
            </div>
          </div>
          <div>
            <Link to={'/contato'}>
              <Button text="Fale Conosco" />
            </Link>
          </div>
        </div>
        <MediaSocial/>
      </div>
    </section>
  );
};

export default Footer;
