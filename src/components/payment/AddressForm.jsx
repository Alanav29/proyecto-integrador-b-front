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
    <div className=" m-4" id="address-form">
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

        <div className="d-flex flex-column-reverse state-select">
          <select id="estados" name="estados" className="p-2" required={true}>
            <option value="" disabled selected >
              Selecciona un estado
            </option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="edomex">Estado de México</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </select>
          <label className="mx-2 px-1" for="estados">
           Estado:
          </label>
        </div>

        <PhoneInput
          placeholderText={"Agrega tu número telefónico"}
          labelText={"Teléfono"}
          id={"phone-input"}
          isRequired={true}
          nameText={"phoneNumber"}
          register={register}
        />
        <GeneralButton
          buttonText={"Continuar"}
          buttonColorClass={
            " btn btn-dark text-white my-4 fs-5 btn-block w-100"
          }
        />
      </form>
    </div>
  );
};

export default AddressForm;
