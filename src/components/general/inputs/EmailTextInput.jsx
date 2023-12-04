// import { useState } from "react";
import "../../../styles/general/inputs/TextInput.css";

const EmailTextInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
}) => {
  //   const [emailInputValue, setEmailInputValue] = useState("");

  return (
    <div className="text-input d-flex flex-column-reverse">
      <input
        type="email"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[^A-Za-z0-9_@.-]/g, "");
          e.target.value = e.target.value.replace(/^-/g, "");
          e.target.value = e.target.value.replace(/\.\./g, ".");
          e.target.value = e.target.value.replace(/^@/g, "");
          e.target.value = e.target.value.replace(/\.@\./g, "");
          e.target.value = e.target.value.replace(/^\./g, "");
        }}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default EmailTextInput;
