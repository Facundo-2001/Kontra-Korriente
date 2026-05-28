// src/pages/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar programáticamente
import Boton from '../../components/boton/Boton.jsx'; // Usamos tu botón reutilizable
import './Home.css';


const Home = () => {
  const navigate = useNavigate();

  const irAServicios = () => {
    navigate('/servicios');
  };

  const irASobreMi = () => {
    navigate('/sobre-mi');
  };

  const irAContacto = () => {
    window.open('https://wa.me/5491138660143', '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="home-container" style={{ backgroundImage: `url('/images/fondo.jpg')` }}>
      {/* SECCIÓN HERO (PORTADA) */}
      <header 
        className="hero-section" 
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Kontra Korriente Construccion de Titeres y Objetos</h1>
            <div className="hero-actions">
              <Boton 
                texto="Servicios" 
                alHacerClic={irAServicios} 
                tipo="primario" 
              />
              <Boton 
                texto="Biografia" 
                alHacerClic={irASobreMi} 
                tipo="secundario" 
              />
            </div>
          
          </div>
        </div>
      </header>

      {/* SECCIÓN INTRODUCCIÓN ARTÍSTICA */}
      <section className="intro-section">
        <div className="intro-wrapper">
          <div className="intro-text">
            <h2>Construccion, Diseño y Teatro</h2>
            <p>
              En <strong>Kontra Korriente</strong> me dedico a la construcción artesanal de títeres y objetos escénicos. 
              Cada personaje cobra vida a través de un diseño único, pensado a medida para espectáculos teatrales, escuelas o proyectos particulares.
              <br /><br />
              Además de la realización en el taller, brindo funciones para todo tipo de eventos y dicto seminarios especializados en construcción y teatro Lambe Lambe, compartiendo la magia de este antiguo y fascinante oficio.
            </p>
            <img src="/images/home1.jpg" alt="home1" className="home-image"/>
            <img src="/images/home2.jpg" alt="home2" className="home-image"/>
            <img src="/images/home3.jpg" alt="home3" className="home-image"/>
            <p> </p>
            <Boton 
            texto="Contactame" 
            alHacerClic={irAContacto} 
            tipo="primario" 
          />
          </div> 
        </div>
      </section>
    
    </div>
  );
};

export default Home;                                                                