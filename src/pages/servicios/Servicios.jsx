import React from 'react';
import './Servicios.css';

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
          <img src="/images/titeres1.jpg" alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src="/images/titeres2.jpg" alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src="/images/titeres3.jpg" alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src="/images/titeres4.jpeg" alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src="/images/titeres5.jpeg" alt="Títeres de Kontra Korriente" className="titeres-image" />
          <img src="/images/titeres6.jpeg" alt="Títeres de Kontra Korriente" className="titeres-image" />
        </div>

        <div className="servicio-card">
          <h3>Obras</h3>
          <p>
            Para eventos, escuelas y teatros.
          </p>
          <img src="/images/show1.jpg" alt="obras1" className="show-image" />
          <img src="/images/show2.jpg" alt="obras2" className="show-image" />
          <img src="/images/show3.jpg" alt="obras3" className="show-image" />
          <img src="/images/show4.jpg" alt="obras4" className="show-image" />
          <img src="/images/show5.jpg" alt="obras5" className="show-image" />
          <img src="/images/show6.jpg" alt="obras6" className="show-image" />
        </div>
      
      <div className="servicio-card">
          <h3>Seminarios</h3>
          <p>
            Doy seminarios de construccion y realizacion de titeres y teatro lambe lambe.
          </p>
          <img src="/images/CajaLambde.jpg" alt="seminarios1" className="seminarios-image" />
          <p>Interior de teatro Lambe Lambe</p>
          <img src="/images/TeatroLambe.jpg" alt="seminarios2" className="seminarios-image" />
          <p>Realizacion de teatro Lambe Lambe</p>
          <img src="/images/interiorTeatroLambe.jpg" alt="seminarios3" className="seminarios-image" />
          <p>Caja de teatro Lambe Lambe</p>
          <img src="/images/ConstruccionDeTiteres1.jpeg" alt="seminarios4" className="seminarios-image" />
          <p>Seminario de Construccion de titeres</p>
          <img src="/images/ConstruccionDeTiteres2.jpeg" alt="seminarios5" className="seminarios-image" />
          <img src="/images/ConstruccionDeTiteres3.jpeg" alt="seminarios6" className="seminarios-image" />
        </div>  
      
      </div>
    </div>
 
   

);
};

export default Servicios;