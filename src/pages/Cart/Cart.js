import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../store/CartContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.styles.css";

const Cart = () => {
  const { cartList, clearCart, totalPrice } = useCartContext();

  return (
    <Fragment>
      <div className="cart">
        {cartList.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        {cartList.length ? (
          <div className="cart-footer">
            <span className="cart-footer__total">Total: ${totalPrice()}</span>
            <button className="cart-footer__clear" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <button className="btn-util">
              <Link to={"/checkout"}>Finalizar Compra</Link>
            </button>
          </div>
        ) : (
          <div className="cart-empty-container">
            <div className="cart-empty">
              <h2 className="cart-empty__message">El carrito esta vacío</h2>
              <button className="btn-util">
                <Link to={"/"}>Volver al Inicio</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
