import React from "react";
import MyImage from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/backgroundportfolio2.png';
import Cloud from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud.png";
import Cloud2 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud2.png";
import Cloud3 from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud3.png";
import Grey from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/grey.png";



const MyComponent = () => {
    return (
        <div className="w-screen h-screen ">
            <img className="relative top-0 left-0 w-full h-screen bg-top" src={MyImage} alt="Banniere d'accueil" />  
            <img className="absolute bottom-3 -left-96 w-11/12 h-5/6 cloud-animation opacity-80" src={Cloud} alt="animated clouds"/>
            <img className="absolute top-0 -right-20 w-2/3 h-2/4 cloud-animation opacity-80" src={Cloud2} alt="animated cloud"/>
            <img className="absolute bottom-20 -right-20 w-1/3 h-2/5 cloud-animation opacity-70" src={Cloud3} alt="animated cloud2"/>
            <img className="absolute inset-1/3 w-2/5 h-2/5 opacity-60 rounded-2xl flex justify-content" src={Grey} alt="grey"></img>
            <p className="absolute inset-x-1/3 inset-y-1/3 pt-20 pl-20 w-50 text-7xl">Margot Huet</p>
            <button className="absolute flex flex-row bottom-1/3 right-2/4">Présentation</button>
            <button className="absolute flex flex-row bottom-1/3 right-1/3">Mes projets</button>
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
