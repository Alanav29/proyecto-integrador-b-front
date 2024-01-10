import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsFeature";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React, { useState, useEffect } from 'react';

const Gallery = () => {

  const content = "¡Bienvenido a la Galería de Arte! Sumérgete en la belleza del arte y encuentra la pieza perfecta que hable a tu corazón. ¡Disfruta explorando!";

  const [message, setShowMessage] = useState(content);
  const products = useSelector(selectProducts);
  const [fadeOut, setFadeOut] = useState(false);

  // Mostrar el mensaje durante 5 segundos cuando se renderiza el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowMessage(null);
        setFadeOut(false);
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return (
    <main id="gallery" className="container-fluid">
      <h1 className="mx-3 fs-2">Galería</h1>
      {message && <div className={`alert alert-warning text-center ${fadeOut ? 'fade-out' : ''}`} role="alert">{message}</div>}
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
  );
};

export default Gallery;
