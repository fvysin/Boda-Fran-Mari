// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './Portada.css';
import videoVida from '../assets/imagenes/video.mp4'
import { useOnScreen } from '../Components/useOnScreen'; 

export const Portada = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
 return (
<div className={`portada-container${isVisible ? 'show' : ''}`} ref={ref}>
    <div className='portada-contenido'>
       <video
        src={videoVida}
        className="portada-video"
        autoPlay
        muted
        playsInline
        ></video>
        </div>
  </div>
  );
};
