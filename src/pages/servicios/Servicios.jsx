import React from 'react';
import './Servicios.css';
import titere1 from '../../assets/images/titeres1.jpg';
import titere2 from '../../assets/images/titeres2.jpg';
import titere3 from '../../assets/images/titeres3.jpg';
import seminarios1 from '../../assets/images/CajaLambde.jpg';
import seminarios2 from '../../assets/images/TeatroLambe.jpg';
import seminarios3 from '../../assets/images/interiorTeatroLambe.jpg';
import show1 from '../../assets/images/show1.jpg';
import show2 from '../../assets/images/show2.jpg';
import show3 from '../../assets/images/show3.jpg';


const Servicios = () => {
  return (
    <div className="servicios-container">
      <h2>Mis Servicios</h2>
      <p className="servicios-subtitulo">
        Ofrezco propuestas artísticas hechas a medida para darle vida a tus ideas.
      </p>

      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Realizacion de Títeres</h3>
          <p>
           Realizacion de titeres, Construccion de Personajes a pedido.
          </p>
          <img src={titere1} alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src={titere2} alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src={titere3} alt="Títeres de Kontra Korriente" className="titeres-image" />
        </div>

        <div className="servicio-card">
          <h3>Obras</h3>
          <p>
            Para eventos, escuelas y teatros.
          </p>
          <img src={show1} alt="obras1" className="show-image" />
          <img src={show2} alt="obras2" className="show-image" />
          <img src={show3} alt="obras3" className="show-image" />
        </div>
      
      <div className="servicio-card">
          <h3>Seminarios</h3>
          <p>
            Doy seminarios de construccion y realizacion de titeres y teatro lambe lambe.
          </p>
          <img src={seminarios1} alt="seminarios1" className="seminarios-image" />
          <p>Interior de teatro Lambe Lambe</p>
          <img src={seminarios2} alt="seminarios2" className="seminarios-image" />
          <p>Realizacion de teatro Lambe Lambe</p>
          <img src={seminarios3} alt="seminarios3" className="seminarios-image" />
          <p>Caja de teatro Lambe Lambe</p>
        </div>  
      
      </div>
    </div>
 
   

);
};

export default Servicios;