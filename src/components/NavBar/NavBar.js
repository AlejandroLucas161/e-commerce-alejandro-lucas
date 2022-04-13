import React from 'react';
import './NavBar.styles.css';

const NavBar = () => {
  return (
    <div className='navbar'>
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
      </div>
    </div>
  )
}

export default NavBar;