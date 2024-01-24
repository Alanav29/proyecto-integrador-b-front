import { useState } from "react";
import AddressForm from "../../components/payment/AddressForm";
import PaymentForm from "../../components/payment/PaymentForm";

const Payment = () => {
  const [addressInfo, setAddressInfo] = useState({});

  return (
    <div className="d-flex justify-content-center">
      <PaymentForm />
      <AddressForm setAddressInfo={setAddressInfo} />
    </div>
  );
};

export default Payment;
