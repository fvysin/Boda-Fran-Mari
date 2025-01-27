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
       <h1 className='tituloregalos'>El mejor regalo</h1>
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
              <p><span className='hola'>Bizum Fran:</span> 662453422</p>
              </div>
              <p><span className='hola'>IBAN Mari: </span> ES1234567890123456789012</p>
              <p><span className='hola'>Bizum Mari: </span> 654403945</p>
            </div>
          </div>
        )}
      <p className='texto-regalos'>es vuestra presencia, no podéis faltar. Pero si queréis ayudarnos con nuestro viaje, dejamos nuestros datos
      </p>
      <button className="btn-mapa" onClick={openModal}>
          VER DATOS
        </button>
           </div>
    </div>
  )
}
