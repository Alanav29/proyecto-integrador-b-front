import addProduct from "../../utils/gallery/addProduct";
import productArray from "../../utils/gallery/prueba";
import { useState } from "react";
import Product from "../../utils/gallery/productClass";
import ProductListItem from "../../components/galleryAdmin/ProductListItem";
import cuadroImg from "../../assets/img/general/cuadro1Gaby.jpg";

const Gallery = () => {
  const [product, setProduct] = useState(
    new Product({
      title: "Destellos del desierto",
      width: 150,
      height: 170,
      color: "yellow",
      price: "$25,000",
      technique: "acrylic on canvas",
    })
  );
  return (
    <>
      <ProductListItem
        title={product.title}
        img={cuadroImg}
        price={product.price}
        quantity={1}
      />
      <ProductListItem
        title={product.title}
        img={cuadroImg}
        price={product.price}
        quantity={1}
      />

      <button
        onClick={() => {
          addProduct(product, productArray);
          console.log(productArray);
        }}
      >
        Gallery
      </button>
    </>
  );
};

export default Gallery;
