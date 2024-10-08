import React, { useState } from 'react';

const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = "Je suis un développeur web passionné avec une expertise en design et maintenance informatique. Mon parcours me permet de combiner compétences techniques et sens esthétique pour créer des expériences en ligne mémorables...";
  const fullText = "Je suis un développeur web passionné avec une expertise en design et maintenance informatique. Mon parcours me permet de combiner compétences techniques et sens esthétique pour créer des expériences en ligne mémorables.\n\nJe suis spécialisé dans le développement de sites web dynamiques et fonctionnels, utilisant les dernières technologies pour répondre aux besoins spécifiques de chaque projet. En parallèle, je m'efforce de concevoir des interfaces utilisateur élégantes et intuitives, en mettant l'accent sur l'expérience globale de l'utilisateur.\n\nLa maintenance informatique est également une partie essentielle de mon travail. Je veille à la performance, à la sécurité et à la fiabilité des systèmes informatiques, en résolvant les problèmes rapidement et en assurant une gestion proactive des infrastructures.";

  return (
    <div className="container about-section">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="image-container">
            <img 
              src="https://img.freepik.com/premium-vector/man-sits-desk-with-laptop-drawing-man-screen_1013341-185099.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid" 
              alt="Profile" 
              className="img-fluid profile-image"
            />
          </div>
        </div>
        <div className="col-md-6 text-center text-md-left">
          <h5 className="text-uppercase text-muted">A propos de moi</h5>
          <h1 className="display-6">Développeur d'application web et Designer</h1>
          <p className={`mb-3 custom-font ${isExpanded ? '' : 'text-truncate'}`} style={{ maxHeight: isExpanded ? 'none' : '3.6em', overflow: 'hidden' }}>
            {isExpanded ? fullText : shortText}
          </p>
          <button onClick={handleToggle} className="btn btn-gradient">
            {isExpanded ? "Lire moins" : "Lire plus"}
          </button>
          <a href="../Asset/CV Alpho.pdf" className="btn btn-gradient" download="CV Alpho.pdf" target="_blank" rel="noopener noreferrer">Télecharger CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;
