import React from "react";


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
                <div>
                    <h2 className="title1">Hi! I'm</h2>
                </div>
                <div>
                    <h2 className="title2"><span>MARGOT HUET</span></h2>
                </div>
                <div className="pBorder1">
                    <p>______________________________________________________________________________________________________________________________________</p>
                </div>
                <div>
                    <p className="vertical1"></p>
                </div>
                <div>
                    <p className="vertical2"></p>
                </div>
                <div className="pBorder2">
                    <p>______________________________________________________________________________________________________________________________________</p>
                </div>
                <div className="titre-accueil-1">
                    <h2>PRESENTATION</h2>
                </div>
                <div className="titre-accueil-2">
                    <h2>WEB PROJECTS</h2>
                </div>
                <div className="titre-accueil-3">
                    <h2>DATA/IA PROJECTS</h2>
                </div>
                <div className="boutons">
                    <button className="bouton1" onClick={scrollToProjects}>Here →</button>
                </div>                  
                <div>
                    <button className="bouton2" onClick={scrollToProjects}>Here →</button>
                </div>  
                <div>
                    <button className="bouton3" onClick={scrollToPresentation}>Here →</button>
                </div>
        </div>
    );
  };

export default MyComponent; 
