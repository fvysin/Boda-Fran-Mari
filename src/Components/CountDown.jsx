// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './CountDown.css';

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
          <div className='countdown-letra'>
            <p>Faltan</p>
            <p>{countdownTime.days} días</p>
            <p>{countdownTime.hours} horas</p>
            <p>{countdownTime.minutes} minutos</p>
          </div>
        )}
        </div>
      
  
  );
};
