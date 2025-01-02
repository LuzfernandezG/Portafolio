import React from 'react'
import './Encabezado.css'


function Barra () {
  return (
    <header className='fixed w-full px-20 opacity-80'>
      <nav className='flex gap-4 text-white w-full justify-end' >
        <li className='list-none'>
          <a className='enlaces'>HOME</a>
        </li>
        <li  className='list-none'>
          <a className='enlaces'>ABOUT ME</a>
        </li>
        <li  className='list-none'>
          <a className='enlaces'>APPROACH</a>
        </li>
        <li  className='list-none'>
          <a className='enlaces'>SKILLS</a>
        </li>
        <li  className='list-none'>
          <a className='enlaces'>PROYECTS</a>
        </li>
      </nav>
    </header>
  )
}

export default Barra
