import React from "react";
import FacialRAI from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/facial_recognisation_illustration.webp";
import TextAnalysis from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/analyse-texte.jpg";
import Ampelos from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Ampelos.png";

const Projets = () => {
    return (
        <div className="containerProject" id="projects">
            <h1 className="title-project">Mes projets</h1>
            <div className="grid">
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={FacialRAI} alt="illustration de reconnaissnce faciale"></img>
                            <div className="content fade">Reconnaissance faciale</div>
                </div>    
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={TextAnalysis} alt="illustration du projet Madame KYMG"></img>
                            <div className="content fade">Analyse sentimentale d'un texte</div>
                </div>
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={Ampelos} alt="illustration du projet Ecotopia"></img>
                            <div className="content fade">Ampelos -  </div>
                </div>
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={Ampelos} alt="illustration du projet Ecotopia"></img>
                            <div className="content fade">LOREM IPSUME DELOR SIRT AMET</div>
                </div>
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={Ampelos} alt="illustration du projet Ecotopia"></img>
                            <div className="content fade">LOREM IPSUME DELOR SIRT AMET</div>
                </div>
                <div className="img-wrapper">
                        <img className="zoom blur grey" src={Ampelos} alt="illustration du projet Ecotopia"></img>
                            <div className="content fade">LOREM IPSUME DELOR SIRT AMET</div>
                </div>
            </div>
        </div>
    )
}

export default Projets;