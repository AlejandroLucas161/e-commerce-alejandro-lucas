import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemListContainer.styles.css'

const ItemListContainer = ({ greeting }) => {

  const onAdd = (count, stock) => {
    if(stock === 0) return alert(`No tenemos stock en estos momentos, vuelve en unos días.`);
    
    return alert(`${count} ${count === 1 ? 'Producto agregado' : 'Productos agregados'} al carrito!`);
  };

  return (
    <div className='item__list-container'>
      <h1>{greeting}</h1>

      <div className='items'>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemCount initial={1} stock={3} onAdd={onAdd} />
        <ItemCount initial={1} stock={6} onAdd={onAdd} />
        <ItemCount initial={1} stock={0} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemListContainer;