import React from "react";
import MyImage from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/backgroundportfolio.jpg';
import Cloud from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud.png";


const MyComponent = () => {
    return (
        <div className="w-full h-screen ">
            <img class="relative top-0 left-0 w-full h-screen bg-top" src={MyImage} alt="Banniere d'accueil" />  
            <img className="absolute top-0 left-0 w-max h-4/5 animate-scrolling-image py-32" src={Cloud} alt="cloud banner"/>
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
