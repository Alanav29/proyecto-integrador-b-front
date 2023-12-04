const GeneralButton = ({ buttonText, buttonColorClass }) => {
  return (
    <button className={`btn ${buttonColorClass} my-4`}>{buttonText}</button>
  );
};

export default GeneralButton;
