import { useState } from "react";
import AddressForm from "../../components/payment/AddressForm";
import PaymentForm from "../../components/payment/PaymentForm";
import "@snowpak/react-credit-cards/es/styles-compiled.css";
import "../../styles/payment/Payment.css";
import GeneralButton from "../../components/general/buttons/GeneralButton";

const Payment = () => {
  const [addressInfo, setAddressInfo] = useState({});

  return (
    <main className="p-4 d-flex justify-content-center ">
      <div className="d-flex payment-forms-container p-4 slide-in-elliptic-top-fwd ">
        <div className="d-flex flex-wrap w-100 justify-content-center">
          <AddressForm setAddressInfo={setAddressInfo} />
          {addressInfo.street ? <PaymentForm /> : <></>}
        </div>
      </div>
    </main>
  );
};

export default Payment;
