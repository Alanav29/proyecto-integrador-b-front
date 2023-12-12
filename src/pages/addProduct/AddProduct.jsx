import AddProductForm from "../../components/addProduct/AddProductForm";
import "../../styles/addProduct/addProduct.css";

const AddProduct = () => {
  return (
    <main className="d-flex pt-4 justify-content-center" id="add-product-page">
      <section
        id="add-product-form-container"
        className="p-4 bg-white mx-3 mt-auto"
      >
        <AddProductForm />
      </section>
    </main>
  );
};

export default AddProduct;
