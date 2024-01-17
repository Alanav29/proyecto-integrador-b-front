import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/userFeature";

const UsersMenuMobile = ({ setSecondaryMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSession = () => {
    dispatch(setUser({ privilege: { privilege: "user" } }));
    navigate("/");
    setSecondaryMenu("d-none");
    localStorage.removeItem("user");
  };
  return (
    <>
      <div className="text-danger" onClick={closeSession}>
        CERRAR SESIÓN
      </div>
    </>
  );
};

export default UsersMenuMobile;
