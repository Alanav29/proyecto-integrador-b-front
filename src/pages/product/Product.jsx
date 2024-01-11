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
  const [product, setProduct] = useState({ img: { secure_url: "" } });
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const productRequest = async () => {
    const data = await getProduct(productId);
    data.title ? setProduct(data) : setProduct({ title: "No disponible" });
  };

  const searchInCart = () => {
    const res = cart.find((product) => product._id === productId);
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
    <section className="container-fluid d-flex flex-column flex-md-row">
      <div className="container-padre">
        <div className="img-container fade-in col-12 col-md-6">
          <img
            src={product.img.secure_url}
            alt={`Fotografia del cuadro que lleva por nombre ${product.title}`}
          />
        </div>
        <div className="text-container col-12 col-md-6">
          <h1>{product.title}</h1>
          <ul>
            <li>
              <p>Técnica: {product.technique}</p>
            </li>
            <li>
              <p>
                Medidas: {product.height} x {product.width} cm
              </p>
            </li>
          </ul>
          <strong> ${product.price}.00MXN</strong>
          <br />
          <br />
          {searchInCart() === undefined ? (
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(addToCart(product));
                notify(product);
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <Link className="btn btn-success" to="/cart">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
