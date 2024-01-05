
import "../../styles/gallery/galleryStyle.css";
import React from 'react';
import Carrossel from "../../components/carrossel/Carrossel";
import GalleryViewHome from "../../components/homeGallery/GalleryViewHome";
// import GeneralButton from "../general/buttons/GeneralButton";

// Asegúrate de usar la ruta corrcta


const home = () => {
  return (
    <div>
      <ul>
      <main id="gallery" className="container-fluid">
      <section><Carrossel></Carrossel></section>
      <section> <GalleryViewHome></GalleryViewHome></section>
    </main>
      </ul>
    </div>
  );
};


export default home;
