import { useState } from "react";
import Product from "../../utils/gallery/productClass";
import GalleryProduct from "../../components/gallery/GalleryProduct";
import productImg from "../../assets/img/general/cuadro1Gaby.jpg"

const Gallery = () => {
  const [product, setProduct] = useState({
    title: "Destellos del desierto",
    width: 150,
    height: 170,
    color: "yellow",
    price: "$25,000",
    technique: "acrylic on canvas",
    img: productImg,
  })
    
  return (
    <GalleryProduct product={product} />
  );
};

export default Gallery;