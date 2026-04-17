// src/pages/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar programáticamente
import Boton from '../../components/boton/Boton.jsx'; // Usamos tu botón reutilizable
import './Home.css';
// Importamos una imagen de fondo (Hero). Reemplaza con una real de los títeres.
import heroImage from '../../assets/images/imagen1.jpg'; 

const Home = () => {
  const navigate = useNavigate();

  const irAServicios = () => {
    navigate('/servicios');
  };

  const irASobreMi = () => {
    navigate('/sobre-mi');
  };

  return (
    <div className="home-container">
      {/* SECCIÓN HERO (PORTADA) */}
      <header 
        className="hero-section" 
        style={{ backgroundImage: `url(${heroImage})` }} // Fondo dinámico
      >
        <div className="hero-overlay"> {/* Capa oscura para legibilidad */}
          <div className="hero-content">
            <h1 className="hero-title">Kontra Korriente</h1>
            <p className="hero-subtitle">Arte que cobra vida, historias que trascienden.</p>
            <div className="hero-actions">
              <Boton 
                texto="Ver Espectáculos" 
                alHacerClic={irAServicios} 
                tipo="primario" 
              />
              <Boton 
                texto="Conocenos" 
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
            <h2>La Magia de los Títeres</h2>
            <p>
              En Kontra Korriente, creemos que cada títere tiene una voz y cada historia merece ser contada con pasión. No solo creamos espectáculos; forjamos mundos donde la imaginación es la protagonista, combinando técnicas tradicionales con una visión artística moderna y profesional.
            </p>
          </div>
          <div className="intro-icon-container">
            {/* Aquí podrías poner un icono de títere o una foto pequeña */}
            {/* <img src={titereIcon} alt="Icono de Títere" className="intro-icon" /> */}
            <div className="intro-icon-placeholder">🎭</div>
          </div>
        </div>
      </section>

      {/* SECCIÓN RESUMEN DE SERVICIOS */}
      <section className="highlights-section">
        <div className="highlight-card">
          <h3>Shows para Eventos</h3>
          <p>Llevamos la magia a tu celebración, con obras adaptadas para todas las edades.</p>
        </div>
        <div className="highlight-card">
          <h3>Talleres Creativos</h3>
          <p>Aprende a construir tus propios títeres y despierta tu artista interior.</p>
        </div>
        <div className="highlight-card destaque"> {/* Tarjeta con estilo diferente */}
          <h3>Obras de Repertorio</h3>
          <p>Disfruta de nuestras creaciones originales con una puesta en escena única.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;