import NameInput from "../general/inputs/NameInput";
import FrameDimensionsInput from "../general/inputs/FrameDimensionsInput";
import GeneralButton from "../general/buttons/GeneralButton";
import { useForm } from "react-hook-form";

const AddProductForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {
    console.log("algo");
  };

  return (
    <>
      <h1 className="mb-3">Agregar elemento</h1>
      <form className="w-auto pb-5 pb-md-0" onSubmit={handleSubmit(onSubmit)}>
        <NameInput
          register={register}
          placeholderText={"Destellos del desierto"}
          isRequired={true}
          labelText={"Título de la obra"}
          id={"admin-gallery-form-title"}
          nameText={"admin-gallery-form-title"}
        />

        <FrameDimensionsInput
          register={register}
          placeholderText={"Alto de la obra en centímetros"}
          isRequired={true}
          labelText={"Altura"}
          id={"admin-gallery-form-height"}
          nameText={"admin-gallery-form-height"}
        />
        <FrameDimensionsInput
          register={register}
          placeholderText={"Ancho de la obra en centímetros"}
          isRequired={true}
          labelText={"Anchura"}
          id={"admin-gallery-form-width"}
          nameText={"admin-gallery-form-width"}
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
