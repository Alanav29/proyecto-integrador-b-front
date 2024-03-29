import ProductListItem from "../../components/galleryAdmin/ProductListItem";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsFeature";
import "../../styles/galleryAdmin/galleryAdmin.css";
function GalleryAdmin() {
  const products = useSelector(selectProducts);

  return (
    <main className="mb-5 mt-2 d-flex justify-content-center align-items-center flex-column">
      <h1 className="mt-3 ">Catálogo de productos</h1>
      <div
        id="gallery-admin-container"
        className="d-flex flex-column justify-content-center align-items-center p-2"
      >
        {products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}

export default GalleryAdmin;
