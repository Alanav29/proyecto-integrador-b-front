import "../../../styles/general/inputs/TextInput.css";

const PhoneInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
}) => {
  return (
    <div className="text-input d-flex flex-column-reverse">
      <input
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        maxLength={"11"}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default PhoneInput;
