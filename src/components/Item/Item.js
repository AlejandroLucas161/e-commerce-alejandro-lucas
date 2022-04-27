import { Fragment } from 'react';

const Item = ({ name, price, imageUrl, stock }) => {
  return (
    <Fragment>
      <div className='item__image-container'>
        <img src={imageUrl} alt={name} className='item__image' />
      </div>

      <h2 className='item__name'>{name}</h2>

      <div className='item__info'>
        <span className='item__info-price'>Precio: <b>${price}</b></span>
        <span className='item__info-stock'>Stock: <b>{stock}</b></span>
      </div>
    </Fragment>
  )
}

export default Item;