import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/userFeature";

const SignedUserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSession = () => {
    dispatch(setUser({ privilege: { privilege: "user" } }));
    navigate("/");
    localStorage.removeItem("user");
  };
  return (
    <ul className="p-0">
      <button className="dropdown-item text-danger" onClick={closeSession}>
        CERRAR SESIÓN
      </button>
    </ul>
  );
};

export default SignedUserMenu;
