import { Link } from "react-router-dom";
import "../../styles/navbarMobile/navbarMobile.css";

const PageLogoMobile = () => {
  return (
    <div
      id="logo-header-mobile"
      className="d-flex d-md-none justify-content-start align-items-center"
    >
      <Link className="navbar-brand ms-3" to="/">
        FERRO
      </Link>
    </div>
  );
};

export default PageLogoMobile;
