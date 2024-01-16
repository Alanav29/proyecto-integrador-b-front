import { useDispatch } from "react-redux";
import "../../styles/cart/cartItem.css";
import { removeCartItem } from "../../features/cartFeature";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
    const aviso = "Productos agregados al carrito";
  const delItem = () => {
    dispatch(removeCartItem(product._id));
  };
  const formattedPrice = product.price.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    decimalSeparator: ".",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    
    <div className="d-flex cart-item my-2 scale-up-vertical-center">
      <div className="cart-item-img ">
        
        <img
          src={product.img.secure_url}
          className=""
          alt={`Fotografía del cuadro con nombre ${product.title}`}
        />
      </div>
      <div className="d-flex flex-wrap flex-row mx-3 py-2 align-items-center justify-content-between cart-item-body">
        <div className="fs-5 overflow-hidden">
          <p className="fw-bold mb-1">{product.title}</p>
          <p className="fs-6 mb-0">
            {product.width}X{product.height}
          </p>
        </div>

        <p className="fs-5 fw-semibold me-4 text-black-50 mb-0 ">
          {`${formattedPrice}`}
        </p>
      </div>
      <button onClick={delItem} className="fs-5 mx-3 my-auto delete-item-btn">
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};

export default CartItem;
