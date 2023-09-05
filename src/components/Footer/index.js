import React from "react";
import "./style.css";
import Logo from "../../assets/images/logos/logo-footer-saving-pets.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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
        <div className="section-media-social">
          <h4 className="mb-4">Siga-nos</h4>
          <div className="row justify-content-center gap-4">
            <div className="icon-facebook">
              <FacebookIcon />
            </div>
            <div className="icon-twitter">
              <TwitterIcon />
            </div>
            <div className="icon-whatsapp">
              <WhatsAppIcon />
            </div>
            <div className="icon-instagram">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
