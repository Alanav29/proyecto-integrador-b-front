import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <ul className="p-0">
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        ADMINSTRACION DE PRODUCTOS
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        MI PERFIL
      </Link>
    </ul>
  );
};

export default AdminMenu;
