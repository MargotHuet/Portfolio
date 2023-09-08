import React from "react";
import White from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/white.png";
import Clouds from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloudsset.png";
import Presentation from "./presentation";
import Projets from "./projets";

const MyComponent = () => {

    // Fonction pour faire défiler la page vers la section "presentation"
    const scrollToPresentation = () => {
        const presentationSection = document.getElementById('container');
        if (presentationSection) {
            presentationSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const projectSection = document.getElementById('projects');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="landing-page">
            <img className="set-of-clouds" src={Clouds} alt="animated clouds"/>
                <div className="white-container">
                    <img className="whiteBox" src={White} alt="white box container"></img>
                    <div className="buttons">
                    <button className="btn-presentation" onClick={scrollToPresentation}>Présentation</button>
                    <button className="btn-projects" onClick={scrollToProjects}>Mes projets</button>
                </div>
                </div>
                    <p className="title">Margot Huet</p>
               
        </div>
    );
  };




export default MyComponent; 
