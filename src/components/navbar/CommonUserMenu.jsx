import { Link } from "react-router-dom";

const CommonUserMenu = () => {
  return (
    <ul className="p-0">
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        INICIAR SESION
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/register">
        REGISTRARSE
      </Link>
    </ul>
  );
};

export default CommonUserMenu;
