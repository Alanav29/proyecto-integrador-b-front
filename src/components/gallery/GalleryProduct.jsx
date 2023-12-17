import "../../styles/gallery/galleryProduct.css";

const GalleryProduct = ({ product: { title, img, price } }) => {
  return (
    <article className="product-container mb-3">
      <div className="card">
        <img src={img} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <div className="gallery-product-card-body">
            <h5 className="card-title fs-3">{title}</h5>
            <button className="btn btn-light gallery-product-btn">
              Más información
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GalleryProduct;
