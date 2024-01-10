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
            <a href="https://www.facebook.com/profile.php?id=61555215133199" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/ferr.oalfonso?igsh=MTM5MzY0NTZ4OHdhMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.pinterest.com.mx/ferroecomerce/_created/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /></Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Ferro | HTaMaLeros</p>
    </footer>
  );
};

export default Footer;
