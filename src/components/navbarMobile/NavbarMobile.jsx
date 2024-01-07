import { Link } from "react-router-dom";
import "../../styles/navbarMobile/navbarMobile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import { useState } from "react";
import AccountMenuMobile from "./AccountMenuMobile";
import SignInMobileMenu from "./SignInMobileMenu";

const NavbarMobile = () => {
  const user = useSelector(selectUser);
  const [secondaryMenu, setSecondaryMenu] = useState("d-none");
  const [secondaryMenuOption, setSecondaryMenuOption] = useState(<></>);

  return (
    <nav className="d-block d-md-none" id="navbar-mobile">
      <div
        className={`container-fluid ${secondaryMenu} p-1 align-items-center flex-column`}
      >
        <button className="btn" onClick={() => setSecondaryMenu("d-none")}>
          <i className="bi bi-caret-down-fill"></i>
        </button>
        {secondaryMenuOption}
      </div>
      <div className="container-fluid d-flex p-2 justify-content-center">
        <Link to="/" className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-house" />
          <p>Inicio</p>
        </Link>
        <Link
          to="/aboutUs"
          className="px-2 d-flex flex-column align-items-center"
        >
          <i className="bi bi-patch-question" />
          <p>Nosotros</p>
        </Link>
        <Link
          className="px-2 d-flex flex-column align-items-center"
          to="/gallery"
        >
          <i className="bi bi-columns-gap" />
          <p>Galería</p>
        </Link>
        <div
          className="px-2 d-flex flex-column align-items-center account-menu-mobile"
          onClick={() => {
            setSecondaryMenu("d-flex");
            user.email
              ? setSecondaryMenuOption(
                  <AccountMenuMobile setSecondaryMenu={setSecondaryMenu} />
                )
              : setSecondaryMenuOption(
                  <SignInMobileMenu setSecondaryMenu={setSecondaryMenu} />
                );
          }}
        >
          <i className="bi bi-person-circle" />
          <p>Cuenta</p>
        </div>
        <Link
          to="/contact"
          className="px-2 d-flex flex-column align-items-center"
        >
          <i className="bi bi-envelope" />
          <p>Contacto</p>
        </Link>
        <Link to="/cart" className="px-2 d-flex flex-column align-items-center">
          <i className="bi bi-cart4" />
          <p>Carrito</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
