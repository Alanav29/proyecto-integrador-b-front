// import { showPassword } from "show-password";
import "../../../styles/general/inputs/TextInput.css";
import { useState, useEffect } from "react";

const PasswordInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
  register,
}) => {
  const [fillState, setFillState] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (value) => {
    if ((value !== "" && value.length >= 8) || isRequired === false) {
      setFillState(true);
    } else if (value.length < 8) {
      setFillState(false);
      setAlertMessage("Introduzca un contraseña de 8 digitos");
    } else {
      setFillState(false);
      setAlertMessage("Llena este campo");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9_-]/g, "");
    showAlertMessage(value);
  };

  return (
    <div className="text-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <input
        type="password"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        minLength={8}
        onChange={(e) => handleInputChange(e)}
        {...register(nameText)}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default PasswordInput;
