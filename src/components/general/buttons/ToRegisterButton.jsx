const ToRegisterButton = ({ buttonTextp1, buttonTextp2,  buttonColorClass }) => {
    return (
      <button className={`btn ${buttonColorClass} mt-4 mb-3`}>
        {buttonTextp1}
        <br></br>
        {buttonTextp2}
      </button>
    );
  };
  
  export default ToRegisterButton;