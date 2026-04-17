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
          <div className="servicio-icon">🎭</div>
          <h3>Fabricación de Títeres</h3>
          <p>
            Diseño y construyo títeres personalizados. Si necesitas un personaje específico para tu proyecto o como regalo, utilizo distintas técnicas para materializar tu idea con un gran nivel de detalle y cuidado.
          </p>
        </div>

        <div className="servicio-card">
          <div className="servicio-icon">🎪</div>
          <h3>Shows a Pedidos</h3>
          <p>
            Realizo espectáculos a pedido para cumpleaños, escuelas, festivales o cualquier tipo de evento. Adapto la temática y el tono del show para asegurar una experiencia teatral inolvidable tanto para grandes como para chicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;