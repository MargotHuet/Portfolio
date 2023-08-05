import React from "react";
import Portrait from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/Photo_Margot_Huet.jpeg';
import Signature from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/Signature.png';

const Presentation = () => {
    return (
        <div className="flex w-full px-8 m-8">
            <div className="container px-8 py-5 bg-sky-100 text-black grid grid-cols-5 grid-rows-5 gap-1"> 
            <div className="col-span-2 ">
                 <h1 className="text-4xl">A propos de moi</h1>
                 </div>
                 <div className="col-span-2 row-span-2 col-start-1 row-start-2">
                 <p className="text-xl ">Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques en git, GitHub, IDE, HTML, CSS, JavaScript, Python, Jupyter Notebook, Pandas et NumPy me permettent de mener à bien des projets d'IA de A à Z. J'ai également acquis une expérience significative en participant à des concours sur Kaggle, ce qui m'a permis de perfectionner mes compétences en résolution de problèmes et en conception de modèles. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
                 </div>
                    <div className="row-span-2 col-start-3 row-start-1 ">
                        <img className="" src={Portrait} alt="portrait" /> 
                    </div>
                    <div className="col-start-3 row-start-3">
                        <img className="" src={Signature} alt="signature" />
                    </div>
            </div>
            <button className="flex justify-center">Mes projets</button>    
        </div>
    )
}

export default Presentation; 