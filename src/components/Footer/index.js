import React from "react";
import "./style.css";
import Logo from "../../assets/images/logos/logo-footer-saving-pets.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "../Button";
import { Link } from "react-router-dom";

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

      <div className="section2-footer">
        <div className="text-left lead more">
          <div className="more--itens">
            <li>Nossa História</li>
            <li>Contato</li>
          </div>

          <div className="more--itens">
            <Link to={"/politicaprivacidade"} style={{textDecoration:"none", color:"grey"}}>
              <li>Política de Privacidade</li>
            </Link>
            <li>Depoimentos</li>
          </div>
        </div>
        <div>
          <Button text="Fale Conosco" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
