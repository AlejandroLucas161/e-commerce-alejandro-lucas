import { useCartContext } from "../../store/CartContextProvider";
import "./CartItem.style.css";

const CartItem = ({ item }) => {
  const { name, price, imageUrl, id, quant } = item;
  const { removeItem } = useCartContext();

  return (
    <div className="cart-item">
      <h1 className="cart-item__name">{name}</h1>
      <div className="cart-item__content">
        <div className="cart-item__image-container">
          <img className="cart-item__image" src={imageUrl} alt={name} />
        </div>

        <div className="cart-item__info">
          <span className="cart-item__info-quant">Cantidad: {quant}</span>
          <span className="cart-item__info-price">Precio U: ${price}</span>
          <span className="cart-item__info-total">Total: ${price * quant}</span>
          <button
            className="cart-item__info-button"
            onClick={() => removeItem(id)}
          >
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
