import { Link } from "react-router-dom";

const ToRegisterButton = ({ buttonTextp1, buttonTextp2, buttonColorClass }) => {
  return (
    <Link className="text-decoration-none" to="/signUp">
      <button className={`btn ${buttonColorClass} mt-4 mb-3`}>
        {buttonTextp1}
        <br></br>
        {buttonTextp2}
      </button>
    </Link>
  );
};

export default ToRegisterButton;
