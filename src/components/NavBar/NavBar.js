import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.styles.css';

const NavBar = () => {
  return (
    <header className='navbar'>
      <div className='navbar-content'>
        <div className='navbar__logo'>
          <a href='#'>
            Clothy!
          </a>  
        </div>  

        <ul className='navbar__list'>
          <li className='navbar__list-item'>
            <a href='#'>Home</a>
          </li>

          <li className='navbar__list-item'>
            <a href='#'>Adults</a>
          </li>

          <li className='navbar__list-item'>
            <a href='#'>Kids</a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar;