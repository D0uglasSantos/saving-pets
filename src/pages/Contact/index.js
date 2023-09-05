import React from "react";
import "./styles.css";
import FormsContact from "../../components/FormsContact";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";
import MediaSocial from "../../components/MediaSocial";

const Contact = () => {
  return (
    <section className="section-page">
      <Navbar />
      <Section1 title="Saving Pets" text="Contate-nos" />
      <section className="section-forms-contact">
        <FormsContact />
        <MediaSocial />
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
