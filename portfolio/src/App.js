import Accueil from "./composants/accueil.jsx";
import Presentation from "./composants/presentation.jsx";
import Projets from "./composants/projets.jsx";
import Contact from "./composants/contact.jsx";
import Footer from "./composants/footer.jsx";
import React from "react";
import ".//accueil.css";
import ".//presentation.css";

function App() {
  return (
    <div>
      <Accueil />
      <Presentation />
      <Projets />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
