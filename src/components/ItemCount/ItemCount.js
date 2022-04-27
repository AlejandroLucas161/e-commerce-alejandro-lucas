import { Fragment, useState } from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs'

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(Math.min(stock, initial));

  const handleAddCart = () => {
    setCount(Math.min(stock, initial));
    onAdd(count, stock);  
  }

  const handleIncrementCount = () => {
    if(count < stock) setCount(count + 1);
  }

  const handleDecrementCount = () => {
    if(count > initial) setCount(count - 1);
  }

  return (
    <Fragment>
      <div className='item__counter'>
        <span className='item__counter-dec' onClick={handleDecrementCount}><BsDashLg /></span>
        <span className='item__counter-count'><b>{count}</b></span>
        <span className='item__counter-inc' onClick={handleIncrementCount}><BsPlusLg /></span>
      </div>

      <button className='item__button' onClick={handleAddCart}>
        <b>Agregar al Carrito</b>
      </button>
    </Fragment>
  )
}

export default ItemCount;