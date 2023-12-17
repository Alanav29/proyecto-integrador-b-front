import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsFeature";

const Gallery = () => {
  const products = useSelector(selectProducts);

  return (
    <main id="gallery" className="container mt-4">
      <h1>Galería</h1>
      <section className="gallery-products-container mx-auto">
        {products.map((product) => {
          return <GalleryProduct product={product} key={product._id} />;
        })}
      </section>
    </main>
  );
};

export default Gallery;
