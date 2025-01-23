// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import './CountDown.css';
import imagen from '../assets/imagenes/fotonieve.jpg'
import { useOnScreen } from '../Components/useOnScreen';

export const CountDown = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
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
    <div className={`countdown ${isVisible ? 'show' : ''}`} ref={ref}>
        {showCountdown && (
    <div className="countdown-card">
        <div className="img-container-info">
           <img className="img-nieve" src={imagen} alt="imagen-boda" />
        </div>

      {/* Contenido */}
      <div className="countdown-letra">
        <h2 className="titulo">Faltan</h2>
        <div className="countdown-cd">
          <div className="time-section">
            <p className="time-value">{countdownTime.days}</p>
            <p className="time-label">DÍAS</p>
          </div>
          <div className="time-section">
            <p className="time-value">{countdownTime.hours}</p>
            <p className="time-label">HS</p>
          </div>
          <div className="time-section">
            <p className="time-value">{countdownTime.minutes}</p>
            <p className="time-label">MIN</p>
          </div>
          <div className="time-section">
            <p className="time-value">{countdownTime.seconds}</p>
            <p className="time-label">SEC</p>
          </div>
        </div>
      </div>
    </div>
     )}
 </div>
     );
     };
     