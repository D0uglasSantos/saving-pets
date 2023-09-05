import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="section-sobre-nos">
        <Section1 title="Saving Pets" text="Nossa História"/>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
