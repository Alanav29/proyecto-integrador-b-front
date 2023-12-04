import "../../../styles/general/inputs/TextAreaInput.css";

const TextAreaInput = ({
  id,
  placeholderText,
  isRequired,
  labelText,
  nameText,
}) => {
  return (
    <div className="text-area-input d-flex flex-column-reverse">
      <textarea
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default TextAreaInput;
