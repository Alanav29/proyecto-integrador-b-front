import { Link } from "react-router-dom";

const SignedUserMenu = () => {
  return (
    <ul className="p-0">
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        MI PERFIL
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        CERRAR SESION
      </Link>
      <></>
    </ul>
  );
};

export default SignedUserMenu;
