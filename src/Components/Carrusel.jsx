// Carrusel.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import imagen1 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen2 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen3 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen4 from '../assets/imagenes/WhatsApp Image 2024-01-09 at 21.22.53.jpeg';
import imagen5 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen6 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import imagen7 from '../assets/imagenes/Captura de pantalla 2024-12-13 a las 22.14.00.png';
import './Carrusel.css';
import '@fortawesome/fontawesome-free/css/all.css';


export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="tira-fotografica">
      <h3 className="h2">Nuestros momentos de película</h3>

       {/* Ícono de Lordicon */}
      <lord-icon
        src="https://cdn.lordicon.com/wsaaegar.json"
        trigger="loop" // Cambia a loop para animación constante
        stroke="light"
        colors="primary:#000000,secondary:#e83a30"
        style={{ width: '50px', height: '50px' }}
        className='camara'
      ></lord-icon>

         <div className="container">
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <div className="image-wrapper" style={{ transform: `translateX(-${currentIndex * 33.333}% )` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`imagen${index}`} />
          ))}
        </div>
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};


