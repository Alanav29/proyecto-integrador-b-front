import TextInput from "../../components/general/inputs/TextInput";
import { useForm } from "react-hook-form";
import PriceInput from "../general/inputs/PriceInput";
import GeneralButton from "../general/buttons/GeneralButton";
import PhoneInput from "../general/inputs/PhoneInput";

const AddressForm = ({ setAddressInfo }) => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    setAddressInfo(data);
    console.log(data);
  };

  return (
    <div className="my-2 me-auto" id="address-form">
      <h1>Datos de envío</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholderText={"Calle, numero, colonia, delegación"}
          labelText={"Dirección "}
          id={"street-input"}
          isRequired={true}
          nameText={"street"}
          register={register}
        />
        <PriceInput
          placeholderText={"14390"}
          labelText={"Código postal"}
          id={"zipcode-input"}
          isRequired={true}
          nameText={"zipcode"}
          register={register}
        />
        <TextInput
          placeholderText={"Selecciona un estado"}
          labelText={"Estado"}
          id={"state-input"}
          isRequired={true}
          nameText={"state"}
          register={register}
        />
        <PhoneInput
          placeholderText={"Agrega tu número telefónico"}
          labelText={"Teléfono"}
          id={"phone-input"}
          isRequired={true}
          nameText={"phoneNumber"}
          register={register}
        />
        <GeneralButton
          buttonText={"Guardar"}
          buttonColorClass={
            " btn btn-dark text-white my-4 fs-5 btn-block w-100"
          }
        />
      </form>
    </div>
  );
};

export default AddressForm;
