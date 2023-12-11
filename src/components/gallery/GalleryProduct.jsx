import "../../styles/gallery/galleryProduct.css";

const GalleryProduct = ({product:{title, img, price}}) => {
  return (
    <div>
      <article className="gallery-product d-flex flex-wrap justify-content-center mb-5" >
        <img className="img-fluid" src={img} alt={`Imagen sobre la obra ${title}`} />
        <div className="gallery-product-body">
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </article>
    </div>
  )
}

export default GalleryProduct;