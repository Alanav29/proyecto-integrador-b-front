import addProduct from "../../utils/gallery/addProduct";
import productArray from "../../utils/gallery/prueba";
import { useState } from "react";
import Product from "../../utils/gallery/product-class";

const Gallery = () => {
    const [product, setProduct] = useState(new Product({
        "title": 'Destellos del desierto',
        "width": 150,
        "height": 170,
        "color": "yellow",
        "price": "$25,000",
        "technique": "acrylic on canvas"
    }));
  return (
    <button onClick={() => { addProduct(product,productArray)
    console.log(productArray);
    }}>
        Gallery
    </button>
  )
}

export default Gallery