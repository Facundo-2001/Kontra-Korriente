import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#servicios">Servicios</a>
        </li>
        <li className="nav-item">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;