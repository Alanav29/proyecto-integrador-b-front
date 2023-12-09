import { useState } from "react";
import "../../../styles/general/inputs/TextInput.css";
import validator from "validator";

const EmailTextInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
  register,
}) => {
  const [fillState, setFillState] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const formatInput = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9_@.-]/g, "");
    e.target.value = e.target.value.replace(/^-/g, "");
    e.target.value = e.target.value.replace(/\.\./g, ".");
    e.target.value = e.target.value.replace(/^@/g, "");
    e.target.value = e.target.value.replace(/\.@\./g, "");
    e.target.value = e.target.value.replace(/^\./g, "");
    e.target.value = e.target.value.replace(/@@/g, "@");
  };

  const showAlerMessage = (e) => {
    const emailValue = e.target.value;
    if (validator.isEmail(emailValue)) {
      setFillState(true);
    } else {
      setFillState(false);
      setAlertMessage("Email invalido");
    }
  };

  return (
    <div className="text-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <input
        {...register(nameText)}
        type="email"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        onChange={(e) => {
          formatInput(e);
          showAlerMessage(e);
        }}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default EmailTextInput;
