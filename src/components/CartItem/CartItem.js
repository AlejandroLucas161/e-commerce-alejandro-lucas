import { Fragment } from "react";
import { useCartContext } from "../../store/CartContextProvider";

const CartItem = ({ item }) => {
  const { name, price, imageUrl, id, quant } = item;
  const { removeItem } = useCartContext();

  return (
    <Fragment>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <h4>Cantidad: {quant}</h4>
      <h4>Precio: ${price}</h4>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </Fragment>
  );
};

export default CartItem;
