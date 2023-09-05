import React from "react";
import Section1 from "../../components/Section1";
import About from "../../components/About";
import HowReport from "../../components/HowReport";
import FormReport from "../../components/FormsReport";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Section1
        title='Saving Pets'
        text='"Ter um animal em sua vida não faz de você uma pessoa melhor, mas
        sim cuidar dele e respeitá-lo como merece"'
      />
      <About />
      <HowReport />
      <FormReport />
      <Footer />
    </>
  );
};

export default Home;
