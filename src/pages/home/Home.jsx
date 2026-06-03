// src/pages/Home/Home.jsx
import React from 'react';
import Boton from '../../components/boton/Boton.jsx';
import './Home.css';
import Carrusel from '../../components/carrusel/Carrusel.jsx';

const Home = () => {
  // Array con las imágenes de fondo para la portada de la Home
  const imagenesFondo = [
    '/images/fondo.jpg',
    '/images/fondo2.jpg', /* Cambia esto por el nombre y extensión real */
    '/images/show1.jpg'
  ];

  return (
    <div className="home-container">
      {/* SECCIÓN HERO (PORTADA) */}
      <section className="hero-section">
        {/* Contenedor que adapta el carrusel a tamaño completo (fondo) */}
        <div className="hero-background">
          <Carrusel imagenes={imagenesFondo} intervalo={4500} />
        </div>

        {/* Capa superpuesta oscura para que el texto resalte */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title"></h1>
            <p className="hero-subtitle"></p>
            <div className="hero-actions-container">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;                                                                