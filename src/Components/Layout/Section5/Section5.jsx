import React from "react";
import "./Section5.css";
import artista1 from "../../../assets/artista1.png";
import artista2 from "../../../assets/artista2.png";
import artista3 from "../../../assets/artista3.png";
import artista4 from "../../../assets/artista4.png";
import artista5 from "../../../assets/artista5.png";
import artista6 from "../../../assets/artista6.png";
import arrowOrange from "../../../assets/arrowOrange.svg";

const Section5 = () => {
  return (
    <section className="section5">
      <h1>
        Melhores <span>artistas</span>
      </h1>
      <div className="containerCards">
        <div className="cards">
          <div>
            <img src={artista1} alt="Artista 1" />
          </div>
          <div className="cardsFooter">
            <p>Mayk Brito</p>
            <p>80 Fotografias</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src={artista2} alt="Artista 2" />
          </div>
          <div className="cardsFooter">
            <p>Jakeliny G.</p>
            <p>99 Fotografias</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src={artista3} alt="Artista 3" />
          </div>
          <div className="cardsFooter">
            <p>João I. (Biro)</p>
            <p>50 Fotografias</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src={artista4} alt="Artista 4" />
          </div>
          <div className="cardsFooter">
            <p>Tamires Santos</p>
            <p>43 Fotografias</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src={artista5} alt="Artista 5" />
          </div>
          <div className="cardsFooter">
            <p>Ana Silva</p>
            <p>28 Fotografias</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src={artista6} alt="Artista 6" />
          </div>
          <div className="cardsFooter">
            <p>Diego F.</p>
            <p>20 Fotografias</p>
          </div>
        </div>
      </div>
      <div className="h4">
        <h4>Ver todos os artistas</h4>
        <img src={arrowOrange} alt="Arrow Orange" />
      </div>
    </section>
  );
};

export default Section5;
