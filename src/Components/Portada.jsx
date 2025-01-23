// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './Portada.css';
import vida from '../assets/imagenes/vida.png'
// import ticket from '../assets/imagenes/tickete.png'
import { useOnScreen } from '../Components/useOnScreen'; // Ruta del hook

export const Portada = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
 return (
<div className={`portada-container${isVisible ? 'show' : ''}`} ref={ref}>
    <div className='portada-contenido'>
      {/* <img src={ticket} alt="Contenido" className="portada-img"/> */}
      </div>
    <img src={vida} alt="Fondo" className="portada-fondo-img"/>
  
</div>



  );
};
