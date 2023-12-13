import { useEffect, useState } from "react";
import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import { apiProductsUrl } from "../../utils/apiRoutes/apiRouterIndex";

const Gallery = () => {
  const [productsArray, setProductsArray] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(apiProductsUrl);
        const data = await response.json();
        setProductsArray(data);
      } catch (error) {
        console.error("Hubo un problema al obtener los productos: ", error);
      }
    };
    getProducts();
  }, []);

  return (
    <main id="gallery" className="container-fluid">
      <section className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {productsArray.map((product) => {
          return <GalleryProduct product={product} key={product._id} />;
        })}
      </section>
    </main>
  );
};

export default Gallery;
