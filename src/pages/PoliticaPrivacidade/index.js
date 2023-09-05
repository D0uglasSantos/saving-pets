import React from "react";
import "./style.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "../../components/Section1";

const PoliticaPrivacidade = () => {
  return (
    <div className="main">
      <Navbar />
      <Section1 title="Saving Pets" text="Política de Privacidade" />
      <section className="section-content">
        <div>
          <h4 className="text-justify">
            Bem-vindo ao <strong>Saving Pets!</strong> Aqui na Saving Pets,
            levamos a sério a sua privacidade e a segurança dos seus dados
            pessoais. Esta Política de Privacidade tem como objetivo informá-lo
            sobre como coletamos, usamos e protegemos suas informações pessoais
            quando você utiliza nossos serviços e visitas nosso site.
          </h4>
        </div>
        <div>
          <h3>1. Informações que Coletamos</h3>
          <p>
            Ao usar o site Saving Pets, podemos coletar as seguintes
            informações:
          </p>
        </div>
        <div>
          <h3>1.2. Informações de Uso:</h3>
          <ul>
            <li>Endereço IP</li>
            <li>Tipo de dispositivo</li>
            <li>Navegador da web</li>
            <li>Páginas visitadas</li>
            <li>Duração da visita</li>
          </ul>
        </div>
        <div>
          <h3>2. Uso de Informações</h3>
          <p>Usamos suas informações pessoais para os seguintes fins:</p>
        </div>
        <div>
          <h3>2.1. Fornecer e Gerenciar Serviços:</h3>
          <ul>
            <li>Processar doações e transações</li>
            <li>Facilitar a adoção de animais de estimação</li>
            <li>Responder a consultas e solicitações de informações</li>
            <li>Manter seu registro de conta</li>
            <li>
              Enviar atualizações sobre adoções e eventos relacionados a animais
              de estimação
            </li>
          </ul>
        </div>
        <div>
          <h3>2.2. Melhorar nossos Serviços:</h3>
          <ul>
            <li>Analisar o comportamento do usuário para melhorar nosso site</li>
            <li>Personalizar sua experiência</li>
            <li>Avaliar a eficácia de nossas campanhas e iniciativas de conscientização</li>
          </ul>
        </div>
        <div>
          <h3>2.3. Marketing e Comunicação:</h3>
          <ul>
            <li>Enviar informações sobre campanhas de arrecadação de fundos e eventos</li>
            <li>Comunicar atualizações importantes e novidades relacionadas a animais de estimação</li>
            <li>Obter seu consentimento explícito, quando necessário</li>
          </ul>
        </div>
        <div>
          <h3>3. Compartilhamento de Informações:</h3>
          <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:</p>
          <ul>
            <li>Quando você nos autoriza a fazê-lo.</li>
            <li>Para cumprir obrigações legais.</li>
            <li>Para proteger nossos direitos, privacidade, segurança ou propriedade, bem como a de nossos usuários e do público em geral.</li>
          </ul>
        </div>
        <div>
          <h3>4. Proteção de Dados:</h3>
          <p>Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra perda, uso indevido e acesso não autorizado. No entanto, lembre-se de que nenhuma transmissão de dados pela Internet é 100% segura.</p>
        </div>
        <div>
          <h3>5. Seus Direitos de Privacidade:</h3>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar e retificar suas informações pessoais.</li>
            <li>Excluir seus dados, sujeito a nossas obrigações legais.</li>
            <li>Retirar seu consentimento para o processamento de suas informações pessoais.</li>
            <li>Receber uma cópia das informações pessoais que temos sobre você.</li>
          </ul>
          <p>Para exercer esses direitos ou fazer perguntas sobre nossa política de privacidade, entre em contato conosco por meio das informações de contato fornecidas abaixo.</p>
        </div>
        <div>
          <h3>6. Alterações na Política de Privacidade:</h3>
          <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir as mudanças em nossas práticas de informações. Recomendamos que você reveja regularmente esta política para estar informado sobre como protegemos suas informações.</p>
        </div>
        <div>
          <h3>7. Contato:</h3>
          <p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de informações, entre em contato conosco através do seguinte endereço de e-mail: <strong>savingpets@contato.com</strong>.</p>
          <p>Agradecemos por escolher o Saving Pets como seu destino para ajudar animais de estimação necessitados. Estamos comprometidos em proteger sua privacidade e garantir uma experiência segura e valiosa para você.</p>
        </div>
        <h6>Última atualização: <strong>3 de setembro de 2023</strong></h6>
      </section>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
