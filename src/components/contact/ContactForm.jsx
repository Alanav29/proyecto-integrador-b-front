import { useRef } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import NameInput from "../general/inputs/NameInput";
import PhoneInput from "../general/inputs/PhoneInput";
import TextAreaInput from "../general/inputs/TextAreaInput";
import TextInput from "../general/inputs/TextInput";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const contactFormRef = useRef();
  const sendEmailForm = (event) => {
    event.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_ubhucbb";
    const publicKey = "EA6hf2_2S4stwWgRP";

    emailjs
      .sendForm(serviceID, templateID, contactFormRef.current, publicKey)
      .then(
        () => {
          console.log("Se envió email");
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <>
      <h1 className="mb-3">Contáctenos</h1>
      <form ref={contactFormRef} className="w-auto" onSubmit={sendEmailForm}>
        <NameInput
          placeholderText={"Alan"}
          isRequired={true}
          labelText={"Nombre"}
          id={"contact-form-name"}
          nameText={"emailjs_name"}
        />
        <EmailTextInput
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"Email"}
          id={"contact-form-email"}
          nameText={"emailjs_email"}
        />
        <PhoneInput
          placeholderText={"5578787878"}
          isRequired={true}
          labelText={"Teléfono"}
          id={"contact-form-subject"}
          nameText={"emailjs_phone"}
        />
        <TextInput
          placeholderText={"Asunto del mensaje"}
          isRequired={true}
          labelText={"Asunto"}
          id={"contact-form-subject"}
          nameText={"emailjs_issue"}
        />
        <TextAreaInput
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
    </>
  );
};

export default ContactForm;
