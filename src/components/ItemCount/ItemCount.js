import React, { useState } from 'react';
import image from '../../assets/images/image.jpg';

import { BsPlusLg, BsDashLg } from 'react-icons/bs'

import './ItemCount.styles.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(Math.min(stock, initial));

  const handleIncrementCount = () => {
    if(count < stock) return setCount(count + 1);
  }

  const handleDecrementCount = () => {
    if(count > initial) return setCount(count - 1);
  }

  return (
    <div className='item'>
      <div className='item__image-container'>
        <img src={image} alt="Cloth Image" className='item__image' />
      </div>
      
      <h2 className='item__name'>Campera Negra</h2>

      <div className='item__info'>
        <span className='item__info-price'>Precio: <b>$1200</b></span>
        <span className='item__info-stock'>Stock: <b>{stock}</b></span>
      </div>

      <div className='item__counter'>
        <span className='item__counter-dec' onClick={handleDecrementCount}><BsDashLg /></span>
        <span className='item__counter-count'><b>{count}</b></span>
        <span className='item__counter-inc' onClick={handleIncrementCount}><BsPlusLg /></span>
      </div>

      <button className='item__button' onClick={() => {
        setCount(initial)
        onAdd(count, stock)        
      }}>
        <b>Agregar al Carrito</b>
      </button>
    </div>
  )
}

export default ItemCount;