import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import About from './About';
import Service from './Service';

const images = [
    'https://img.freepik.com/premium-vector/man-is-working-laptop-with-word-code-it_1013341-184761.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid', 
    'https://img.freepik.com/premium-photo/developer-using-database-management-tool-like-mysql-workbench_1314467-11800.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?uid=R162344526&ga=GA1.1.1893635307.1725655455&semt=ais_hybrid'
];

const Home = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return <>
        <section className="home-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="small-text">SALUT !</p>
                        <h1 className="display-6">JE SUIS ALPHA OUMAR DIALLO</h1>
                        <p className="lead">INGENIEUR INFORMATIQUE ET DESIGNER</p>
                        <div className="social-icons my-4">
                            <a href="https://wa.me/+224620666018" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp}size="2x" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100008194576692&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/alpho_bakos?igsh=MTQyZTA0OHVseWUxcQ==" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://github.com/https://github.com/AlphoBakos" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                        <a href="./Project.jsx" className="btn btn-gradient">VOIR MES PROJETS</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <img 
                            src={images[currentImageIndex]} 
                            alt="Profile" 
                            className="img-fluid profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>    
        <About />
        <Service />
    </>
}

export default Home;