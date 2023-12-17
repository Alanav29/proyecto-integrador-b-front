import { Link } from "react-router-dom";

const SignedUserMenu = () => {
  return (
    <li>
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        MI PERFIL
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        CERRAR SESION
      </Link>
      <></>
    </li>
  );
};

export default SignedUserMenu;
