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
        <div>
          <h3>Nossa História</h3>
          <p>
            Bem-vindo à página "Nossa História" da Saving Pets, uma organização
            não governamental dedicada a fazer a diferença na vida de pets
            abandonados e que sofrem maus-tratos. Nossa jornada é um testemunho
            de amor, compaixão e dedicação à causa dos animais desamparados.
          </p>
        </div>
        <div>
          <h3>O Começo da Jornada</h3>
          <p>
            Tudo começou com um pequeno grupo de amantes de animais, reunidos
            por uma paixão em comum: a vontade de transformar vidas. Em um mundo
            repleto de animais indefesos sofrendo nas ruas e abrigos
            superlotados, sentimos a necessidade de fazer algo mais do que
            apenas assistir de longe. Assim, em [ano de fundação], nasceu a
            Saving Pets. Nosso objetivo era claro: oferecer uma segunda chance
            para os pets que foram abandonados, maltratados ou esquecidos.
            Iniciamos nossa jornada com um pequeno abrigo improvisado e um
            punhado de voluntários determinados a fazer a diferença.
          </p>
        </div>
        <div>
          <h3>Nossa Missão</h3>
          <p>
            Nossa missão é simples, mas poderosa: resgatar, reabilitar e
            rehoming pets em situações de risco. Acreditamos que cada animal
            merece amor, cuidado e um lar onde possa viver uma vida feliz e
            saudável. Trabalhamos incansavelmente para transformar essa crença
            em realidade, dia após dia.
          </p>
        </div>
        <div>
          <h3>Nossos Valores</h3>
          <p>
            Na Saving Pets, nossos valores são os pilares que sustentam tudo o
            que fazemos:
          </p>
          <ul>
            <li>
              Compromisso com o Bem-Estar Animal: Nós não apenas resgatamos
              animais, mas também nos dedicamos a garantir que eles recebam os
              cuidados médicos necessários, amor e atenção antes de encontrarem
              um novo lar.
            </li>
            <li>
              Ética e Transparência: Somos transparentes em nossa atuação,
              garantindo que nossos apoiadores e parceiros saibam como seus
              recursos estão sendo utilizados.
            </li>
            <li>
              Educação e Conscientização: Acreditamos que a educação é
              fundamental para mudar mentalidades e prevenir futuros casos de
              abandono e maus-tratos. Investimos na conscientização da
              comunidade sobre a importância do cuidado responsável dos animais.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
