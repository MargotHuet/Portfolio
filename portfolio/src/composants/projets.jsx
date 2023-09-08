import React from "react";
import FacialRAI from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/facial_recognisation_illustration.jpeg";
import Image2 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/randomimage1.avif";
import Image3 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/randomimage2.avif";

const Projets = () => {
    return (
        <div className="containerProject" id="projects">
            <h1>Projets</h1>
            <div className="grid">
                <div className="img-wrapper">
                        <img className="zoom blur" src={FacialRAI} alt="illustration de reconnaissnce faciale"></img>
                            <div className="content fade">Reconnaissance faciale</div>
                </div>    
                <div className="img-wrapper">
                        <img className="zoom blur" src={Image2} alt="illustration du projet Madame KYMG"></img>
                            <div className="content fade">LOREM IPSUME DELOR SIRT AMET</div>
                </div>
                <div className="img-wrapper">
                        <img className="zoom blur" src={Image3} alt="illustration du projet Ecotopia"></img>
                            <div className="content fade">LOREM IPSUME DELOR SIRT AMET</div>
                </div>
            </div>
        </div>
    )
}

export default Projets;