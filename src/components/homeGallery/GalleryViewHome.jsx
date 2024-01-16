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
        <h1 className="mx-3 fs-2 text-center mb-5" style={{ lineHeight: '1.5' }}><em>Movimiento, Expresion y Arte</em><br />
        Aquí encontrarás una colección diversa y vibrante de obras de arte del artista <em>Alfonso Ferro</em>.</h1>
      <section className="mx-2 mx-sm-4" style={{ color: "black" }}>
        <div className="container">
          <h1 className="display-6 text-center"><em>Movimiento, Expresion y Arte</em></h1>
        </div>
      </section>
        <h5 className="font-weight-bold"><br/>Aquí encontrarás una colección diversa y vibrante de obras de arte del artista Alfonso Ferro.</h5><br/>
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
          {/* Elemento para el efecto de difuminado */}
          <div className="gallery-fade"></div>
        </section>
      </div>
      <section style={{ textAlign: "center" }}>
        <Link to={"/gallery"}>
          <GeneralButton
            buttonText={"Seguir viendo"}
            buttonColorClass={"btn btn-dark my-4 fs-5 scale-up-center"}
          />
        </Link>
      </section>
      <br />
      <br />
    </>
  );
};

export default GalleryViewHome;
