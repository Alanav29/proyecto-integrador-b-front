import { Link } from "react-router-dom";
import "../../styles/navbarMobile/navbarMobile.css";
import FerroSign from "../../assets/img/logo/firmaFerro.png"

const PageLogoMobile = () => {
  return (
    <div
      id="logo-header-mobile"
      className="d-flex d-md-none justify-content-start align-items-center"
    >
      <Link className="navbar-brand ms-3" to="/">
        <img src={FerroSign} alt="Logo" />
      </Link>
    </div>
  );
};

export default PageLogoMobile;
