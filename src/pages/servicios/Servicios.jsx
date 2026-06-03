import React from 'react';
import './Servicios.css';
import Carrusel from '../../components/carrusel/Carrusel.jsx';
import Boton from '../../components/boton/Boton.jsx';
import { useNavigate } from 'react-router-dom';



 const imagenesFondo = [
    '/images/fondo.jpg',
    '/images/fondo2.jpg', /* Cambia esto por el nombre y extensión real */
    '/images/show1.jpg'
  ];


const RealizacionTiteres = [
'/images/titeres1.jpg',
'/images/titeres2.jpg', 
'/images/titeres3.jpg', 
'/images/titeres4.jpeg',
'/images/titeres5.jpeg', 
 '/images/titeres6.jpeg' 
];

const Obras = [
'/images/show1.jpg',
'/images/show2.jpg', 
'/images/show3.jpg', 
'/images/show4.jpg',
'/images/show5.jpg', 
'/images/show6.jpg'
];

const Seminarios = [
'/images/CajaLambde.jpg',
'/images/TeatroLambe.jpg', 
'/images/interiorTeatroLambe.jpg',
'/images/ConstruccionDeTiteres1.jpeg', 
'/images/ConstruccionDeTiteres2.jpeg',
'/images/ConstruccionDeTiteres3.jpeg'
];


const Servicios = () => {
  const navigate = useNavigate();

  const IrATiteres = () => {
    navigate('/titeres');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const IrAObras = () => {
    navigate('/obras');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const IrASeminarios = () => {
    navigate('/seminarios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Componente del carrusel actuando como fondo fijo */}
      <div className="servicios-background">
        <Carrusel imagenes={imagenesFondo} intervalo={4500} />
        <div className="servicios-overlay"></div>
      </div>

      <div className="servicios-container">

      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Realizacion de Títeres</h3>
          <p>
           Realizacion de titeres, Construccion de Personajes a pedido.
          </p>
          <Carrusel imagenes={RealizacionTiteres} intervalo={4500} />
          <Boton 
            texto="Ver más" 
            alHacerClic={IrATiteres} 
            tipo="primario" 
          />
        </div>

        <div className="servicio-card">
          <h3>Obras</h3>
          <p>
            Para eventos, escuelas y teatros.
          </p>
          <Carrusel imagenes={Obras} intervalo={4500} />
          <Boton 
            texto="Ver más" 
            alHacerClic={IrAObras} 
            tipo="primario" 
          />
        </div>
      
      <div className="servicio-card">
          <h3>Seminarios</h3>
          <p>
            Doy seminarios de construccion y realizacion de titeres y teatro lambe lambe.
          </p>
          <Carrusel imagenes={Seminarios} intervalo={4500} />
          <Boton 
            texto="Ver más" 
            alHacerClic={IrASeminarios} 
            tipo="primario" 
          />
        </div>  
      
      </div>
    </div>
    </>
  );
};

export default Servicios;