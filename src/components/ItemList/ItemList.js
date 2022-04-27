import React, { useState } from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount'
import spinner from '../../assets/spinner/spinner.svg';

import './ItemList.styles.css';

const ItemList = ({ items, isLoading, onAdd }) => {
  return (
    <div className='items'>
      {isLoading ? (
        <div className='spinner-container'>
          <img className='spinner' src={spinner} />
        </div>
      ) : (
        items.map(({ id, name, price, imageUrl, stock }) => (
          <div className='item'>
            <Item
              key={id}
              id={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
              stock={stock}
              onAdd={onAdd}
            />

            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          </div>
        ))
      )}
    </div>

  )
}

export default ItemList;