import React from "react";
import Portrait from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Photo_Margot_Huet.jpeg';
import Signature from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/Signature.png';


const Presentation = () => {
    return (
        <div>
            <div> 
            <div>
                 <h1>A propos de moi</h1>
                 </div>
                 <div>
                 <p>Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques en git, GitHub, IDE, HTML, CSS, JavaScript, Python, Jupyter Notebook, Pandas et NumPy me permettent de mener à bien des projets d'IA de A à Z. J'ai également acquis une expérience significative en participant à des concours sur Kaggle, ce qui m'a permis de perfectionner mes compétences en résolution de problèmes et en conception de modèles. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
                 </div>
                    <div>
                        <img className="portrait" src={Portrait} alt="portrait" /> 
                    </div>
                    <div>
                        <img src={Signature} alt="signature" />
                    </div>
                    <div>
                        <button>Contact</button>
                    </div>
            </div>
        </div>
    )
}

export default Presentation; 