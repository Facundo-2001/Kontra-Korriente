// src/pages/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar programáticamente
import Boton from '../../components/boton/Boton.jsx'; // Usamos tu botón reutilizable
import './Home.css';
// Importamos una imagen de fondo (Hero). Reemplaza con una real de los títeres.
import heroImage from '../../assets/images/imagen1.jpg'; 
import imagen2 from '../../assets/images/imagen2.jpg';



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
            <p className="hero-subtitle">Compañia de Titeres</p>
            <div className="hero-actions">
              <Boton 
                texto="Espectáculos" 
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
            <h2>La Magia de los Títeres</h2>
            <p>
              En Kontra Korriente, creemos que cada títere tiene una voz y cada historia merece ser contada con pasión. No solo creamos espectáculos; forjamos mundos donde la imaginación es la protagonista, combinando técnicas tradicionales con una visión artística moderna y profesional.
            </p>
          </div>
          <div className="intro-icon-container">
            <img src={imagen2} alt="Títeres de Kontra Korriente" className="intro-image" />
          </div>
        </div>
      </section>

      {/* SECCIÓN RESUMEN DE SERVICIOS */}
      <section className="highlights-section">
        <div className="highlight-card">
          <h3>Shows a Pedidos</h3>
          <p>Llevo la magia a donde la necesites con obras adaptadas a tu evento o celebración.</p>
        </div>
        <div className="highlight-card destaque"> {/* Tarjeta con estilo diferente */}
          <h3>Fabricación de Títeres</h3>
          <p>Construyo y doy vida a personajes personalizados para obras, regalos o proyectos artísticos.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;