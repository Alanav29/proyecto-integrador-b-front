import { useState } from "react";
// import Product from "../../utils/gallery/productClass";
import cuadroImg from "../../assets/img/general/cuadro1Gaby.jpg";
import ProductListItem from "../../components/galleryAdmin/ProductListItem";

const Gallery = () => {
  // const [product, setProduct] = useState(
  //   new Product({
  //     title: "Destellos del desierto",
  //     width: 150,
  //     height: 170,
  //     color: "yellow",
  //     price: "$25,000",
  //     technique: "acrylic on canvas",
  //   })
  // );
  return (
    <>
      {/* <ProductListItem
        title={product.title}
        img={cuadroImg}
        price={product.price}
        quantity={1}
      /> */}
      <button
        onClick={() => {
          console.log("boton");
        }}
      >
        Gallery
      </button>
    </>
  );
};

export default Gallery;
