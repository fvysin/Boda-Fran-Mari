// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Final.css'
import emailjs from 'emailjs-com'

export const Final = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const formRef = useRef();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      emailjs.init('SmLmOJJNmO0IkQyk1'); // Reemplaza con tu public key
    }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_isf2k8e',  // Tu Service ID
      'template_23jfluj',  // Tu Template ID
      formRef.current       // El formulario que se envía
    )
      .then(
        (result) => {
          console.log(result.text);
          alert('Formulario enviado correctamente');
          setShowModal(false); // Cierra el modal después de enviar

        },
        (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el formulario');
        }
      );
  };

  
  // Función para abrir el modal
  const openModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`container-final ${isVisible ? 'show' : ''}`} ref={ref}>
    <div className={`fondofinal ${isVisible ? 'animate' : ''}`}>
      {/* <h2 className="linea-sola"></h2> */}
      <h1 className='titulotraslados'>the end</h1>
      <div className="fondotraslad">
        <p className='parrafo-final'>
        La película de nuestra vida está por comenzar, y contamos con tu presencia. Por favor, confirma tu asistencia antes del <br /><span>14 de abril</span><br />Si tienes alergias alimentarias, eres vegetariano, o hay algo importante que los novios deben saber, no dudes en informarnos.
        </p>
      
        {/* <div className="container-novios">
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
    </div> */}
      </div>
  
       <button className="btn-final" onClick={openModal}>
          CONFIRMAR
        </button>
        <p className='nopodemos'>¡Contamos con vosotros para este día tan especial!
       </p>



      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
          <span className="close" onClick={closeModal}>
                &times;
              </span>
            <h2 className='confirmacion'>Confirmación de Asistencia</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <div>
                <label>Nombre(s):</label>
                <input type="text" name="name" required />
              </div>
                  <div>
                <label>Alergias (si las hay):</label>
                <textarea name="allergies"></textarea>
              </div>
              <div >
                <label>¿Necesitas autobús?</label>
                <select name="bus" required className='label-ctn'>
                  <option value="sí">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button type="submit" className="btn-mapa2">Enviar</button>
            </form>
          </div>
        </div>
      )}
      
          </div>
          <p className='mari-fran'>Mari <span className='span-and'>&</span> Fran</p>
          {/* <p className='anillo'>🎬 💍</p> */}
    </div>
    
  )
}
