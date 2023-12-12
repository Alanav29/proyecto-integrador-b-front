import "../../../styles/general/inputs/TextInput.css";
import { useState } from "react"; 

const PriceInput = ({
    placeholderText,
    labelText,
    id,
    isRequired,
    nameText,
    register,
    price,
  }) => {
    const [fillState, setFillState] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");
  
    const showAlertMessage = (e) => {
      // Check if price is valid
      if (e.target.value !== "" && e.target.value.match(/^[0-9]+$/)) {
        setFillState(true);
      } else {
        setFillState(false);
        setAlertMessage("Introduzca un precio válido");
      }
    };
  
    return (
      <div className="text-input d-flex flex-column-reverse">
        <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
        <input   
          {...register(nameText)}
          type="number"
          placeholder={placeholderText}
          name={nameText}
          id={id}
          className="p-2"
          required={isRequired}
          {/* pattern="^[0-9]+$" */}
          onChange={(e) => {
            // Only allow numbers
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
            showAlertMessage(e);
          }}
        />
        <label htmlFor={id} className="mx-2 px-1">
          {labelText}
        </label>
      </div>
    );
  };
  
  export default PriceInput;