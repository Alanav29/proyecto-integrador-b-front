import "../../../styles/general/inputs/TextInput.css";
import { useState } from "react";

const PhoneInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
  register,
}) => {
  const [fillState, setFillState] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlerMessage = (e) => {
    if (
      (e.target.value !== "" && e.target.value.length >= 10) ||
      isRequired === false
    ) {
      setFillState(true);
    } else if (e.target.value.length < 10) {
      setFillState(false);
      setAlertMessage("Introduzca un número de 10 dígitos");
    } else {
      setFillState(false);
      setAlertMessage("Llena este campo");
    }
  };

  return (
    <div className="text-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <input
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        maxLength={"10"}
        minLength={"10"}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
          showAlerMessage(e);
        }}
        {...register(nameText)}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default PhoneInput;
