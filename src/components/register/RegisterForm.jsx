import { useState } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import NameInput from "../general/inputs/NameInput";
import PhoneInput from "../general/inputs/PhoneInput";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import validator from "validator";

const RegisterForm = () => {
  const { handleSubmit, register } = useForm();

  const sendEmail = (data) => {
    const serviceID = "default_service";
    const templateID = "template_ubhucbb";
    const publicKey = "EA6hf2_2S4stwWgRP";

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
      });
  };

  const onSubmit = (data) => {
    if (
      validator.isEmail(data.emailjs_email) &&
      data.emailjs_phone.length > 9
    ) {
      sendEmail(data);
    } else {
      console.log("faltan datos");
    }
  };

  return (
    <>
      <h1 className="mb-3">Registro</h1>
      <form
        className="w-auto h-auto pb-5 pb-md-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput
          register={register}
          placeholderText={"Alan"}
          isRequired={true}
          labelText={"Nombre"}
          id={"register-form-name"}
          nameText={"emailjs_name"}
        />
        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"register-form-email"}
          nameText={"emailjs_email"}
        />

        <PhoneInput
          register={register}
          placeholderText={"5578787878"}
          isRequired={true}
          labelText={"Teléfono"}
          id={"register-form-phone"}
          nameText={"emailjs_phone"}
        />

        <GeneralButton
          buttonText={"Registro"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
    </>
  );
};

export default RegisterForm;