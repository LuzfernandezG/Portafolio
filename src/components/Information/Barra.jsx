import React from 'react'
import './Encabezado.css'

function Barra () {
  return (
    <header className=' w-full md:fixed  xl:px-20 opacity-80 md:py-10  '>
      <nav className='md:flex gap-2 text-white w-full  md:justify-end md:gap-4 '>
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
