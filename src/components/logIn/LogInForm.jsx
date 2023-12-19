// import { useState } from "react";
import ToRegisterButton from "../general/buttons/ToRegisterButton";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import PasswordInput from "../general/inputs/PasswordInput";
// import validator from "validator";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();

  

//   const onSubmit = (data) => {
//     if (    ) {
      
//     } else {
//        console.log("faltan datos");
//     }
//   };

  return (
    <>
      <h1 className="mb-3 text-center">Bienvenido a Ferro</h1>
      <h2 className="mb-3 text-center">Ingresa con</h2>
      {/* Logos de Google y Facebook */}
    <div className="d-flex justify-content-center mb-3">
      <div className="me-3">
        <FaGoogle size={80} color="green" /> {/* Ajusta el tamaño según tus preferencias */}
      </div>
      <div className="ms-5">
        <FaFacebook size={80} color="blue" /> {/* Ajusta el tamaño según tus preferencias */}
      </div>
    </div>
    <h4 className="mb-1 text-center">ó</h4>
      <form
        className="w-auto h-auto pb-5 pb-md-0 d-flex flex-column"
        onSubmit={handleSubmit()}
      >
        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"contact-form-email"}
          nameText={"login-form-email"}
          />

          <PasswordInput
          placeholderText={"Intrduzca aquí su contraseña"}
          labelText={"Contraseña"}
          id={"password-login-form"}
          isRequired={true}
          nameText={"password"}
          register={register}
          />

          <div className="d-flex flex-column align-items-center justify-content-center">
  <div className="d-grid w-100">
    <GeneralButton
      buttonText={"Ingresar"}
      buttonColorClass={"bg-primary text-white my-2 mt-5 btn-block"}
    />
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
</div>
      </form>
    </>
  );
};

export default LoginForm;
