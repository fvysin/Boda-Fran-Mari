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
        <h2 className='titulo1'>Ceremonia y celebraci<span className='tilde-oo'>Ó</span>n</h2>
        <div className='ceremonia-texto'>
          <p className='texto-ceremonia'>
        La filmación se realizará en el mismo SET, en el <span>Hotel Rural S'Olivaret</span>. Por favor, puntualidad para comenzar con la película a tiempo.
          </p>
         <p className='direccion-ceremonia'>Dirección:</p>
          <p className='texto-direccion-ceremonia'>
        Carretera Alaró-Orient, Ma-2100, km 15,6 Mallorca (Islas Baleares). <br />
        Desde el pueblo de Alaró, carretera vieja Orient km 3.
          </p>
        </div>

        <div className="button-container">
        <a
          href="https://maps.app.goo.gl/Azpw3roEZWznWh9Z6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mapa"
        >
          VER DIRECCI<span className='letra-tilde'>ó</span>N
        </a>
      </div>
      </div>
    </div>
  );
};
