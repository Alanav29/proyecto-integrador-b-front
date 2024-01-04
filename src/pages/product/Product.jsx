import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../utils/products/getProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartFeature";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({ img: { secure_url: "" } });
  const dispatch = useDispatch();

  const productRequest = async () => {
    const data = await getProduct(productId);
    data.title ? setProduct(data) : setProduct({ title: "No disponible" });
    console.log(data);
  };

  useEffect(() => {
    productRequest();
  }, []);

  return (
    <section className="container-fluid d-flex">
      <div>
        <img
          src={product.img.secure_url}
          alt={`Fotografia del cuadro que lleva por nombre ${product.title}`}
        />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.technique}</p>
        <p>{product.price}</p>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(addToCart(product))}
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  );
};

export default Product;
