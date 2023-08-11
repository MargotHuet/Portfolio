import React from "react";
import Portrait from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Photo_Margot_Huet.jpeg';
import Signature from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Signature.png';


const Presentation = () => {
    return (
        <div className="flex w-full py-8">
            <div className=" w-full px-8 py-5 bg-sky-100 text-black grid grid-cols-5 grid-rows-3 gap-8"> 
            <div className="col-span-3">
                 <h1 className="text-4xl w-full py-10 px-20 underline">A propos de moi</h1>
                 </div>
                 <div className="col-span-3 row-span-2 col-start-1 row-start-2 flex justify-self-center px-20">
                 <p className="text-xl h-full w-full">Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques en git, GitHub, IDE, HTML, CSS, JavaScript, Python, Jupyter Notebook, Pandas et NumPy me permettent de mener à bien des projets d'IA de A à Z. J'ai également acquis une expérience significative en participant à des concours sur Kaggle, ce qui m'a permis de perfectionner mes compétences en résolution de problèmes et en conception de modèles. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
                 </div>
                    <div className="col-span-2 row-span-2 col-start-4 row-start-1 py-32 flex justify-self-center">
                        <img className="w-62 h-72" src={Portrait} alt="portrait" /> 
                    </div>
                    <div className="col-span-2 col-start-4 row-start-3 flex justify-self-center">
                        <img className="w-72 h-72 " src={Signature} alt="signature" />
                    </div>
                    <div className="w-screen px-20 py-10">
                        <button className="left-12">Contact</button>
                    </div>
            </div>
        </div>
    )
}

export default Presentation; 