import React from 'react';
import './Obras.css';
import { useNavigate } from 'react-router-dom';
import Boton from '../../components/boton/Boton.jsx';


const Obras = () => {
    const navigate = useNavigate();
    const VolverAServicios = () => {
        navigate('/servicios');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <div className="obras-container">
        <h1>Obras</h1>
        <p></p>
         <img src = '/images/show1.jpg' alt='Obra 1' className = "obras-img"/>
         <img src = '/images/show2.jpg' alt='Obra 2' className = "obras-img"/>
         <img src = '/images/show3.jpg' alt='Obra 3' className = "obras-img"/>
         <img src = '/images/show4.jpg' alt='Obra 4' className = "obras-img"/>
         <img src = '/images/show5.jpg' alt='Obra 5' className = "obras-img"/>
         <img src = '/images/show6.jpg' alt='Obra 6' className = "obras-img"/>
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

export default Obras;