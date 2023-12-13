import "../../styles/gallery/galleryProduct.css";

const GalleryProduct = ({ product: { title, img, price } }) => {
  console.log(title, img, price);
  return (
    <div>
      <article className="gallery-product d-flex flex-wrap justify-content-center mb-5">
        <div className="gallery-product-img-container">
          <img
            className="img-fluid"
            src={img}
            alt={`Imagen sobre la obra ${title}`}
          />
        </div>
        <div className="gallery-product-body">
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </article>
    </div>
  );
};

export default GalleryProduct;
