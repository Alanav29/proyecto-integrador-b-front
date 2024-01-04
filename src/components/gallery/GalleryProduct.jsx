import "../../styles/gallery/galleryProduct.css";
import { Link } from "react-router-dom";

const GalleryProduct = ({ product: { title, img, _id } }) => {
  return (
    <article className="product-container">
      <div className="card">
        <img src={img.secure_url} className="card-img" alt="..." />
        <div className="card-img-overlay m-0 p-0 d-flex align-items-end">
          <div className="gallery-product-card-body pb-4">
            <h4 className="text-white">{title}</h4>

            <button className="gallery-product-btn">
              Detalles
              <Link
                className="gallery-product-arrow-btn text-decoration-none"
                to={`/product/${_id}`}
              >
                <i className="bi bi-arrow-right-short text-dark fs-3"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GalleryProduct;
