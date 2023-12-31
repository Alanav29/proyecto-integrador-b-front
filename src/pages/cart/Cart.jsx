import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartFeature";
import { useEffect, useState } from "react";
import CartItem from "../../components/cart/CartItem";
import "../../styles/cart/cart.css";

const Cart = () => {
  const cart = useSelector(selectCart);
  const [cartItems, setCartItems] = useState("Tu carrito se encuentra vacío");

  const createCartCards = (items) => {
    const itemCards = items.map((item) => (
      <CartItem product={item} key={item._id} />
    ));
    return itemCards;
  };

  useEffect(() => {
    if (cart.length > 0) {
      setCartItems(createCartCards(cart));
    }
  }, [cart]);

  return (
    <main className="d-flex justify-content-center">
      <div
        id="cart-items-container"
        className="d-flex flex-column justify-content-center align-items-center p-2"
      >
        {cartItems}
      </div>
    </main>
  );
};

export default Cart;
