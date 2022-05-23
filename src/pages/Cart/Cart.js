import { Fragment } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../store/CartContextProvider";

const Cart = () => {
  const { cartList, clearCart, totalPrice } = useCartContext();

  return (
    <div>
      {cartList.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
      {cartList.length ? (
        <Fragment>
          <h2>${totalPrice()}</h2>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button>
            <Link to={"/checkout"}>Finalizar Compra</Link>
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <h2>El carrito esta vacio</h2>
          <button>
            <Link to={"/"}>Agrega algo</Link>
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
