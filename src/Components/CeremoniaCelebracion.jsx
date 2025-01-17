import React from 'react';
import './CeremoniaCelebracion.css';

export const CeremoniaCelebracion = () => {
  return (
    <div className='container-ceremonia'>
      <h2 className='titulo'>CEREMONIA Y CELEBRACIÓN</h2>
      <div className='todo-ceremonia'>

      <p className='texto-ceremonia'>
        La filmación se realizará en el mismo SET, en el <span>Hotel Rural S'Olivaret</span>. Por favor, puntualidad para comenzar con la película a tiempo.
      </p>
      <p className='direccion-ceremonia'>Dirección:</p>
      <p className='texto-direccion-ceremonia'>
        Carretera Alaró-Orient, Ma-2100, km 15,6 Mallorca (Islas Baleares). <br />
        Desde el pueblo de Alaró, carretera vieja Orient km 3.
      </p>
      </div>

      {/* Mapa embebido directamente */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.23386141877!2d2.800670276602864!3d39.73439737155741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297e9c8566df2d5%3A0x7651cbc49055958d!2sHotel%20Rural%20S&#39;Olivaret%20%26%20Spa!5e0!3m2!1ses-419!2sad!4v1736695953044!5m2!1ses-419!2sad"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
