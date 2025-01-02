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
        <div className="face back">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <div className="link transition-colors hover:text-red-600">
            <a href={ruta}>Conocer Mas </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;