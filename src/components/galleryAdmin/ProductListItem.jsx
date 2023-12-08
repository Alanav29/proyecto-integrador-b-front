import "../../styles/galleryAdmin/galleryAdmin.css";
import { Link } from "react-router-dom";

const ProductListItem = ({ img, title, price, quantity }) => {
  const deleteProduct = () => console.log("product deleted");

  return (
    <article className="d-flex admin-item-container m-2">
      <div className="admin-item-section d-flex">
        <div className="product-img">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="product-description mx-4 my-1 d-flex align-items-center">
          {title}
        </div>
        <div className="mx-4 my-1 d-flex align-items-center">{quantity}</div>
        <div className="mx-4 my-1 d-flex align-items-center">
          <Link
            to={"/"}
            className="bi bi-pencil-square p-0 edit-icon bg-border-none"
          ></Link>
        </div>
        <div className="mx-4 my-1 d-flex align-items-center">
          <button
            onClick={deleteProduct}
            className="bi bi-trash-fill p-0 delete-icon bg-border-none"
          ></button>
        </div>
      </div>
      <div className="admin-item-section d-flex ms-3">
        <div className="mx-4 my-1 d-flex align-items-center">
          <i className="bi bi-currency-dollar me-3"></i>
          <p className="m-0">{price}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductListItem;
