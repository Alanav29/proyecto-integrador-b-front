import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <li>
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        ADMINSTRACION DE PRODUCTOS
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        MI PERFIL
      </Link>
    </li>
  );
};

export default AdminMenu;
