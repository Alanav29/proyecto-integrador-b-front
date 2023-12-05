import { Link } from "react-router-dom";

const PageLogoMobile = () => {
  return (
    <div className="d-flex d-md-none justify-content-start py-3">
      <Link className="navbar-brand ms-3" to="/">
        FERRO
      </Link>
    </div>
  );
};

export default PageLogoMobile;
