import React from "react";
import Cloud from "/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/cloud.png";

const Clouds = () => {
    return (
        <div className="w-max h-screen">
            <img className="absolute bg-cyan-100 top-0 left-0 w-max h-4/5 animate-scrolling-image" src={Cloud} alt="cloud banner"/>
        </div>
    )
};

export default Clouds