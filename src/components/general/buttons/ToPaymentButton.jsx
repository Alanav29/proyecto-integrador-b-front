import { Link } from "react-router-dom";

const ToPaymentButton = ({ buttonTextp1, buttonTextp2, buttonColorClass }) => {
  return (
    <Link className="text-decoration-none" to="/payment">
      <button className={`btn ${buttonColorClass} mt-4 mb-3`}>
        {buttonTextp1}
      </button>
    </Link>
  );
};

export default ToPaymentButton;
