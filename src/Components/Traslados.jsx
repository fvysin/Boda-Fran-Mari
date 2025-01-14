// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Traslados.css'

export const Traslados = () => {
  return (
    <div className='container-traslados'>
       <h1 className='titulo'>TRASLADOS</h1>
        <div className='div-traslados'>
          <h3 className='lugar-hora-traslados'>Buses para traslados de invitados, protagonistas y staff</h3>
          <p className='lugar-hora'>Lugar y hora:</p>
          <p > <span>Colegio San Cayetano</span>a las 12:30hs</p>
         
          <p className='direccion-ceremonia'>Dirección:</p>
      <p className='texto-direccion-ceremonia'>
      Avenida Picasso 15. En frente del Viding Aigua Blava.</p>

      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.3008408520427!2d2.6217020845398284!3d39.575369701882735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793e572830849%3A0xf56630ddc14dc6ef!2sColegio%20San%20Cayetano!5e0!3m2!1ses-419!2sad!4v1736703001430!5m2!1ses-419!2sad" width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        
      </div>
      <p className='direccion-ceremonia'>Contacto día del evento:</p>
      <p className='texto-direccion-ceremonia'>
      Facundo +34 691740746.</p>
      <h3 className='lugar-hora-traslados'>
      PORFAVOR CONFIRMAR ANTES DEL 1 DE ABRIL LA ASISTENCIA A LOS BUSES.</h3>
        </div>
      </div>
  )
}
