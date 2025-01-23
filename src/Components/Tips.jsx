import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Tips.css'
import dresscode from '../assets/imagenes/dresscode.jpg'

export const Tips = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className={`container-tips ${isVisible ? 'show' : ''}`} ref={ref}>
         <h1 className='titulo'>Fiesta</h1>
         {/* <lord-icon
           src="https://cdn.lordicon.com/ohcuigqh.json"
           trigger="loop"
          colors="primary:#000000,secondary:#9fddea"
          style={{ width: '50px', height: '50px' }}>
        </lord-icon> */}
        <div className='texto-tips'>
         <p >Detalles a tener en cuenta:</p>
         <p>Para estas esceneas necesitaremos un <span>DRESS CODE FORMAL</span></p>
        </div>
        <div className='dresscode'>
           <img src={dresscode} alt="dresscode" />
        </div>
        <div className='texto-tips'>
            <p>Para más tarde estaremos en la tramunatana si eres friolero recomendamos un abrigo</p>
            <p>Para las escenas de baile te recomendamos tus zapatos más cómodos</p>
        </div>
        </div>
         )
}
