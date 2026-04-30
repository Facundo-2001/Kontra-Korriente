// src/pages/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar programáticamente
import Boton from '../../components/boton/Boton.jsx'; // Usamos tu botón reutilizable
import './Home.css';
import Fondo from '../../assets/images/imagen1.jpg'; // Importamos el logo para el fondo
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
        style={{ backgroundImage: `url(${Fondo})` }} // Logo como imagen de fondo
      />

      {/* BOTONES DE ACCIÓN (Movidos debajo de la imagen principal) */}
      <div className="hero-actions-container">
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

     
    </div>
  );
};

export default Home;                                                                