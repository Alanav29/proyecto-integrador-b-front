import NameInput from "../general/inputs/NameInput";
import FrameDimensionsInput from "../general/inputs/FrameDimensionsInput";
import GeneralButton from "../general/buttons/GeneralButton";
import TextInput from "../general/inputs/TextInput";
import PriceInput from "../general/inputs/PriceInput";
import { useForm } from "react-hook-form";
import { Cropper } from "react-cropper";
import { useEffect, useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import { blobToURL, fromURL } from "image-resize-compress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addChange } from "../../features/changesConter";
import { useParams } from "react-router";
import getProduct from "../../utils/gallery/getProduct";
import updateProduct from "../../utils/gallery/updateProduct";

const EditProductForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const cropperRef = useRef();
  const [imgURL, setImgURL] = useState();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const getProductInfo = async () => {
    const data = await getProduct(productId);
    if (data.id) {
      setProduct(data);
      setImgURL(data.img);
    } else {
      console.log("Error getting product");
    }
  };

  useEffect(() => {
    getProductInfo(productId);
  }, []);

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
        let dataWithImg;
        if (imgURL === product.img) {
          dataWithImg = {
            title: data.title,
            width: data.width,
            height: data.height,
            color: data.color,
            price: data.price,
            technique: data.technique,
            img: "",
          };
        } else {
          dataWithImg = {
            title: data.title,
            width: data.width,
            height: data.height,
            color: data.color,
            price: data.price,
            technique: data.technique,
            img: url,
          };
        }

        console.log(dataWithImg);
        notify("Estamos agregando tu producto");

        const response = await updateProduct(productId, dataWithImg);
        console.log(response);
        if (response.id) {
          notify("Producto actualizado exitosamente");
          dispatch(addChange(1));
          setImgURL("  ");
          cropper.reset();
        } else {
          notifyError("Hubo un problema al actualizar el producto");
        }
        reset();
      });
    });
  };

  return (
    <div>
      <h1 className="mb-3">Editar Producto</h1>

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
        />

        <NameInput
          register={register}
          placeholderText={product.title}
          isRequired={false}
          labelText={"Título de la obra"}
          id={"admin-gallery-form-title"}
          nameText={"title"}
        />

        <FrameDimensionsInput
          register={register}
          placeholderText={product.height}
          isRequired={false}
          labelText={"Altura"}
          id={"admin-gallery-form-height"}
          nameText={"height"}
        />
        <FrameDimensionsInput
          register={register}
          placeholderText={product.width}
          isRequired={false}
          labelText={"Anchura"}
          id={"admin-gallery-form-width"}
          nameText={"width"}
        />
        <TextInput
          register={register}
          placeholderText={product.color}
          isRequired={false}
          labelText={"Color"}
          id={"admin-gallery-form-color"}
          nameText={"color"}
        />

        <PriceInput
          register={register}
          placeholderText={product.price}
          isRequired={false}
          labelText={"Precio"}
          id={"admin-gallery-form-price"}
          nameText={"price"}
        />

        <TextInput
          register={register}
          placeholderText={product.technique}
          isRequired={false}
          labelText={"Técnica"}
          id={"admin-gallery-form-technique"}
          nameText={"technique"}
        />
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
    </div>
  );
};

export default EditProductForm;
