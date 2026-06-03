import React from 'react';
import './Footer.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {anioActual} - Kontra Korriente todos los derechos reservados.
        </p>
        <div className="footer-social">
          <a href="mailto:kontrakorriente.titeres@gmail.com" target="_blank" rel="noreferrer" title="Enviar Email a Kontra Korriente" aria-label="Gmail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="https://wa.me/5491138660143" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/kontra_korriente?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;