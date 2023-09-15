import React from "react";
import Portrait from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Photo_Margot_Huet.jpeg';
import Signature from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Signature.png';
import { TfiAngleDown } from "react-icons/tfi";


const Presentation = () => {
    return (
        
        <div className="container" id="container">
            <div className="div1">
                <h1 className="title-presentation">A propos de moi</h1>
            </div>
            <div className="div2">
                <p className="text-presentation">Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques en git, GitHub, IDE, HTML, CSS, JavaScript, Python, Jupyter Notebook, Pandas et NumPy me permettent de mener à bien des projets d'IA de A à Z. J'ai également acquis une expérience significative en participant à des concours sur Kaggle, ce qui m'a permis de perfectionner mes compétences en résolution de problèmes et en conception de modèles. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
            </div>
            <div className="div3">
                <img className="portrait" src={Portrait} alt="portrait" /> 
            </div>
            <div className="div4">
                <img className="signature" src={Signature} alt="signature" />
            </div>
            <div className="div5">
                <p> mes stacks: Python3 reactJS, Google collab, pandas, numpy, matplotlib, html, css, javascript, sql, php, tailwind (images)</p>
            </div>
            <div className="div6"> 
                <TfiAngleDown />  
            </div>
        </div>
    )
}

export default Presentation; 