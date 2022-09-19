import React from "react";
import "./Section4.css";
import astronauta1 from "../../../assets/astronauta1.png";
import Astronauta2 from "../../../assets/astronauta2.png";
import astronauta3 from "../../../assets/astronauta3.png";
import astronauta4 from "../../../assets/astronauta4.png";
import arrowWhite from "../../../assets/arrowWhite.svg";

const Section4 = () => {
  return (
    <section className="section4">
      <h1>
        <span>Populares</span> da semana
      </h1>
      <div className="astronauta">
        <div className="astronautaL">
          <div className="astronautaMain">
            <h3>Astrounauta 1</h3>
            <div className="astronaltaTImagem">
              <div className="astronautaSpan">
                <img className="seta" src={arrowWhite} alt="Seta" />
                <span>Mayk Brito</span>
                <span>1.55 RKT</span>
              </div>
              <img className=" astronautaImagem " src={astronauta1} alt="" />
            </div>
          </div>
          <div className="astronautaMain">
            <h3>Astrounauta 3</h3>
            <div className="astronaltaTImagem">
              <div className="astronautaSpan">
                <img className="seta" src={arrowWhite} alt="Seta" />
                <span>João Inácio (Biro)</span>
                <span>3.75 RKT</span>
              </div>
              <img className=" astronautaImagem noMargin" src={astronauta3} alt="" />
            </div>
          </div>
        </div>
        <div className="astronautaD">
          <div className="astronautaMain">
            <h3>Astrounauta 2</h3>
            <div className="astronaltaTImagem">
              <div className="astronautaSpan">
                <img className="seta" src={arrowWhite} alt="Seta" />
                <span>Jakeliny Gracielly</span>
                <span>2.00 RKT</span>
              </div>
              <img className=" astronautaImagem " src={Astronauta2} alt="" />
            </div>
          </div>
          <div className="astronautaMain ">
            <h3>Astrounauta 4</h3>
            <div className="astronaltaTImagem">
              <div className="astronautaSpan">
                <img className="seta" src={arrowWhite} alt="Seta" />
                <span>Tamires Santos</span>
                <span>4.30 RKT</span>
              </div>
              <img className=" astronautaImagem noMargin" src={astronauta4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
