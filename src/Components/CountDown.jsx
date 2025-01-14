// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './CountDown.css';
import film from '../assets/imagenes/9165800_movie_clapper_film_icon.png'
export const CountDown = () => {
  const [showCountdown, setShowCountdown] = useState(false);

  // Función para actualizar el contador de cuenta atrás
  const getCountdownTime = () => {
    const targetDate = new Date('2025-05-10T14:00:00'); // Fecha de la boda
    const now = new Date();
    const timeDiff = targetDate - now;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdownTime, setCountdownTime] = useState(getCountdownTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime(getCountdownTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setShowCountdown(true);
    } else {
      setShowCountdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="countdown">
    {showCountdown && (
      <div className="countdown-letra">
        {/* Título */}
        <p className="faltan-cd">Faltan</p>

        {/* Contador en tres columnas */}
        <div className="countdown-cd">
          <div className="time-section">
            <p className="time-value">{countdownTime.days}</p>
            <p className="time-label">DIAS</p>
          </div>
          <div className="time-section">
            <p className="time-value">{countdownTime.hours}</p>
            <p className="time-label">HS</p>
          </div>
          <div className="time-section">
            <p className="time-value">{countdownTime.minutes}</p>
            <p className="time-label">MIN</p>
          </div>
        </div>
          <div>
           <img className="icono-film" src={film} alt=""  />
          </div>

        {/* <lord-icon
    src="https://cdn.lordicon.com/gpabwdkx.json"
    trigger="loop"
    colors="primary:#000000,secondary:#9fddea"
    style={{ width: '55px', height: '55px' }}
      >
      </lord-icon> */}
      </div>
    )}
  </div>
);
};
