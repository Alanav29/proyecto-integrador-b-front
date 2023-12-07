import { Link } from "react-router-dom";
import "../../styles/navbarMobile/navbarMobile.css";

const NavbarMobile = () => {
  return (
    <nav className="d-block d-md-none" id="navbar-mobile">
      <div className="container-fluid d-flex p-2 justify-content-center">
        <Link to="/" className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-house" />
          <p>Inicio</p>
        </Link>
        <Link
          to="aboutUs"
          className="px-2 d-flex flex-column align-items-center"
        >
          <i className="bi bi-patch-question" />
          <p>Nosotros</p>
        </Link>
        <Link className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-columns-gap" />
          <p>Galería</p>
        </Link>
        <Link className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-person-circle" />
          <p>Cuenta</p>
        </Link>
        <Link
          to="/contact"
          className="px-2 d-flex flex-column align-items-center"
        >
          <i className="bi bi-envelope" />
          <p>Contacto</p>
        </Link>
        <Link className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-cart4" />
          <p>Carrito</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
