import { useState } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import NameInput from "../general/inputs/NameInput";
import PhoneInput from "../general/inputs/PhoneInput";
import TextAreaInput from "../general/inputs/TextAreaInput";
import TextInput from "../general/inputs/TextInput";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import validator from "validator";

const ContactForm = () => {
  const { handleSubmit, register } = useForm();
  const [contactFormAlert, setContactFormAlert] = useState("exito");
  const [isSubmitted, setIsSubmitted] = useState(false);

  let mensaje;


  switch (contactFormAlert) {
    case 'exito':
      mensaje = 'Tu mensaje ha sido enviado. Muchas gracias por contactarnos, en breve tendrás una respuesta';
      break;
    case 'error':
      mensaje = 'Hubo un error al enviar tu mensaje';
      break;
    default:
      mensaje = 'Error desconocido, ni dios sabe qué pasó';
  }

  const sendEmail = (data) => {
    const serviceID = "default_service";
    const templateID = "template_ubhucbb";
    const publicKey = "EA6hf2_2S4stwWgRP";

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("Email enviado!", response.status, response.text);
        setContactFormAlert('exito');
        setIsSubmitted(true); 
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
        setContactFormAlert('error');
        setIsSubmitted(true);
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
      <h1 className="mb-3">Contáctenos</h1>
      <form
        className="w-auto h-auto pb-5 pb-md-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput
          register={register}
          placeholderText={"Alan"}
          isRequired={true}
          labelText={"Nombre"}
          id={"contact-form-name"}
          nameText={"emailjs_name"}
        />
        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"contact-form-email"}
          nameText={"emailjs_email"}
        />

        <PhoneInput
          register={register}
          placeholderText={"5578787878"}
          isRequired={true}
          labelText={"Teléfono"}
          id={"contact-form-phone"}
          nameText={"emailjs_phone"}
        />

        <TextInput
          register={register}
          placeholderText={"Asunto del mensaje"}
          isRequired={true}
          labelText={"Asunto"}
          id={"contact-form-subject"}
          nameText={"emailjs_issue"}
        />
        <TextAreaInput
          register={register}
          placeholderText={"Escribe aquí tu mensaje"}
          isRequired={true}
          labelText={"Mensaje"}
          id={"contact-form-message"}
          nameText={"emailjs_message"}
        />
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
      {isSubmitted && (
        <p className={`${contactFormAlert}`}>
          {mensaje}
        </p>
      )}
    </>
  );
};

export default ContactForm;
