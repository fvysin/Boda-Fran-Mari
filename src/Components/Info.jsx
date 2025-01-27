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
        <h2 className='titulo'>¡UNA BODA DE PEL<span className='tilde-o'>Í</span>CULA!</h2>
        <br />
          {/* <h2 className="linea-sola"></h2> */}
        <div className='texto-info'>
          <p className='queridos-info'>Queridos amigos y familia:</p>
           <p className='parrafo'>Nos gustaría invitaros a ser parte de una historia única. Este <span>10-05-2025</span>, serás testigo y protagonista en esta película, donde dos personajes se unen para comenzar su propia aventura, con una boda que será un verdadero evento cinematográfico de risas y diversión.</p>
        </div>
        </div>
        <div className='img-info'>
            <img src={accion} alt="" />
          </div>
      
            
    
        
    </div>
  )
}
