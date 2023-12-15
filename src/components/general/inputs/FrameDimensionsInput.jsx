import { useState } from "react";
import "../../../styles/general/inputs/TextInput.css";

const FrameDimensionsInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
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
    <div className="d-flex">
      <div className="text-input d-flex flex-column-reverse flex-grow-1">
        <p className={fillState ? "d-none" : "text-danger m-0"}>
          {alertMessage}
        </p>
        <input
          {...register(nameText)}
          type="text"
          placeholder={placeholderText}
          name={nameText}
          id={id}
          className="p-2"
          required={isRequired}
          minLength={"2"}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
            // e.target.value = e.target.value.replace(/\.\./g, ".");
            // e.target.value = e.target.value.replace(/^\./g, "");
            showAlertMessage(e);
          }}
        />
        <label htmlFor={id} className="mx-2 px-1">
          {labelText}
        </label>
      </div>
      <span className="d-flex align-items-end pb-2 px-2 border border-black border-2 mt-4 border-start-0">
        cm
      </span>
    </div>
  );
};

export default FrameDimensionsInput;
