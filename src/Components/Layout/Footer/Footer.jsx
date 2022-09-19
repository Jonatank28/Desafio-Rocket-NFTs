import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo.svg";
import arrowBlack from "../../../assets/arrowBlack.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import youtube from "../../../assets/youtube.svg";
import email from "../../../assets/email.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLogo">
        <img src={logo} alt="Logo" />
        <div className="ArrowFooter">
          <img src={arrowBlack} alt="Arrow Black" />
        </div>
      </div>
      <div className="FooterImput">
        <div className="imput1">
          <h3>Fique por dentro de</h3>
          <h3>todas as novidades</h3>
          <div className="imput11">
            <input type="text" placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </div>
        </div>
        <div className="imput2">
          <div className="contato1 contato">
            <ul>
              <li>
                <a href="#">Empresa</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Time</a>
              </li>
              <li>
                <a href="#">Carreira</a>
              </li>
            </ul>
          </div>
          <div className="contato2 contato">
            <ul>
              <li>
                <a href="#">Mapa</a>
              </li>
              <li>
                <a href="#">Galeria</a>
              </li>
              <li>
                <a href="#">Popularidades</a>
              </li>
              <li>
                <a href="#">Vendas</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="contato3 contato">
            <ul>
              <li>
                <a href="#">Links</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <a href="#">Política</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="FooterContato">
        <div className="email">
          <p>www.rocketseat.com.br</p>
        </div>
        <div className="redesSociais">
          <ul>
            <li><img src={instagram} alt="Instagram" /></li>
            <li><img src={youtube} alt="youtube" /></li>
            <li><img src={twitter} alt="twitter" /></li>
            <li><img src={email} alt="email" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
