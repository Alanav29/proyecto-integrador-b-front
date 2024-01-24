import { useState } from "react";

import Cards from "@snowpak/react-credit-cards";
import "../../styles/general/inputs/TextInput.css";
import GeneralButton from "../general/buttons/GeneralButton";
const PaymentForm = () => {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <div className="m-2 slide-in-elliptic-top-fwd " id="payment-form">
      <Cards
        cvc={cardInfo.cvc}
        expiry={cardInfo.expiry}
        focused={cardInfo.focus}
        name={cardInfo.name}
        number={cardInfo.number}
        placeholders={{
          name: "TITULAR DE LA TARJETA",
          number: "NÚMERO DE TARJETA",
          expiry: "VÁLIDO HASTA",
        }}
      />
      <form className="d-flex flex-column m-3">
        <div className="text-input d-flex flex-column-reverse">
          <input
            className="p-2"
            id="number-input"
            type="tel"
            name="number"
            placeholder="XXXX XXXX XXXX XXXX"
            minLength="19"
            maxLength="19"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9\s]/g, "");
              e.target.value = e.target.value.replace(/(\d{4}(?=\d))/g, "$1 ");
              handleInputChange(e);
            }}
            onFocus={handleInputFocus}
          />
          <label className="mx-2 px-1" htmlFor="number-input">
            Número de tarjeta
          </label>
        </div>

        <div className="text-input d-flex flex-column-reverse">
          <input
            className="p-2"
            id="name-input"
            type="text"
            name="name"
            placeholder="Gabriela Ferro"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <label className="mx-2 px-1" htmlFor="name-input">
            Titular de la tarjeta
          </label>
        </div>

        <div className="text-input d-flex flex-column-reverse">
          <input
            className="p-2"
            id="expiry-input"
            type="tel"
            name="expiry"
            placeholder="08/24"
            minLength="5"
            maxLength="5"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9\/]/g, "");
              e.target.value = e.target.value.replace(/(\d{2}(?=\d))/g, "$1/");
              handleInputChange(e);
            }}
            onFocus={handleInputFocus}
          />
          <label className="mx-2 px-1" htmlFor="expiry-input">
            Fecha de expiración
          </label>
        </div>

        <div className="text-input d-flex flex-column-reverse">
          <input
            className="p-2"
            id="cvc-input"
            type="password"
            name="cvc"
            placeholder="034"
            minLength="3"
            maxLength="3"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              handleInputChange(e);
            }}
            onFocus={handleInputFocus}
          />
          <label className="mx-2 px-1" htmlFor="cvc-input">
            CVV
          </label>
        </div>
        <GeneralButton
          buttonText={"Pagar"}
          buttonColorClass={" btn btn-success text-white my-4 fs-5  btn-block"}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
