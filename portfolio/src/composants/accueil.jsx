import React from "react";
import White from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/white.png";
import Clouds from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloudsset.png";


const MyComponent = () => {
    return (
        <div className="landing-page">
            <img className="set-of-clouds" src={Clouds} alt="animated clouds"/>
                <div className="white-container">
                    <img className="whiteBox" src={White} alt="white box container"></img>
                </div>
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
