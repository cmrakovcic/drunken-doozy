import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/beers">Beers</NavLink>
        </li>
        <li>
          <NavLink to="/favorited-beers">Favorited Beers</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random Beer</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;