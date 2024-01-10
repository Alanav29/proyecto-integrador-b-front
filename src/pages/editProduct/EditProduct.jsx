import "../../styles/addProduct/addProduct.css";
import EditProductForm from "../../components/editProduct/EditProductForm";

const EditProduct = () => {
  return (
    <main className="d-flex pt-4 justify-content-center" id="add-product-page">
      <section
        id="add-product-form-container"
        className="p-4 bg-white mx-3 mt-auto"
      >
        <EditProductForm />
      </section>
    </main>
  );
};

export default EditProduct;
