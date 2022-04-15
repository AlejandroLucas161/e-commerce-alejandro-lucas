import React from 'react';

import './ItemListContainer.styles.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='item__list-container'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;