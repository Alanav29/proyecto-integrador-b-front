import { Link } from "react-router-dom";
const SignInMobileMenu = ({ setSecondaryMenu }) => {
  return (
    <>
      <Link className="" to="/logIn" onClick={() => setSecondaryMenu("d-none")}>
        INICIAR SESIÓN
      </Link>
      <Link
        className=""
        to="/signUp"
        onClick={() => setSecondaryMenu("d-none")}
      >
        REGISTRARSE
      </Link>
    </>
  );
};

export default SignInMobileMenu;
