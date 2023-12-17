import "../../styles/gallery/galleryProduct.css";

const GalleryProduct = ({ product: { title, img, price } }) => {
  return (
    <div className="gallery-product p-2">
      <div className="gallery-product-img-container">
        <img
          className="img-fluid"
          src={img}
          alt={`Imagen sobre la obra ${title}`}
        />
      </div>
      <div className="gallery-product-body">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default GalleryProduct;
