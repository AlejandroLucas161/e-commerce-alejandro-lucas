import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from '../../store/cart-context';

const ItemDetail = ({ item }) => {
  const [quantItems, setQuantItems] = useState(null);
  const cartContext = useContext(CartContext);

  const onAdd = (quantToAdd) => {
    setQuantItems(quantToAdd)
    cartContext.addItem({quant: quantToAdd, ...item})
  };

  return (
    <div className='item-detail'>
      <div className='item-detail__img-container'>
        <img src={item.imageUrl} className='item-detail__img' alt='name' />
      </div>

      <div className="item-detail__content-container">
        <h1 className="item-detail__content-name">{item.name}</h1>

        <div className='item-detail__content-info'>
          <span className="item-detail__content-info-price">Precio: <b>{item.price}</b></span>
          <span className="item-detail__content-info-stock">Stock: <b>{item.stock}</b></span>
        </div>

        {quantItems ? (
          <button className="item__button">
            <Link to={'/cart'}>
              <b>Finalizar Compra ({quantItems})</b>
            </Link>
          </button>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
        )}

        <button onClick={() => console.log(cartContext.itemList)} >Imprimir carrito</button>
        <button onClick={() => cartContext.removeItem(item.id)} >Remove product</button>
        <button onClick={() => cartContext.clearCart()} >Clear</button>
        <button onClick={() => console.log(cartContext.isInCart(item.id))} >Is in cart</button>
      </div>
    </div>
  )
}

export default ItemDetail;