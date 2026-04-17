import React from 'react';
import Nav from '../nav/Nav.jsx'; // Importamos el componente Nav
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <h2>Kontra Korriente</h2>
      </div>
      <Nav />
    </header>
  );
};

export default Header;