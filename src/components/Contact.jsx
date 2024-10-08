import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez l'envoi du formulaire, par exemple, envoyez les données à un serveur
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Contactez-nous</h2>
            <div className="form-group mb-3">
              <textarea 
                className="form-control" 
                placeholder="Entrez votre message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>
            <div className="row">
            <div className="form-group col-md-6 mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Entrez votre nom" 
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group col-md-6 mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Entrez votre adresse email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6 mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Entrez le sujet" 
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <button type="submit" className="btn btn-gradient">
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
        <div className="hauteur col-md-4 d-flex flex-column justify-content-center">
          <div className="mb-3 d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2 fs-4"></i> Montréal, Quebec. Boulevard Henrry-Bourassa, Est
          </div>
          <div className="mb-3 d-flex align-items-center">
            <i className="bi bi-telephone-fill me-2 fs-4"></i> +1 (514) 970-4796
          </div>
          <div className="mb-3 d-flex align-items-center">
            <i className="bi bi-envelope-fill me-2 fs-4 "></i>alpha.o.diallo24@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
