import "../../../styles/general/inputs/TextAreaInput.css";
import { useState } from "react";

const TextAreaInput = ({
  id,
  placeholderText,
  isRequired,
  labelText,
  nameText,
  register,
}) => {
  const [fillState, setFillState] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (e) => {
    if (e.target.value !== "" || isRequired === false) {
      setFillState(true);
    } else {
      setFillState(false);
      setAlertMessage("Llena este campo");
    }
  };

  return (
    <div className="text-area-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <textarea
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        onChange={(e) => showAlertMessage(e)}
        {...register(nameText)}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default TextAreaInput;
