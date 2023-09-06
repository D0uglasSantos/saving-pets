import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Section1 title="Saving Pets" text="Nossa História" />
      <section className="section-sobre-nos">
        <h3>Nossa História</h3>
        <p>
          Bem-vindo à página "Nossa História" da Saving Pets, uma organização
          não governamental dedicada a fazer a diferença na vida de pets
          abandonados e que sofrem maus-tratos. Nossa jornada é um testemunho de
          amor, compaixão e dedicação à causa dos animais desamparados.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
