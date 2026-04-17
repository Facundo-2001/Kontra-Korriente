import React from 'react';
import './Footer.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {anioActual} - Desarrollado por Facundo-2001
        </p>
        <div className="footer-social">
          <a href="https://github.com/Facundo-2001" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;