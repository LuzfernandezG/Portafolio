import React from 'react'
import './Encabezado.css'
import * as Scroll from 'react-scroll'
import Contenedor from './Contenedores.jsx'
import Card from './Card.jsx'
import LineaPorcentaje from './LineaPorcentaje.jsx'
import pdf from '../../../public/documents/cv luz.pdf'
import Skills from './Skills.jsx'

function Encabezado () {
  const handleScroll = () => {
    Scroll.scroller.scrollTo('Introduccion', {
      duration: 1000,
      delay: 500,
      smooth: true
    })
  }
  const onButtonClick = () => {
    
    // using Java Script method to get PDF file
    fetch(pdf).then((response) => {
        response.blob().then((blob) => {
        
           
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "CV Luz Fernandez.pdf";
            alink.click();
        });
      })
    }

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center '>
        <div className=' flex  items-center justify-center flex-col gap-3 z-30'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12em'
            height='12em'
            viewBox='0 0 24 24'
            className='text-white bg-black p-8 rounded-full opacity-50'
          >
            <path
              fill='currentColor'
              d='M3 7V4h18v3h-1V5H4v2zm6 13v-2H3v-3h1v2h16v-2h1v3h-6v2zm-4.584-9l2.6-2.6l-.708-.708L3 11l3.308 3.308l.708-.708zm15.169 0l-2.6 2.6l.707.708L21 11l-3.308-3.308l-.707.708z'
            />
          </svg>
          <h1 className='titulos neon-text font-bold'>
            Luz Angela Fernandez Gutierrez
          </h1>

          <p className='text-white text-3xl neon-text'>Software Developer JR</p>
          <p className='text-white text-xl neon-text'>
            Programmer in process, Always learning new technologies
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6em'
            height='6em'
            viewBox='0 0 24 24'
            className='text-white transition-colors hover:text-black'
            onClick={handleScroll}
          >
            <path
              fill='currentColor'
              d='M12 15.25a.74.74 0 0 1-.53-.22l-5-5A.75.75 0 0 1 7.53 9L12 13.44L16.47 9a.75.75 0 0 1 1.06 1l-5 5a.74.74 0 0 1-.53.25'
            />
          </svg>
        </div>
        
      </div>
      <div
        className='w-full h-screen text-white flex items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex flex-col gap-3 items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='270'
            height='270'
            viewBox='0 0 24 24'
          >
            <rect width='24' height='24' fill='none' />
            <path
              fill='currentColor'
              d='M5.77 11.977L2.83 9.039l2.94-2.92l2.919 2.92zM9.807 21v-4.596q-1.467-.125-2.92-.324T4 15.52l.23-1q1.928.478 3.856.681t3.912.203t3.915-.203t3.856-.682l.231 1q-1.436.362-2.889.56t-2.919.325V21zM5.769 10.58l1.523-1.54L5.77 7.516L4.227 9.039zM12 7.386q-.961 0-1.634-.673q-.674-.673-.674-1.635t.674-1.635T12 2.77t1.635.673t.673 1.635t-.674 1.635T12 7.385m0 6.404q-.698 0-1.195-.498q-.497-.497-.497-1.195t.497-1.195T12 10.404t1.195.497t.497 1.195t-.497 1.195T12 13.79m0-7.404q.54 0 .924-.384t.384-.924t-.384-.924T12 3.769t-.924.384t-.384.924t.384.924t.924.384m4.992 5.461L15.677 9.54l1.315-2.308h2.573l1.316 2.308l-1.316 2.307zm.56-1h1.46l.722-1.307l-.729-1.308h-1.459l-.723 1.308zm.736-1.307'
            />
          </svg>{' '}
        </section>
        <div className='flex flex-col items-center justify-center p-16 gap-10'>
          <h1 className='titulos neon-text'>HELLO EVERYONE</h1>
          <p className='text-justify '>
            Soy estudiante de Tecnologia en sistemas de informacion y desarrollo
            de software de Cali-Coombia, he desarrolladso dia a dia conocimientos en desarrollo web
            de manera autodidacta, me gusta facilitar la experiencia del usuario medienta interfaces atractivas.
          </p>
          <button className='boton' onClick={onButtonClick}>Conocer Mas</button>
        </div>
      </div>

      <div
        className='w-full h-screen text-white items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex flex-col gap-6 items-center justify-center'>
          <h1 className='titulos neon-text'>APPROACH</h1>
          <p className='text-justify'>
          Me especializo en diseñar y desarrollar aplicaciones y sitios web atractivos, funcionales y que sean escalables, buscando siempre 
          facilitar la experiencia del usuario en las plataformas digitales.
          </p>
        </section>

        <div className='flex gap-7 p-10'>
          <Contenedor
          // icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='titulos neon-text'><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.438 17V7L9 9.5"/></svg>}
            titulo='Frontend Developer'
            descripcion=' Uso de Tecnologias como HTML5, CSS3, JavaScript y frameworks como React, Vue y NextJS, para la experiencia de usuario y diseño responsivo y accesible'
          />
          <Contenedor
            titulo='Backend Developer'
            descripcion='Uso basico de tecnologias como Node.js y Django para la construccion de backend'
          />
          <Contenedor
            titulo='Data Analyst'
            descripcion='Implementacion de bases de datos relaciones como MySQL y no relacionales coo Firebase, uso de Pandas en Django, ademas de plataformas de visualizacion interactivas como Power BI'
          />
            <Contenedor
            titulo='support TI'
            descripcion='En el area de soporte, aseguro que los sistemas estén operativos y que los usuarios puedan trabajar sin interrupciones, estando a la disposicion de brindar soluciones efectivas'
          />
        </div>
      </div>

      <div
        className='w-full h-full flex gap-12 text-white  justify-center px-7'
        id='Introduccion'
      >
        <Skills/>
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>SOFT SKILLS</h1>
          <ul className=' grid grid-cols-1 mx-auto gap-5'>
            <li className='bg-white rounded-full p-5 text-purple-700 hover:bg-black hover:text-white'>
              Responsabilidad
            </li>
            <li className='bg-white rounded-full p-5 text-purple-700 hover:bg-black hover:text-white'>
              Trabajo en equipo
            </li>
            <li className='bg-white rounded-full p-5 text-purple-700 hover:bg-black hover:text-white'>
              Adaptabilidad
            </li>
            <li className='bg-white rounded-full p-5 text-purple-700 hover:bg-black hover:text-white'>
              Creatividad
            </li>
            <li className='bg-white rounded-full p-5 text-purple-700 hover:bg-black hover:text-white'>
              Autodidacta
            </li>
          </ul>
        </section>
      </div>
      <div
        className='w-full h-full text-white flex flex-row items-center justify-center px-7 py-16'
        id='Proyectos'
      >
        <section className='flex flex-col '>
          <h1 className='titulos neon-text'>Recent Proyects</h1>
          <div className='grid grid-cols-2 gap-4'>
            <Card
              titulo='Minimarket- Gestor de ventas'
              descripcion='Proyecto de una tienda online tipo Minimarket, permite realizar venta de productos, 
            llevar visualizacion y control de la ventas, sus modalidades y analisis graficos- Django + Vue'
              url='mercado.jpeg'
              ruta='https://github.com/LuzfernandezG/Tienda-Python'
            />
            <Card
              titulo='Mi portafolio- Luz Angela Fernandez'
              descripcion='Proyecto realizado en React + Tailwing'
              url='portafolio.jpeg'
              ruta='#'
            />
            <Card
              titulo='Restaurante-Asados del oeste'
              descripcion='Pagina web de restaurante de comidas al carbon, con plataforma para gestion de reserva de mesas-Vue'
              url='restaurante.jpeg'
              ruta='https://github.com/LuzfernandezG/Restaurante'
            />
            <Card
              titulo='Festival de musica'
              descripcion='Maquetacion de pagina de venta de boletos para festivales, implementacion de SASS para manejo de estilos'
              url='festival.jpeg'
              ruta='https://github.com/LuzfernandezG/Festival-de-Musica-en-SASS'
            />
            <Card
              titulo='Blog- La Pluma Digital'
              descripcion='plataforma para compartir publicaciones entre la comunidad, permite la visualizacion de usuarios existentes, ranking de
            las mejores publicaciones y uso requerido de usuario (Log in)'
              url='blog.jpeg'
              ruta='https://github.com/LuzfernandezG/La-Pluma-Digital'
            />
          </div>
        </section>
      </div>
      <footer className='bg-white flex justify-center items-center gap-5 p-3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" className='text-black  neon-text'><rect width="512" height="512" fill="none"/><path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-56.6-199.4c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"/></svg>
        <p className='font-bold'> 2025  Creator by: Luz Angela Fernandez</p>
      </footer>
    </>
  )
}

export default Encabezado
