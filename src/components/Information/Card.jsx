import React from 'react';
import './Contenedor.css';

function Card({ titulo, descripcion ,url,ruta}) {
  return (
    <>
      <div className="card">
        <div className="face front">
          <img src={url} alt=""/>
          <h3>{titulo}</h3>
        </div>
        <div className="face back ">
          <h4 className='md:text-3xl'>{titulo}</h4>
          <p className='text-xs md:text-base'>{descripcion}</p>
          <div className="link ">
            <a href={ruta} className='boton ' >Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;