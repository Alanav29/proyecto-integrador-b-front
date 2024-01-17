import EmptyCartImg from "../../assets/img/general/cart.gif";

const EmptyCart = () => {
  return (
    <div className="text-center fs-2 mb-5 text-black-50 ">
      <img className="w-100 text-center " src={EmptyCartImg} alt="" />
      <div className="mb-5">Tú carrito se encuentra vacío.</div>
    </div>
  );
};

export default EmptyCart;
