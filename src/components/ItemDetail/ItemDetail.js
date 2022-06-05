import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../store/CartContextProvider";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { name, imageUrl, price, stock } = item;
  const [quantItems, setQuantItems] = useState(null);
  const { addItem } = useCartContext();

  const onAdd = (quantToAdd) => {
    setQuantItems(quantToAdd);
    addItem(item, quantToAdd);
  };

  return (
    <div className="item-detail">
      <div className="item-detail__img-container">
        <img src={imageUrl} className="item-detail__img" alt="name" />
      </div>

      <div className="item-detail__content-container">
        <h1 className="item-detail__content-name">{name}</h1>

        <div className="item-detail__content-info">
          <span className="item-detail__content-info-price">
            Precio: <b>${price}</b>
          </span>
          <span className="item-detail__content-info-stock">
            Stock: <b>{stock}</b>
          </span>
        </div>

        {quantItems ? (
          <button className="btn-util">
            <Link to={"/cart"}>
              <b>Finalizar Compra ({quantItems})</b>
            </Link>
          </button>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
