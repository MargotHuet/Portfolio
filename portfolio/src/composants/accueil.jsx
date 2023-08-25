import React from "react";
import MyImage from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/backgroundportfolio2.png';
import Cloud from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud.png";
import Cloud2 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud2.png";
import Cloud3 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud3.png";
import Grey from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/grey.png";


const MyComponent = () => {
    return (
        <div>
            <img className="banner" src={MyImage} alt="Banniere d'accueil" />  
            <img className="cloud" src={Cloud} alt="animated clouds"/>
            <img className="cloud2" src={Cloud2} alt="animated cloud"/>
            <img className="cloud3" src={Cloud3} alt="animated cloud2"/>
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
