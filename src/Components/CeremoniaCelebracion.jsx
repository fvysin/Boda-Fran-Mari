// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './CeremoniaCelebracion.css';

export const CeremoniaCelebracion = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className={`container-ceremonia ${isVisible ? 'show' : ''}`} ref={ref}>
      <div className={`todo-ceremonia ${isVisible ? 'animate' : ''}`}>
        <h2 className='titulo1'>Ceremonia y celebracion</h2>
        <div className='ceremonia-texto'>
          <p className='texto-ceremonia'>
        La filmación se realizará en el mismo SET, en el <span>Hotel Rural S'Olivaret</span>. Por favor, puntualidad para comenzar con la película a tiempo.
          </p>
         <p className='direccion-ceremonia'>Direccion:</p>
          <p className='texto-direccion-ceremonia'>
        Carretera Alaró-Orient, Ma-2100, km 15,6 Mallorca (Islas Baleares). <br />
        Desde el pueblo de Alaró, carretera vieja Orient km 3.
          </p>
        </div>

        <div className="button-container">
        <a
          href="https://www.google.com/maps/place/Hotel+Rural+S'Olivaret/@39.734397,2.800670,17z/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mapa"
        >
          VER DIRECCIÓN
        </a>
      </div>
      </div>
    </div>
  );
};
