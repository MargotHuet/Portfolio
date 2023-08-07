import React from "react";
import MyImage from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/backgroundportfolio.jpg';

const MyComponent = () => {
    return (
        <div className="w-full h-screen">
            <img class="top-0 left-0 w-full h-screen object-cover" src={MyImage} alt="Banniere d'accueil" />  
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
