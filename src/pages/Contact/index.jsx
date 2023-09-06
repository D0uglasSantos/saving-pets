import React from "react";
import "./styles.css";

import FormsContact from "../../components/FormsContact";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <section className="section-page">
      <Navbar />
      <Section1 title="Saving Pets" text="Contate-nos" />
      <section className="section-forms-contact row-justify-content-center">
        <div className="section-info-contact">
          <h3>Contate-nos</h3>
          <p>
            Nós da Saving Pets estamos dispostos a tirar qualquer dúvida ou
            esclarecer qualquer ocorrido. Nos diga o que precisa saber que
            entraremos em contato assim que possível!
          </p>
          <div className="div-info-contact">
            <LocationOnIcon />
            <h6>37 E. Victoria St-Santa Barbara</h6>
          </div>
          <div className="div-info-contact">
            <PhoneIcon />
            <h6>(19) 99923-2322</h6>
          </div>
          <div className="div-info-contact">
            <EmailIcon />
            <h6>savingPets@contato.com</h6>
          </div>
        </div>
        <FormsContact />
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
