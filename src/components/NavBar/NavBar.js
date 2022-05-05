import CartWidget from '../CartWidget/CartWidget';

import { NavLink } from 'react-router-dom';

import './NavBar.styles.css';

const NavBar = () => {
  return (
    <header className='navbar'>
      <div className='navbar-content'>
        <div className='navbar__logo'>
          <NavLink to={'/'}>
            <span>Clothy!</span>
          </NavLink>
        </div>

        <ul className='navbar__list'>
          <li className='navbar__list-item'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'active-link' : undefined}>
              <span>Inicio</span>
            </NavLink>
          </li>

          <li className='navbar__list-item'>
            <NavLink to={'/category/adults'} className={({ isActive }) => isActive ? 'active-link' : undefined}>
              <span>Adultos</span>
            </NavLink>
          </li>

          <li className='navbar__list-item'>
            <NavLink to={'/category/kids'} className={({ isActive }) => isActive ? 'active-link' : undefined}>
              <span>Niños</span>
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar;