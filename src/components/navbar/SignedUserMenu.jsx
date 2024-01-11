import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/userFeature";

const SignedUserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSession = () => {
    dispatch(setUser({ isAdmin: false }));
    navigate("/");
    localStorage.removeItem("user");
  };
  return (
    <ul className="p-0">
      <button className="dropdown-item" onClick={closeSession}>
        CERRAR SESIÓN
      </button>
    </ul>
  );
};

export default SignedUserMenu;
