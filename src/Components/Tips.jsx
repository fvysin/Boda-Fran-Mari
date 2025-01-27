// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import './Tips.css'
import dresscode from '../assets/imagenes/portadas.jpg'
import imgweb from '../assets/imagenes/dresscodeweb.jpg';


export const Tips = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className={`container-tips ${isVisible ? 'show' : ''}`} ref={ref}>
         <h1 className='titulotraslados'>FIESTA</h1>
        <div className='texto-tips'>
         <p>Para estas escenas:<br /><span className='drescode-span'>Dress code formal</span></p>
        </div>
        <div className='dresscode'>
        <picture>
          <source srcSet={imgweb} media="(min-width: 800px)" />
          <img src={dresscode} alt="Dress code" />
        </picture>
      </div>
        <div className='texto-tips'>
            <p>Para más tarde recomendamos abrigo y tus zapatos más comodos.</p>
        </div>
        </div>
         )
}
