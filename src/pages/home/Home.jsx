
import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import { selectProducts } from "../../features/productsFeature";
import React from 'react';
import { useSelector } from 'react-redux';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Carrossel from "../../components/carrossel/Carrossel";

// Asegúrate de usar la ruta corrcta


const GalleryViewHome = () => {
  // Usamos el selector selectProducts para acceder al estado de los productos
  const products = useSelector(selectProducts);

  return (
    <div>
      <ul>
      <main id="gallery" className="container-fluid">
      <h1 className="mx-3 fs-2">Movimiento, Expresion y Arte</h1>
      <section><Carrossel></Carrossel></section>
      <section className="mx-2 mx-sm-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 425: 1, 450: 2, 740: 3, 1024: 4 }}
        >
          <Masonry>
            {products.map((product) => {
              return <GalleryProduct product={product} key={product._id} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </main>
      </ul>
    </div>
  );
};

export default GalleryViewHome;