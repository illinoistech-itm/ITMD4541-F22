import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink className='nav-link' to="/">All</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to="/html">HTML</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to="/css">CSS</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to="/javascript">JavaScript</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;