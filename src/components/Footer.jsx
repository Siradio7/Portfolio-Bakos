import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='body'>
            <div className="logo">
                <img alt="Logo " src="https://img.icons8.com/?size=100&id=19294&format=png&color=000000" height="60" width="40"/>
                <h1>
                    NeoCraft
                </h1>
            </div>
            <div className="social-links">
                <a href="https://wa.me/+224620666018" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
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
            <div className="footer">
                <p className="fas fa-heart">
                    Copyright © 2024 All rights reserved | Réalisé par Alpha Oumar Diallo   
                </p>
            </div>
        </div>
    )
}

export default Footer;