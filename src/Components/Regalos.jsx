// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Regalos.css'
export const Regalos = () => {
  return (
    <div className='container-regalos'>
       <h1 className='titulo'>REGALOS</h1>
       <lord-icon
        className='camara'
        src="https://cdn.lordicon.com/kezeezyg.json"
        trigger="loop"
        colors="primary:#000000,secondary:#9fddea"
        style={{ width: '50px', height: '50px' }}
      ></lord-icon>
      <p>Si deseas hacernos un regalo para esta nueva película que estamos por comenzar, te dejamos nuestro IBAN para que puedas contribuir con lo que desees:
      </p>
      <div>
        <div>
          <p>IBAN FRANCISCO:</p>
          <p>BIZUM FRANCISCO:</p>
       </div>
       <div>
          <p>IBAN MARIA:</p>
         <p>BIZUM MARÍA</p>
       </div>
      </div>
    </div>
  )
}
