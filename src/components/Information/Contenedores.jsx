import React from 'react'
import './Encabezado.css'


function Contenedores({titulo,descripcion}) {
  return (
    <div className={"contenedor"}>
        <h1 className='text-2xl neon-text '>{titulo}</h1>
        <p >{descripcion}</p>
    </div>
  )
}
export default Contenedores