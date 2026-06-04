import React from 'react';
import './Seminarios.css'
import Boton from '../../components/boton/Boton.jsx';
import { useNavigate } from 'react-router-dom';



const Seminarios = () => { 
     
    const navigate = useNavigate();
         const VolverAServicios = () => {
             navigate('/servicios');
             window.scrollTo({ top: 0, behavior: 'smooth' });
         };

return(
    <div className="seminarios-container">

        <h2>Teatro Lambe Lambe</h2>
        <img src = '/images/CajaLambde.jpg' alt='Seminario 1' className = "seminarios-img"/>
        <img src = '/images/TeatroLambe.jpg' alt='Seminario 2' className = "seminarios-img"/>
        <img src = '/images/interiorTeatroLambe.jpg' alt='Seminario 3' className = "seminarios-img"/>
        <h2>Construccion de Titeres</h2>
        <img src = '/images/ConstruccionDeTiteres1.jpeg' alt='Seminario 4' className = "seminarios-img"/>
        <img src = '/images/ConstruccionDeTiteres2.jpeg' alt='Seminario 5' className = "seminarios-img"/>
        <img src = '/images/ConstruccionDeTiteres3.jpeg' alt='Seminario 6' className = "seminarios-img"/>
        <div className="volver-btn-container">
            <Boton
                texto="Volver a Servicios"
                alHacerClic={VolverAServicios}
                tipo="primario"
                />
        </div>
    </div>
);
};

export default Seminarios;