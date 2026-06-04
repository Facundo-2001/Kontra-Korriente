import React from 'react';
import './Contacto.css'
import Boton from '../../components/boton/Boton.jsx';
import { useNavigate } from 'react-router-dom';
import Carrusel from '../../components/carrusel/Carrusel.jsx';


const Contacto = () => {
    
    const imagenesFondo = [
    '/images/fondo.jpg',
    '/images/fondo2.jpg', /* Cambia esto por el nombre y extensión real */
    '/images/show1.jpg'
  ];

    return(
    <div className="contacto-container">
      
      {/* Fondo de carrusel de imágenes */}
      <div className="contacto-background">
        <Carrusel imagenes={imagenesFondo} intervalo={4500} />
      </div>

      <h2>Instagram</h2>
      <a href="https://www.instagram.com/kontra_korriente?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram"></a> 
      <h2>WhatsApp</h2>
      <a href="https://wa.me/5491138660143" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp"></a>
      <h2>Email</h2>
      <a href="mailto:kontrakorriente.titeres@gmail.com" target="_blank" rel="noreferrer" title="Enviar Email a Kontra Korriente" aria-label="Gmail"></a>
    </div>
);
};

export default Contacto;