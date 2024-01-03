import { useState } from "react";
import ToRegisterButton from "../general/buttons/ToRegisterButton";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import PasswordInput from "../general/inputs/PasswordInput";
import logInFunction from "../../utils/logIn/logInFunction";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userFeature";
import { useNavigate } from "react-router";
import saveUserLS from "../../utils/localStorage/saveUserLS";
// import validator from "validator";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("d-none");
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = async (data) => {
    console.log(data);
    const userData = await logInFunction(data);
    if (userData.email) {
      setErrorMessage("d-none");
      dispatch(setUser(userData));
      saveUserLS(userData);
      reset();
      navigate("/");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <h1 className="mb-3 text-center">Bienvenido a Ferro</h1>
      <h2 className="mb-3 text-center">Ingresa con</h2>
      {/* Logos de Google y Facebook */}
      <div className="d-flex justify-content-center mb-3">
        <div className="me-3">
          <FaGoogle size={80} color="green" />{" "}
          {/* Ajusta el tamaño según tus preferencias */}
        </div>
        <div className="ms-5">
          <FaFacebook size={80} color="blue" />{" "}
          {/* Ajusta el tamaño según tus preferencias */}
        </div>
      </div>
      <h4 className="mb-1 text-center">ó</h4>
      <form
        className="w-auto h-auto pb-md-0 d-flex flex-column"
        onSubmit={handleSubmit(getUserData)}
      >
        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"email"}
          id={"login-form-email"}
          nameText={"email"}
        />

        <PasswordInput
          placeholderText={"Introduzca aquí su contraseña"}
          labelText={"Contraseña"}
          id={"login-form-password"}
          isRequired={true}
          nameText={"password"}
          register={register}
        />
        <p className={`text-danger m-0 ${errorMessage}`}>
          Usuario o contraseña incorrecta
        </p>

        <GeneralButton
          buttonText={"Ingresar"}
          buttonColorClass={"bg-primary text-white my-2 mt-2 btn-block"}
        />
      </form>
      <div className="d-flex flex-column align-items-center justify-content-center pb-5">
        <ToRegisterButton
          buttonTextp1={`¿No tienes una cuenta?`}
          buttonTextp2={`¡Registrate! Es gratis`}
          buttonColorClass={"bg-black text-white my-2 btn-block"}
        />
        <GeneralButton
          buttonText={"¿Olvidaste tu contraseña?"}
          buttonColorClass={"bg-light text-black my-2 btn-block"}
        />
      </div>
    </>
  );
};

export default LoginForm;
