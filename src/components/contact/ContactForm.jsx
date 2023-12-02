import GeneralButton from "../general/buttons/GeneralButton";
import TextInput from "../general/inputs/TextInput";

const ContactForm = () => {
  return (
    <form className="w-auto">
      <TextInput
        placeholderText={"Alan"}
        isRequired={true}
        labelText={"Nombre"}
        id={"contact-form-name"}
      />
      <TextInput
        placeholderText={"alan@mail.com"}
        isRequired={true}
        labelText={"Email"}
        id={"contact-form-email"}
      />
      <TextInput
        placeholderText={"Asunto"}
        isRequired={true}
        labelText={"Asunto del mensaje"}
        id={"contact-form-subject"}
      />
      <GeneralButton buttonText={"Enviar"} />
    </form>
  );
};

export default ContactForm;
