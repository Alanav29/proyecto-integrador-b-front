import "../../../styles/general/inputs/TextInput.css";

const TextInput = ({ placeholderText, labelText, id, isRequired }) => {
  return (
    <div className="text-input d-flex flex-column-reverse">
      <input
        type="text"
        placeholder={placeholderText}
        name={id}
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

export default TextInput;
