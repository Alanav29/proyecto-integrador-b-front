import { useState } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import NameInput from "../general/inputs/NameInput";
import PasswordInput from "../general/inputs/PasswordInput";
import PhoneInput from "../general/inputs/PhoneInput";
import { useForm } from "react-hook-form";
// import validator from "validator";

const SignUpForm = () => {
  const { handleSubmit, register } = useForm();
  const [passwordAlert, setPasswordAlert] = useState("d-none");

  const onSubmit = (data) => {

    if (data.password !== data["confirm-password"]) {
      setPasswordAlert("d-block")
    } else {
      setPasswordAlert("d-none")
    }
    console.log(data);
  }

  return (
    <>
      <h1 className="mb-3">Registrate</h1>
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
          nameText={"sign-up-form-name"}
        />

        <NameInput
          register={register}
          placeholderText={"Alvarado"}
          isRequired={true}
          labelText={"Apellido"}
          id={"sign-up-form-name"}
          nameText={"sign-up-form-name"}
        />

        <PhoneInput
          register={register}
          placeholderText={"5578787878"}
          isRequired={true}
          labelText={"Teléfono"}
          id={"sign-up-form-phone"}
          nameText={"sign-up-form-phone"}
        />

        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"sign-up-form-email"}
          nameText={"sign-up-form-email"}
        />

        <PasswordInput
          register={register}
          placeholderText={"8 caracteres A-Z a-z 0-9 -_"}
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
        <p className={`${passwordAlert} text-danger`}  >Las contraseñas no coinciden  </p>
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
    </>
  );
};

export default SignUpForm;