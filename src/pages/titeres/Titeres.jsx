import React from 'react';
import './Titeres.css'
import Boton from '../../components/boton/Boton.jsx';
import { useNavigate } from 'react-router-dom';




const Titeres = () => {
    
    const navigate = useNavigate();
    const VolverAServicios = () => {
        navigate('/servicios');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return(
        <div className="titeres-container">
            <h1>Construccion de Titeres</h1>
            <p></p>
            <img src = '/images/titeres1.jpg' alt='Titeres 1' className = "titeres-img"/>
            <img src = '/images/titeres2.jpg' alt='Titeres 2' className = "titeres-img"/>
            <img src = '/images/titeres3.jpg' alt='Titeres 3' className = "titeres-img"/>
            <img src = '/images/titeres7.jpg' alt='Titeres 4' className = "titeres-img"/>
            <img src = '/images/titeres8.jpg' alt='Titeres 5' className = "titeres-img"/>
            <img src = '/images/titeres9.jpg' alt='Titeres 6' className = "titeres-img"/>
            <p> Pedi tu Titere Personalizado!</p>
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

export default Titeres;