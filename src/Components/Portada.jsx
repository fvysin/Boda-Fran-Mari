// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import './Portada.css';
import videoVida from '../assets/imagenes/video.mp4'
import { useOnScreen } from '../Components/useOnScreen'; 
import videovidaweb from '../assets/imagenes/tamañoweb.mp4'

export const Portada = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 return (
<div className={`portada-container${isVisible ? 'show' : ''}`} ref={ref}>
    <div className='portada-contenido'>
       <video
          src={isLargeScreen ? videovidaweb : videoVida}
          className="portada-video"
        autoPlay
        muted
        playsInline
        ></video>
        </div>
  </div>
  );
};
