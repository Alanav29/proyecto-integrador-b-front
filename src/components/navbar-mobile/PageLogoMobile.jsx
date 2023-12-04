import { Link } from "react-router-dom";

const PageLogoMobile = () => {
  return (
    <div class="d-flex d-md-none justify-content-start py-3">
      <Link class="navbar-brand ms-3" to="/">
        FERRO
      </Link>
    </div>
  );
};

export default PageLogoMobile;
