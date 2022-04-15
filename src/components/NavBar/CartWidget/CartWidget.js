import React from 'react';
import { BsCartFill } from 'react-icons/bs';

import './CartWidget.styles.css';

const CartWidget = () => {
  return (
    <div className='navbar__cart'>
      <BsCartFill className='navbar__cart-icon' />
      <span className='navbar__cart-count'>0</span>
    </div>
  )
}

export default CartWidget;