import React from "react";
import Grey from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/grey.png";
import Clouds from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/setofclouds.png";


const MyComponent = () => {
    return (
        <div className="landing-page">
            <img className="set-of-clouds" src={Clouds} alt="animated clouds"/>
            <img className="greyBox" src={Grey} alt="grey"></img>
            <p className="title">Margot Huet</p>
            <button>Présentation</button>
            <button>Mes projets</button>
        </div>
    );
  };


const Accueil = () => {
    return (
        <div>
            <MyComponent />
        </div>
    )
}

export default Accueil; 
