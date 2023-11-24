import React from "react";
import Signature from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Signature.png';
import { GoCode } from "react-icons/go";
import { GoDatabase } from "react-icons/go";


const Presentation = () => {

    //window.addEventListener('scroll');
    //const revealOnScroll = () => {
     //   let reveals = document.querySelectorAll('.reveal')

       // for(let i = 0; i < reveals.length; i++) {
       //     let windowheight = window.innerHeight;
        //    let revealTop = reveals[i].getBoundingClientRect().top;
        //    let revealPoint = 150;

       //     if(revealTop < windowheight - revealPoint) {
        //        reveals[i].classList.add('active');
        //    } else {
       //         reveals[i].classList.remove('active');
      //      }
    //    }
   // };


    return (
    <>
        <div className="container" id="container">
            <div className="section-left">
                    <h1>A propos de moi</h1>
                    <p className="">Actuellement étudiante en développement web, je me spécialise dans le développement Backend et la Data. Je suis portée sur les sujets de Data Science que j'étudie en parallèle de ma formation. 
                        Mes compétences techniques me permettent de mener à bien des projets en mode agile. Je suis avide d'apprendre et désireuse de contribuer à des projets ambitieux et stimulants.</p>
            </div>
            <div className="section-right">
                <img className="signature" src={Signature} alt="signature" />
            </div>
        </div>
        <div className="stack-container">
            <div className="dev-stack">
               <div className="stack-icons">
                <GoCode/>
               </div>
               <br></br>
               <br></br>
               <br></br>
                <h3> Dev stacks:</h3>
                <br></br>
                <br></br>
                    <li>PHP</li>
                    <li>NodeJS</li>
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                    <li>Html CSS</li>
                    <li>React JS</li>
                    <li>React Native</li>
            </div>
            <div>
                <p className="vertical"></p>
            </div>
            <div className="data-stack">
                <div className="stack-icons">
                    <GoDatabase />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h3>Data stacks:</h3>
                <br></br>
                <br></br>
                    <li>SQL</li>
                    <li>Supabase</li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                    <li>TensorFlow Keras</li>
                    <li>Scikit Learn</li>
                    <li>Google Colab</li>
                    <li>Jupyter Notebook</li>
            </div>
        </div>
    </>
    )
}

export default Presentation; 