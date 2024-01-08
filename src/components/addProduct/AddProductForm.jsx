import NameInput from "../general/inputs/NameInput";
import FrameDimensionsInput from "../general/inputs/FrameDimensionsInput";
import GeneralButton from "../general/buttons/GeneralButton";
import TextInput from "../general/inputs/TextInput";
import PriceInput from "../general/inputs/PriceInput";
import { useForm } from "react-hook-form";
import addProduct from "../../utils/gallery/addProduct";
import { Cropper } from "react-cropper";
import { useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import { blobToURL, fromURL } from "image-resize-compress";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addChange } from "../../features/changesConter";

const AddProductForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const cropperRef = useRef();
  const [imgURL, setImgURL] = useState("");
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 1200,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "bottom-center",
    });
  };

  const postProduct = async (data) => {
    const cropper = cropperRef.current?.cropper;
    const imageCropped = cropper.getCroppedCanvas().toDataURL();
    await fromURL(imageCropped, 95, 0, 0, "jpeg").then((blob) => {
      blobToURL(blob).then(async (url) => {
        const dataWithImg = {
          title: data.title,
          width: data.width,
          height: data.height,
          color: data.color,
          price: data.price,
          technique: data.technique,
          img: url,
        };
        console.log(dataWithImg);
        notify("Estamos agregando tu producto");
        const response = await addProduct(dataWithImg);
        if (response.product) {
          notify("Producto agregado exitosamente");
          dispatch(addChange(1));
          setImgURL("  ");
          cropper.reset();
        } else {
          notifyError("Hubo un problema al agregar el producto");
        }

        reset();
      });
    });
  };

  return (
    <div>
      <h1 className="mb-3">Agregar Producto</h1>

      <form
        className="w-auto pb-5 pb-md-0"
        onSubmit={handleSubmit(postProduct)}
      >
        <div className="">
          <Cropper
            ref={cropperRef}
            scale={1}
            src={imgURL}
            cropBoxResizable={true}
            viewMode={2}
            minCropBoxHeight={50}
            background={false}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
        </div>
        <label className="form-label" htmlFor="petImgInput">
          Imagen cuadro
        </label>
        <input
          onChange={(e) => {
            let img2 = URL.createObjectURL(e.target.files[0]);
            setImgURL(img2);
          }}
          type="file"
          className="form-control mb-3"
          id="petImgInput"
          required
        />

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
      <ToastContainer limit={3} />
    </div>
  );
};

export default AddProductForm;
