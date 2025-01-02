import React from 'react'
import './Encabezado.css'
import * as Scroll from 'react-scroll'
import Contenedor from './Contenedores.jsx'
import Card from './Card.jsx'
import pdf from '../../../public/documents/cv luz.pdf'
import Skills from './Skills.jsx'
import { Computador, Persona, Copyrigth } from './iconos.jsx'

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
    fetch(pdf).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)

        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'CV Luz Fernandez.pdf'
        alink.click()
      })
    })
  }

  return (
    <>
      <div className='contenedor-principal flex-col' id='Home'>
        <div className=' flex  items-center justify-center flex-col gap-3 z-30'>
          <Computador ancho='12em' alto='12em' />
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

      <div className='contenedor-principal px-20  text-white' id='Introduccion'>
        <Persona ancho='300' alto='300' />
        <div className='flex flex-col items-center justify-center px-36 gap-10'>
          <h1 className='titulos neon-text'>HELLO EVERYONE</h1>
          <p className='text-justify '>
            Soy estudiante de Tecnologia en sistemas de informacion y desarrollo
            de software de Cali-Coombia, he desarrolladso dia a dia
            conocimientos en desarrollo web de manera autodidacta, me gusta
            facilitar la experiencia del usuario medienta interfaces atractivas.
          </p>
          <button className='boton' onClick={onButtonClick}>
            Conocer Mas
          </button>
        </div>
      </div>

      <div
        className='w-full h-screen items-center justify-center px-7  text-white '
        id='Enfoques'
      >
        <section className='flex flex-col gap-6 items-center justify-center'>
          <h1 className='titulos neon-text'>APPROACH</h1>
          <p className='text-justify'>
            Me especializo en diseñar y desarrollar aplicaciones y sitios web
            atractivos, funcionales y que sean escalables, buscando siempre
            facilitar la experiencia del usuario en las plataformas digitales.
          </p>
        </section>

        <div className='flex gap-7 p-10'>
          <Contenedor
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
        id='Habilidades'
      >
        <Skills />
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>SOFT SKILLS</h1>
          <ul className=' grid grid-cols-1 mx-auto gap-5'>
            <li className='icono'>Responsabilidad</li>
            <li className='icono'>Trabajo en equipo</li>
            <li className='icono'>Adaptabilidad</li>
            <li className='icono'>Creatividad</li>
            <li className='icono'>Autodidacta</li>
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
        <Copyrigth ancho='20' alto='20' />

        <p className='font-bold'> 2025 Creator by: Luz Angela Fernandez</p>
      </footer>
    </>
  )
}

export default Encabezado
