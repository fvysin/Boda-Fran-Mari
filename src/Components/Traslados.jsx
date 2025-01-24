// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Traslados.css'

export const Traslados = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className={`container-traslados ${isVisible ? 'show' : ''}`} ref={ref}>
      <div className={`fondotraslados ${isVisible ? 'animate' : ''}`}>
       <p className='titulotraslados'>Traslados</p>
        <div className='div-traslados'>
          <p className='lugar-hora-traslados'>Buses para traslados de invitados, protagonistas y staff</p>

          <div>
          <p className='direccion-ceremonia'>Lugar y hora:</p>
          <p > Colegio San Cayetano a las 12:30hs</p>
          <p>Vuelta a las 23:00h</p>
          <p className='direccion-ceremonia'>Contacto día del evento:</p>
      <p className='texto-direccion-ceremonia'>
      Facundo +34 691740746.</p>
          <p className='direccion-ceremonia'>Dirección:</p>
          <p className='texto-direccion-ceremonia'>
      Avenida Picasso 15. <br />En frente del Viding Aigua Blava.</p>
          </div>
      <div className="map-container">
          <div className="button-container">
          <a
            href="https://www.google.com/maps/place/Colegio+San+Cayetano/@39.57537,2.621702,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mapa"
            >
            VER DIRECCION
          </a>
        </div>

        
      </div>
      <p className='por-favor'>
      Por favor, confirmar asistencia de los buses antes del 1 de abril a Mari </p>
            </div> 
        </div>
      </div>
  )
}
