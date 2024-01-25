import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartFeature";
import { useEffect, useState } from "react";
import CartItem from "../../components/cart/CartItem";
import "../../styles/cart/cart.css";
import EmptyCart from "../../components/cart/EmptyCart";
import ToPaymentButton from "../../components/general/buttons/ToPaymentButton";

const Cart = () => {
  const cart = useSelector(selectCart);
  const [cartItems, setCartItems] = useState(<EmptyCart />);
  const [totalPrice, setTotalPrice] = useState(0);

  const createCartCards = (items) => {
    const itemCards = items.map((item) => (
      <CartItem product={item} key={item.id} />
    ));
    return itemCards;
  };

  const calculateTotalPrice = (cart) => {
    let pricesSum = 0;
    for (let i = 0; i < cart.length; i++) {
      pricesSum += cart[i].price;
    }
    setTotalPrice(pricesSum);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setCartItems(createCartCards(cart));
      console.log(cart);
      calculateTotalPrice(cart);
    } else {
      setCartItems(<EmptyCart />);
    }
  }, [cart]);

  const formattedTotalPrice = totalPrice.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    decimalSeparator: ".",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <main className="d-flex justify-content-center align-items-center flex-column align-items-center flex-column">
      <div
        id="cart-items-container"
        className="d-flex flex-column justify-content-center align-items-center p-2"
      >
        {cartItems}
      </div>
      {cart.length > 0 ? (
        <>
          <div className="total-container d-flex justify-content-center mx-0 mt-3 tracking-in-contract">
            Total: {formattedTotalPrice}MXN
          </div>
          <ToPaymentButton
            buttonTextp1={`Agregar datos de envío`}
            buttonColorClass={" btn btn-dark text-white my-2 btn-block p-2"}
          />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Cart;
