import { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

import "./ItemCount.styles.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(Math.min(stock, initial));

  const handleAddToCart = () => {
    onAdd(count);
    setCount(Math.min(stock, initial));
  };

  const handleIncrementCount = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrementCount = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className="item__counter-container">
      <div className="item__counter">
        <span className="item__counter-dec" onClick={handleDecrementCount}>
          <BsDashLg />
        </span>
        <span className="item__counter-count">
          <b>{count}</b>
        </span>
        <span className="item__counter-inc" onClick={handleIncrementCount}>
          <BsPlusLg />
        </span>
      </div>

      <button className="btn-util item__button" onClick={handleAddToCart}>
        <b>Agregar al Carrito</b>
      </button>
    </div>
  );
};

export default ItemCount;
