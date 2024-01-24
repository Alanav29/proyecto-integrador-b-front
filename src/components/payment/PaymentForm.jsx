import { useState } from "react";
import "@snowpak/react-credit-cards/es/styles-compiled.css";
import Cards from "@snowpak/react-credit-cards";
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
    <div id="PaymentForm">
      <Cards
        cvc={cardInfo.cvc}
        expiry={cardInfo.expiry}
        focused={cardInfo.focus}
        name={cardInfo.name}
        number={cardInfo.number}
        placeholders={{
          name: "TITULAR DE LA TARJETA",
          number: "NUMERO DE TARJETA",
        }}
      />
      <form className="d-flex flex-column">
        <label htmlFor="number"> Numero de tarjeta</label>
        <input
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
        <label htmlFor="name">Titular de la tarjeta</label>
        <input
          type="text"
          name="name"
          placeholder="Gabriela Ferro"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <label htmlFor="">Fecha de expiración</label>
        <input
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
        <label htmlFor="">CVV</label>
        <input
          type="tel"
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
      </form>
    </div>
  );
};

export default PaymentForm;
