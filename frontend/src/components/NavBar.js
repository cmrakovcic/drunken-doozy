import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/beers">Beers</NavLink>
        </li>
        <li>
          <NavLink to="/favorited-beers">Favorited Beers</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random Beer</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;