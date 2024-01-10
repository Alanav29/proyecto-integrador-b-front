import "../../styles/gallery/galleryStyle.css";
import GalleryProduct from "../gallery/GalleryProduct";
import { selectProducts } from "../../features/productsFeature";
import React from "react";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GeneralButton from "../general/buttons/GeneralButton";
import { Link } from "react-router-dom";

// Asegúrate de usar la ruta corrcta

const GalleryViewHome = () => {
  // Usamos el selector selectProducts para acceder al estado de los productos
  const products = useSelector(selectProducts);
  // Número de imágenes que quieres mostrar en la página de inicio
  const numberOfImagesToShow = 8; // Cambia este valor según tu preferencia

  // Usar slice para mostrar solo un número específico de imágenes
  const limitedProducts = products.slice(0, numberOfImagesToShow);
  return (
    <>

      <div id="gallery" className="container-fluid">
        <h1 className="mx-3 fs-2 text-center">Movimiento, Expresion y Arte:<br />Aquí encontrarás una colección diversa y vibrante de obras de arte del artista Alfonso Ferro.</h1>
        <section className="mx-2 mx-sm-4">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 425: 1, 450: 2, 740: 3, 1024: 4 }}
          >
            <Masonry>
              {limitedProducts.map((product) => {
                return <GalleryProduct product={product} key={product._id} />;
              })}
            </Masonry>
          </ResponsiveMasonry>
          <section style={{ textAlign: "center" }}>
            <Link to={"/gallery"}>
              <GeneralButton
                buttonText={"Sigue viendo"}
                buttonColorClass={"bg-black text-white"}
              />
            </Link>
          </section>
        </section>
      </div>
    </>
  );
};

export default GalleryViewHome;
