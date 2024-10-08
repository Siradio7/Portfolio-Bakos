import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 col-sm-12 my-3">
      <div className="card service-card h-100 text-center shadow-sm border-0">
        <div className="card-body">
          <div className="service-icon mb-4">
            <img src={icon} alt={title} className="img-fluid" />
          </div>
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  const servicesData = [
    {
      icon: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid',
      title: 'Développement Web',
      description: 'Nous offrons une variété de services qui peuvent être adaptés aux besoins spécifiques de chaque client, que ce soit pour créer de nouveaux sites web, améliorer des sites existants',
    },
    {
      icon: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid',
      title: 'Conception UX/UI',
      description: "Nous offrons une variété de services qui peuvent être adaptés aux besoins spécifiques de chaque client, que ce soit la conception de maquettes interactives qui simulent l'apparence finale du produit, permettant aux clients et aux équipes de développement de voir et d'interagir avec l'interface avant le développement.",
    },
    {
      icon: 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid',
      title: 'installation et Maintenance informatique',
      description: "Nous offrons une variété de services qui comprennent l'installation de matériel et de réseaux, la maintenance préventive par le nettoyage et la mise à jour de firmware et drivers, ainsi que le support technique pour l'assistance utilisateur et la réparation de matériel",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Les Services Que Nous Proposons</h2>
      <div className="row">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
