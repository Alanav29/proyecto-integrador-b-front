import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../styles/footer/footer.css';


const Footer = () => {
  return (
    <footer>
        <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /></Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Ferro | HTaMaLeros</p>
    </footer>
  );
};

export default Footer;
