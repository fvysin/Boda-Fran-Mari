// eslint-disable-next-line no-unused-vars
import React, { useRef,  useState } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Regalos.css'
export const Regalos = () => {
  const ref = useRef();
    const isVisible = useOnScreen(ref);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={`container-regalos ${isVisible ? 'show' : ''}`} ref={ref}>
       <h1 className='titulo'>Regalos</h1>
       <lord-icon
        className='camara'
        src="https://cdn.lordicon.com/kezeezyg.json"
        trigger="loop"
        colors="primary:#000000,secondary:#9fddea"
        style={{ width: '50px', height: '50px' }}
      ></lord-icon>

      <div className='texto-regalos-container'>



        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className='caja-fran'>
              <p><span className='hola'>IBAN Fran: </span>ES1234567890123456789012</p>
              <p><span className='hola'>Bizum Fran:</span> 600123456</p>
              </div>
              <p><span className='hola'>IBAN Mari: </span> ES1234567890123456789012</p>
              <p><span className='hola'>Bizum Mari: </span> 600123456</p>
            </div>
          </div>
        )}
      <p className='texto-regalos'>Si deseas hacernos un regalo para esta nueva película que estamos por comenzar, te dejamos nuestro IBAN para que puedas contribuir con lo que desees:
      </p>
      <button className="btn-mapa" onClick={openModal}>
          Ver datos
        </button>
           </div>
    </div>
  )
}
