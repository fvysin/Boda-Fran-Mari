// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Final.css'

export const Final = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    
  return (
    <div className={`container-final ${isVisible ? 'show' : ''}`} ref={ref}>
    <div className={`fondofinal ${isVisible ? 'animate' : ''}`}>
      {/* <h2 className="linea-sola"></h2> */}
      <h1 className='titulotraslados'>the end</h1>
      {/* <h2 className="linea-sola"></h2> */}
      {/* <lord-icon
         src="https://cdn.lordicon.com/aydxrkfl.json"
        trigger="loop"
         delay="1500"
          state="in-reveal"
          colors="primary:#000000,secondary:#9fddea"
          style={{ width: '50px', height: '50px' }}>
       </lord-icon> */}
      <div className="fondotraslad">
        <p className='parrafo-final'>
        La película de nuestra vida está por comenzar, y contamos con tu presencia. Por favor, confirma tu asistencia antes del <span>1 de abril</span><br />Si tienes alergias alimentarias, eres vegetariano, o hay algo importante que los novios deben saber, no dudes en informarnos.
        </p>
      
        <div className="container-novios">
          <div>
          <a
           href="https://wa.me/34654403945"
           className="btn-final"
           target="_blank"
           rel="noopener noreferrer"
          >
           CON LA NOVIA
         </a>
        </div>
        <div>
         <a
           href="https://wa.me/34662453422"
            className="btn-final"
            target="_blank"
            rel="noopener noreferrer"
          >
           CON EL NOVIO
          </a>
       </div>
</div>
      </div>
  
        <p className='nopodemos'>¡Contamos con vosotros para este día tan especial!
       </p>
  
      </div>
      <p className='mari-fran'>Mari <span className='span-and'>&</span> Fran</p>
      <p className='anillo'>🎬 💍</p>
    </div>
    
  )
}
