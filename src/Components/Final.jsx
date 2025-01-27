// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Final.css'
import emailjs from 'emailjs-com'

export const Final = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_isf2k8e', // Reemplaza con tu service_id de EmailJS
        'template_23jfluj', // Reemplaza con tu template_id de EmailJS
        formRef.current,
        'SmLmOJJNmO0IkQyk1' 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Formulario enviado correctamente');
        },
        (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el formulario');
        }
      );
  };

    
  return (
    <div className={`container-final ${isVisible ? 'show' : ''}`} ref={ref}>
    <div className={`fondofinal ${isVisible ? 'animate' : ''}`}>
      {/* <h2 className="linea-sola"></h2> */}
      <h1 className='titulotraslados'>the end</h1>
      <div className="fondotraslad">
        <p className='parrafo-final'>
        La película de nuestra vida está por comenzar, y contamos con tu presencia. Por favor, confirma tu asistencia antes del <br /><span>1 de abril</span><br />Si tienes alergias alimentarias, eres vegetariano, o hay algo importante que los novios deben saber, no dudes en informarnos.
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
      {/* <p className='anillo'>🎬 💍</p> */}
    </div>
    
  )
}
