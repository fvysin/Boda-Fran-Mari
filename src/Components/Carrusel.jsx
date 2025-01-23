// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../Components/useOnScreen';
import imagen1 from '../assets/imagenes/carruselpareja.png';
import imagen2 from '../assets/imagenes/carruselstar.png';
import imagen3 from '../assets/imagenes/carruselvida.png';
import './Carrusel.css';
import { Regalos } from './Regalos';

export const Carrusel = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Cambiar imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`tira-fotografica ${isVisible ? 'show' : ''}`} ref={ref}>
      <div className="container-carousel">
        <p className="tituloca">De los creadores de...</p>
        <div className="carruseles">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-section ${
                index === currentSlide ? 'active' : ''
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Regalos/>
    </div>
  );
};
