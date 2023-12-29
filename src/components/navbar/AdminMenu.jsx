import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../features/userFeature";

const AdminMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSession = () => {
    dispatch(setUser({ isAdmin: false }));
    navigate("/");
    localStorage.removeItem("user");
  };
  return (
    <ul className="p-0">
      <Link className="dropdown-item" aria-current="page" to="/galleryAdmin">
        ADMINSTRACION DE PRODUCTOS
      </Link>
      <Link className="dropdown-item" aria-current="page" to="/">
        MI PERFIL
      </Link>
      <button className="dropdown-item" onClick={closeSession}>
        CERRAR SESION
      </button>
    </ul>
  );
};

export default AdminMenu;
