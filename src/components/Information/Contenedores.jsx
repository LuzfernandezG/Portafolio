import React from 'react'
import './Encabezado.css'


function Contenedores({titulo,descripcion,icono}) {
  return (
    <div className={"contenedor hover:text-white"}>
        {icono}
        <h1 className='text-2xl neon-text'>{titulo}</h1>
        <p className='text-justify text-black hover:text-white ' >{descripcion}</p>
    </div>
  )
}
export default Contenedores