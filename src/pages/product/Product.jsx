import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getProduct from "../../utils/products/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../features/cartFeature";

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
        {searchInCart() === undefined ? (
          <button
            className="btn btn-warning"
            onClick={() => dispatch(addToCart(product))}
          >
            Agregar al carrito
          </button>
        ) : (
          <Link className="btn btn-success" to="/cart">
            Ver carrito
          </Link>
        )}
      </div>
    </section>
  );
};

export default Product;
