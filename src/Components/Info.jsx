// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Info.css'
import imagen from '../assets/imagenes/Captura de pantalla 2025-01-09 a las 13.58.57.png'
import iamgenfondo from '../assets/imagenes/7copia.png'

import iconoPareja from '../assets/imagenes/couple.png'
import iconoFecha from '../assets/imagenes/clock.png'
import iconoLugar from '../assets/imagenes/home.png'

export const Info = () => {
  return (
    <div className='container-info'>
      <div className='texto'>
        {/* <h2 className="linea-sola"></h2> */}
        <h2 className='titulo'>¡UNA BODA DE PELÍCULA!</h2>
       {/* <h2 className="linea-sola"></h2> */}
        <div className='texto-info'>
          <p className='queridos-info'>Queridos amigos y familia:</p>
           <p className='parrafo'>Nos gustaría invitarte a ser parte de una historia única, como las que solo el cine sabe contar. Este <span>10/05/2025</span>, serás testigo y protagonista en esta película, donde dos personajes se unen para comenzar su propia aventura, con una boda que será un verdadero evento cinematográfico de risas y diversión.</p>
        </div>
        </div>
          <img className="img-nieve" src={iamgenfondo} alt="imagen-nieve" />
       
        <div className='texto-info-ceremonia'>
      
       <div className='h3-info'>
        <img className="icono-info" src={iconoPareja} alt="" /> Los protagonistas: 
        <p>
        MARIA Y FRANCISCO
        </p>
       </div>

        <div className='h3-info'>
          <img className="icono-info" src={iconoFecha} alt="" /> Fecha y hora: 
        <p>
          SÁBADO 10 de MAYO <br /> 13:00hs. 
        </p>
        </div>

        <div className='h3-info'> 
        <img className="icono-info" src={iconoLugar} alt="" /> El escenario perfecto: 
        <p>
        HOTEL RURAL S´OLIVARET.
        </p>
        </div>
      </div>
       
    
        
       <p className='h3-footer'>¡Nos encantaría que formaras parte de esta historia!</p>
    </div>
  )
}
