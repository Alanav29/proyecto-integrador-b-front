// import { showPassword } from "show-password";
import "../../../styles/general/inputs/TextInput.css";
import { useState } from "react";

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

    const showAlertMessage = (e) => {
        if (
            (e.target.value !== "" && e.target.value.length >= 8) ||
            isRequired === false
        ) {
            setFillState(true);
        } else if (e.target.value.length < 8) {
            setFillState(false);
            setAlertMessage("Introduzca un contraseña de 8 dígitos, para mayor seguridad usa una mayuscula y un simbolo.");
        } else {
            setFillState(false);
            setAlertMessage("Llena este campo.");
        }
    };

    return (

        <div className="text-input d-flex flex-column-reverse">
            <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
            <input
                {...register(nameText)}
                type="password"
                placeholder={placeholderText}
                name={nameText}
                id={id}
                className="p-2"
                required={isRequired}
                maxLength={"8"}
                minLength={"8"}
                onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z0-9_-]/g, "");
                    showAlertMessage(e);
                }}
            />
            <label htmlFor={id} className="mx-2 px-1">
                {labelText}
            </label>
        </div>
    );
};

export default PasswordInput;