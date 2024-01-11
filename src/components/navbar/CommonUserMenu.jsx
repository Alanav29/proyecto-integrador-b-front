import { Link } from "react-router-dom";

const CommonUserMenu = () => {
  return (
    <ul className="p-0">
      <Link className="dropdown-item" aria-current="page" to="/logIn">
        INICIAR SESIÓN
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/signUp">
        REGISTRARSE
      </Link>
    </ul>
  );
};

export default CommonUserMenu;
