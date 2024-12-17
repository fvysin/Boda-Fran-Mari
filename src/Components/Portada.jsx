// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portada.css';

export const Portada = () => {


  return (
<div className="portada-container">
    <div className="background-overlay"></div>
    <h1 className="portada-text2">Fran</h1>
    <h1 className="portada-text2">& </h1>
    <h1 className="portada-text2">Mari</h1>
    <h3 className="portada-fecha">10.05.2025</h3>
    <h3 className="portada-accion">Luces, cámara, acción!</h3>
    <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" d="M0,192L48,181.3C96,171,192,149,288,128C384,107,480,85,576,112C672,139,768,213,864,224C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
</div>


  );
};
