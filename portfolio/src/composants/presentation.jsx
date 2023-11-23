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
                    <p>Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques me permettent de mener à bien des projets d'IA de A à Z. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
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
                    <li>Python</li>
                    <li>React JS</li>
                    <li>Tailwind</li>
                    <li>Html CSS</li>
                    <li>JavaScript</li>
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
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                    <li>Google Colab</li>
                    <li>Jupyter Notebook</li>
            </div>
        </div>
    </>
    )
}

export default Presentation; 