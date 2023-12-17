import { Link } from "react-router-dom";

const CommonUserMenu = () => {
  return (
    <li>
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        INICIAR SESION
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        REGISTRARSE
      </Link>
    </li>
  );
};

export default CommonUserMenu;
