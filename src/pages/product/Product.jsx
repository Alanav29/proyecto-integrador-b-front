import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getProduct from "../../utils/products/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../features/cartFeature";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/addProduct/addProductDetails.css";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({ img: "" });
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const productRequest = async () => {
    const data = await getProduct(productId);
    data.title ? setProduct(data) : setProduct({ title: "No disponible" });
  };

  const searchInCart = () => {
    console.log(cart);
    const res = cart.find((product) => product.id === parseInt(productId));
    console.log(res);
    return res;
  };

  const notify = (product) => {
    toast.success(`Agregando ${product.title} al carrito `, {
      position: "top-center",
      autoClose: 50,
    });
  };

  useEffect(() => {
    productRequest();
  }, []);

  return (
    <section className="my-5 justify-content-center container-fluid d-flex flex-column flex-md-row">
      <div className="container-padre m-0">
        <div className="img-container fade-in col-12 col-md-6">
          <img
            src={product.img}
            alt={`Fotografia del cuadro que lleva por nombre ${product.title}`}
          />
        </div>
        <div className="text-container col-12 col-md-6 ">
          <h1>{product.title}</h1>

          <p>Técnica: {product.technique}</p>
          <p>
            Medidas: {product.height} x {product.width} cm
          </p>

          <strong> ${product.price}.00MXN</strong>
          <br />
          <br />
          {searchInCart() === undefined ? (
            <button
              className="btn btn-dark my-3 fs-5 fade-in"
              onClick={() => {
                dispatch(addToCart(product));
                notify(product);
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <Link className="btn btn-success my-3 fs-5" to="/cart">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
