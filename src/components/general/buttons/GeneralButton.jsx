const GeneralButton = ({ buttonText, buttonColorClass }) => {
  return (
    <button className={`btn ${buttonColorClass} mt-4 mb-3`}>
      {buttonText}
    </button>
  );
};

export default GeneralButton;
