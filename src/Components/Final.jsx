// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Final.css'

export const Final = () => {
  return (
    <div className='container-info'>
      {/* <h2 className="linea-sola"></h2> */}
      <h1 className='titulo'>¡CORTE FINAL!</h1>
      {/* <h2 className="linea-sola"></h2> */}
      <lord-icon
         src="https://cdn.lordicon.com/aydxrkfl.json"
        trigger="loop"
         delay="1500"
          state="in-reveal"
          colors="primary:#000000,secondary:#9fddea"
          style={{ width: '50px', height: '50px' }}>
       </lord-icon>
      <div className='texto-final'>
        <p className='parrafo-final'>
        La película de nuestra vida está por comenzar, y tu presencia es el toque especial que hará este día aún más memorable. Por favor, confirma tu asistencia antes del <span>1 de abril</span>, para que podamos asegurarnos de que todos los detalles estén listos para esta gran función. <br />Si tienes alergias alimentarias, eres vegetariano, o hay algo importante que los novios deben saber, no dudes en informarnos.
        </p>
      

      <p className='novios-final'>Con la novia</p>
        <a
          href="https://wa.me/34654403945"
          className="btn-final"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirmar
        </a>
        <p className='novios-final'>Con el novio</p>
        <a
          href="https://wa.me/34662453422"
          className="btn-final"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirmar
        </a>
      </div>
      <div className='nopodemos-container'>
        <p className='nopodemos'>¡No podemos esperar para verte en la gran pantalla de este día tan especial!
        <br /><br />
          Con todo nuestro cariño,</p>
      <p className='mari-fran'>Mari <span className='span-and'>&</span> Fran 🎬 💍</p>
      </div>
    </div>
    
  )
}
