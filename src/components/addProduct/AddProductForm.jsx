import NameInput from "../general/inputs/NameInput";
import FrameDimensionsInput from "../general/inputs/FrameDimensionsInput";
import GeneralButton from "../general/buttons/GeneralButton";
import TextInput from "../general/inputs/TextInput";
import PriceInput from "../general/inputs/PriceInput";
import { useForm } from "react-hook-form";
import addProduct from "../../utils/gallery/addProduct";

const AddProductForm = () => {
  const { handleSubmit, register, reset } = useForm();

  const postProduct = (data) => {
    addProduct(data);
    reset();
  };

  return (
    <>
      <h1 className="mb-3">Agregar Producto</h1>
      <form
        className="w-auto pb-5 pb-md-0"
        onSubmit={handleSubmit(postProduct)}
      >
        <NameInput
          register={register}
          placeholderText={"Destellos del desierto"}
          isRequired={true}
          labelText={"Título de la obra"}
          id={"admin-gallery-form-title"}
          nameText={"title"}
        />

        <FrameDimensionsInput
          register={register}
          placeholderText={"Alto de la obra en centímetros"}
          isRequired={true}
          labelText={"Altura"}
          id={"admin-gallery-form-height"}
          nameText={"height"}
        />
        <FrameDimensionsInput
          register={register}
          placeholderText={"Ancho de la obra en centímetros"}
          isRequired={true}
          labelText={"Anchura"}
          id={"admin-gallery-form-width"}
          nameText={"width"}
        />
        <TextInput
          register={register}
          placeholderText={"Amarillo"}
          isRequired={true}
          labelText={"Color"}
          id={"admin-gallery-form-color"}
          nameText={"color"}
        />

        <PriceInput
          register={register}
          placeholderText={"25000"}
          isRequired={true}
          labelText={"Precio"}
          id={"admin-gallery-form-price"}
          nameText={"price"}
        />

        <TextInput
          register={register}
          placeholderText={"Óleo"}
          isRequired={true}
          labelText={"Técnica"}
          id={"admin-gallery-form-technique"}
          nameText={"technique"}
        />
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
    </>
  );
};

export default AddProductForm;
