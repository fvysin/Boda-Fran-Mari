// eslint-disable-next-line no-unused-vars
import './Info.css'
import accion from '../assets/imagenes/info.png'
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen'; // Ruta del hook

export const Info = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
  return (
    <div className={`container-info ${isVisible ? 'show' : ''}`} ref={ref}>
      <div className='texto'>
        {/* <h2 className="linea-sola"></h2> */}
        <h2 className='titulo'>¡Una boda de película!</h2>
        <br />
          {/* <h2 className="linea-sola"></h2> */}
        <div className='texto-info'>
          <p className='queridos-info'>Queridos amigos y familia:</p>
           <p className='parrafo'>Nos gustaría invitarte a ser parte de una historia única, como las que solo el cine sabe contar. Este <span>10-05-2025</span>, serás testigo y protagonista en esta película, donde dos personajes se unen para comenzar su propia aventura, con una boda que será un verdadero evento cinematográfico de risas y diversión.</p>
        </div>
        </div>
        <div className='img-info'>
            <img src={accion} alt="" />
          </div>
      
          {/* <div className={`img-info ${isVisible ? 'zoomIn' : ''}`}>
          <div className='container-datos'>
       <div className='h3-info'>
        <p className="icono-info"  alt="" /> Película: 
        <p>
        Maria & Francisco Wedding
        </p>
       </div>

        <div className='h3-info'>
          <p className="icono-info" alt="" /> Fecha y hora: 
        <p>
          Sabado 10 de mayo, <br /> 13:00hs. 
        </p>
        </div>

        <div className='h3-info'> 
        <p className="icono-info" alt="" /> El escenario: 
        <p>
        Hotel rural S ' Olivaret
        </p>
        </div>
        <p className='h3-footer'>¡Nos encantaría que formaras <br />parte de esta historia!</p>
      
          </div>
      </div>

        */}
  
       
       
    
        
    </div>
  )
}
