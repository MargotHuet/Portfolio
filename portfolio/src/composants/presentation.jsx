import React from "react";

const Presentation = () => {
    return (
        <div className="flex w-full px-8 m-8">
        <div className="container px-8 py-5 bg-sky-100 text-black grid grid-cols-3  gap-4"> 
        <h1 className="col-span-3 text-4xl px-4 p-7">A propos de moi</h1>
        <p className="col-span-2 text-xl px-4">Je suis une étudiante passionnée d'intelligences artificielles à la recherche d'une alternance dans le domaine du développement. Mes compétences techniques en git, GitHub, IDE, HTML, CSS, JavaScript, Python, Jupyter Notebook, Pandas et NumPy me permettent de mener à bien des projets d'IA de A à Z. J'ai également acquis une expérience significative en participant à des concours sur Kaggle, ce qui m'a permis de perfectionner mes compétences en résolution de problèmes et en conception de modèles. Je suis avide d'apprendre et désireuse de contribuer activement au succès de votre entreprise. Merci pour l'opportunité que vous me donnerez de faire partie de votre équipe.</p>
        </div>
        <button className="flex justify-center">Mes projets</button>

        </div>
    )
}

export default Presentation; 