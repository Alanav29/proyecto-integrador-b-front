import { useState } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import NameInput from "../general/inputs/NameInput";
import PasswordInput from "../general/inputs/PasswordInput";
import PhoneInput from "../general/inputs/PhoneInput";
import { useForm } from "react-hook-form";
import createUser from "../../utils/signUp/addUser";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
  
  const notifySuccess = ()=> {
      toast.success("¡Su registro se ha completado con éxito!", { 
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  };
  const notifyError = (message)=>{
     toast.error(message,  {
    position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  };
  const { handleSubmit, register, reset } = useForm();
  const [passwordAlert, setPasswordAlert] = useState("d-none");
  // const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (data.password !== data["confirm-password"]) {
      setPasswordAlert("d-block");
    } else {
      setPasswordAlert("d-none");
      const requiredData = {
        name: data.name + data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
      };
      console.log(data);
    const userData = await createUser(requiredData);
    userData.email ? notifySuccess(): notifyError(userData.message);
    reset();  
      
    // navigate("/") 
      
    }
  };

  return (
    <>
      <h1 className="mb-3">Regístrate</h1>
      <form
        className="w-auto h-auto pb-5 pb-md-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput
          register={register}
          placeholderText={"Alan"}
          isRequired={true}
          labelText={"Nombre"}
          id={"sign-up-form-name"}
          nameText={"name"}
        />

        <NameInput
          register={register}
          placeholderText={"Alvarado"}
          isRequired={true}
          labelText={"Apellido"}
          id={"sign-up-form-last-name"}
          nameText={"lastName"}
        />

        <PhoneInput
          register={register}
          placeholderText={"5578787878"}
          isRequired={true}
          labelText={"Teléfono"}
          id={"sign-up-form-phone"}
          nameText={"phoneNumber"}
        />

        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"sign-up-form-email"}
          nameText={"email"}
        />

        <PasswordInput
          register={register}
          placeholderText={"8 caracteres"}
          isRequired={true}
          labelText={"Crea tu contraseña"}
          id={"sign-up-form-password"}
          nameText={"password"}
        />

        <PasswordInput
          register={register}
          placeholderText={"Confirma tu contraseña"}
          isRequired={true}
          labelText={"Confirma tu contraseña"}
          id={"sign-up-form-confirm-password"}
          nameText={"confirm-password"}
        />
        <p className={`${passwordAlert} text-danger`}>
          Las contraseñas no coinciden{" "}
        </p>
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
      <ToastContainer/>
    </>
  );
};


export default SignUpForm;
