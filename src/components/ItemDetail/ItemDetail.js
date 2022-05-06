import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item: { name, price, imageUrl, stock } }) => {
  const [quantItems, setQuantItems] = useState(null);

  const onAdd = (quantToAdd) => setQuantItems(quantToAdd);

  return (
    <div className='item-detail'>
      <div className='item-detail__img-container'>
        <img src={imageUrl} className='item-detail__img' />
      </div>

      <div className="item-detail__content-container">
        <h1 className="item-detail__content-name">{name}</h1>

        <div className='item-detail__content-info'>
          <span className="item-detail__content-info-price">Precio: <b>{price}</b></span>
          <span className="item-detail__content-info-stock">Stock: <b>{stock}</b></span>
        </div>

        {quantItems ? (
          <button className="item__button">
            <Link to={'/cart'}>
              <b>Finalizar Compra ({quantItems})</b>
            </Link>
          </button>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  )
}

export default ItemDetail;