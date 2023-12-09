import { useState } from "react";
import "../../../styles/general/inputs/TextInput.css";

const TextInput = ({
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
    if (e.target.value !== "") {
      setFillState(true);
    } else {
      setFillState(false);
      setAlertMessage("Llena este campo");
    }
  };

  return (
    <div className="text-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <input
        {...register(nameText)}
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        onChange={(e) => showAlerMessage(e)}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default TextInput;
