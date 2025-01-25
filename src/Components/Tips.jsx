// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Tips.css'
import dresscode from '../assets/imagenes/Dresscode02.jpg'

export const Tips = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className={`container-tips ${isVisible ? 'show' : ''}`} ref={ref}>
         <h1 className='titulotraslados'>Fiesta</h1>
        <div className='texto-tips'>
         <p >Detalles a tener en cuenta:</p>
         <p>Para estas esceneas necesitaremos un <br /><span className='drescode-span'>Dress code formal</span></p>
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
