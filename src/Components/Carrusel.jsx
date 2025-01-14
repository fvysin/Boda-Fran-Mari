// Carrusel.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import imagen1 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen2 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen3 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import './Carrusel.css';
import '@fortawesome/fontawesome-free/css/all.css';


export const Carrusel = () => {


  return (
    <div className="tira-fotografica">
      <div className="container-carousel">
      {/* <h2 className="linea-sola"></h2> */}
      <h3 className="titulo">DE LOS CREADORES DE...</h3>
      {/* <h2 className="linea-sola"></h2> */}
      <lord-icon
        src="https://cdn.lordicon.com/wsaaegar.json"
        trigger="loop" // Cambia a loop para animación constante
        stroke="light"
        colors="primary:#000000,secondary:#e83a30"
        style={{ width: '50px', height: '50px' }}
        className='camara'
      ></lord-icon>

          <div className='carruseles'>
           <div className='slider-section'>
             <img src={imagen1} />
            </div>
           <div className='slider-section'>
             <img src={imagen2}  />
           </div>
            <div className='slider-section'>
             <img src={imagen3}/>
            </div>
          </div>
          <div className='btn-left'>  </div>
          <div className='btn-right'></div> 
      </div>
    </div>
  );
};


