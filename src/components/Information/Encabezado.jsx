import React, { useEffect,useState } from 'react'
import './Encabezado.css'
import * as Scroll from 'react-scroll'
import Contenedor from './Contenedores.jsx'
import Card from './Card.jsx'
import pdf from '../../../public/documents/cv luz.pdf'
import Skills from './Skills.jsx'
import { Computador, Persona, Copyrigth } from './iconos.jsx'


function Encabezado () {

  const handleScroll2 = (numero) => {
    const scrollTargets = {
      1: 'Home',
      2: 'Introduccion',
      3: 'Enfoques',
      4: 'Habilidades',
      5: 'Proyectos'
    };
  
    const target = scrollTargets[numero];
  
    Scroll.scroller.scrollTo(target, {
      duration: 1000,
      delay: 500,
      smooth: true
    });
  };

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

  const [color, setColor] = useState('initial');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const homeHeight = document.getElementById('Home').offsetHeight;
    if (scrollPosition > homeHeight) {
      setColor('scroll');
    } else {
      setColor('initial');
    }
  }, [scrollPosition]);

  return (
    <>

    {/* <Barra/> */}

    <header className={`w-full md:fixed xl:px-20 opacity-80 md:py-8 transition-colors ${color}  animacion_inicial`}>
      <nav className='md:flex gap-2 text-white w-full  md:justify-end md:gap-4 p-0 '>
        <li className='list-none'>
          <a className={`enlaces ${color}`}  onClick={()=>handleScroll2(1)} >HOME</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces ${color}`} onClick={()=>handleScroll2(2)} >ABOUT ME</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces ${color}`} onClick={()=>handleScroll2(3)} >APPROACH</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces ${color}`} onClick={()=>handleScroll2(4)} >SKILLS</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces ${color}`} onClick={()=>handleScroll2(5)} >PROYECTS</a>
        </li>
      </nav>
    </header>

      <div className='contenedor-principal flex-col' id='Home'>
        <div className=' flex  items-center justify-center flex-col gap-3 z-30 w-1/4 md:w-full '>
          <Computador ancho='12em' alto='12em' />
          <h1 className='titulos neon-text font-bold  animacion_inicial'>
            Luz Angela Fernandez Gutierrez
          </h1>
          <p className='text-white text-3xl neon-text '>Software Developer JR</p>
          <p className='text-white text-xl neon-text  animacion_inicial'>
            Programmer in process, Always learning new technologies
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6em'
            height='6em'
            viewBox='0 0 24 24'
            className='text-white transition-colors hover:text-black animacion_boton '
            onClick={()=>handleScroll2(2)}
         
          >
            <path
              fill='currentColor'
              d='M12 15.25a.74.74 0 0 1-.53-.22l-5-5A.75.75 0 0 1 7.53 9L12 13.44L16.47 9a.75.75 0 0 1 1.06 1l-5 5a.74.74 0 0 1-.53.25'
            />
          </svg>
        </div>
      </div>

      <div className='grid grid-cols-2 w-full h-screen mx-auto items-center justify-center text-white' id='Introduccion'>
      
        <div className='flex flex-col items-center justify-center mx-auto px-36 gap-10 md:w-auto '>
          <h1 className='titulos neon-text'>HELLO EVERYONE</h1>
          <p className='text-justify '>
            Soy estudiante de Tecnologia en sistemas de informacion y desarrollo
            de software de Cali-Coombia, he desarrolladso dia a dia
            conocimientos en desarrollo web de manera autodidacta, me gusta
            facilitar la experiencia del usuario medienta interfaces atractivas.
          </p>
          <button className='boton animacion_boton ' onClick={onButtonClick}>
            Conocer Mas
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
        <Persona ancho='300' alto='300' />

        </div>
       
      </div>

      <div
        className=' w-full h-screen items-center justify-center p-7  text-white flex  flex-col gap-11 p-10  '
        id='Enfoques'
      >
        <section className='flex flex-col gap-6 items-center justify-center w-1/2 md:w-3/4 xl:w-full mx-auto '>
          <h1 className='titulos neon-text'>APPROACH</h1>
          <p className='text-justify '>
            Me especializo en diseñar y desarrollar aplicaciones y sitios web
            atractivos, funcionales y que sean escalables, buscando siempre
            facilitar la experiencia del usuario en las plataformas digitales.
          </p>
        </section>

        <div className='grid  md:grid-cols-2 xl:grid-cols-4 gap-5 p-32 md:p-0 mt-20'>
          <Contenedor
            titulo='Frontend Developer'
            descripcion=' Uso de Tecnologias como HTML5, CSS3, JavaScript y frameworks como React, Vue y NextJS, para la experiencia de usuario y diseño responsivo y accesible'
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" className=' alineacion_iconos '><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 7.282L19.556 4v12.718L8 20zm0 18.393l11.556-3.282v12.718L8 38.393zm16.889-4.599l11.555-2.854v22.924L24.89 44z"/></svg>}
          />
          <Contenedor
            titulo='Backend Developer'
            descripcion='Uso basico de tecnologias como Node.js y Django para la construccion de backend'

            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className=' alineacion_iconos '><path fill="currentColor" d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71c-.441.525-.755 1.088-.755 1.784c0 .695.314 1.258.755 1.782c.42.499 1.03 1.049 1.766 1.711l1.74 1.564a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598c-.33-.393-.403-.622-.403-.817c0-.196.072-.425.403-.818c.344-.409.875-.889 1.663-1.598zm6.941 5.111a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711c.441.524.755 1.088.755 1.783s-.314 1.259-.755 1.783c-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599c.33-.392.403-.622.403-.817s-.072-.425-.403-.817c-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059"/><path fill="currentColor" d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532" opacity="0.5"/></svg>}
          />
          <Contenedor
            titulo='Data Analyst'
            descripcion='Implementacion de bases de datos relaciones como MySQL y no relacionales coo Firebase, uso de Pandas en Django, ademas de plataformas de visualizacion interactivas como Power BI'
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='alineacion_iconos'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"/><path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"/></g></svg>} 
         />
          <Contenedor
            titulo='support TI'
            descripcion='En el area de soporte, aseguro que los sistemas estén operativos y que los usuarios puedan trabajar sin interrupciones, estando a la disposicion de brindar soluciones efectivas'
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='alineacion_iconos'><path fill="currentColor" d="M12.942 18H11.5q-3.132 0-5.316-2.183T4 10.504t2.183-5.317T11.498 3q1.566 0 2.93.586q1.364.585 2.383 1.604t1.604 2.379T19 10.5q0 2.658-1.33 4.985t-3.436 3.913q-.211.116-.413.133t-.402-.089t-.321-.276t-.127-.408zm-1.406-2.429q.306 0 .52-.216t.213-.523t-.216-.52t-.523-.214t-.52.216t-.214.523t.217.52t.523.214M9.459 8.202q.174.067.347-.009t.283-.245q.205-.339.582-.54q.377-.2.868-.2q.736 0 1.197.385t.46 1.041q0 .406-.197.76t-.672.829q-.644.627-.925 1.076t-.28.872q0 .197.128.336t.31.14t.305-.14q.123-.138.146-.342q.049-.31.335-.688q.287-.379.696-.789q.564-.563.807-1.062t.243-.999q0-1.029-.71-1.655t-1.805-.626q-.736 0-1.356.359q-.621.358-.932.856q-.11.202-.065.388t.235.253"/></svg>}
          />
        </div>
      </div>

      <div
        className='w-full h-screen flex flex-col md:flex-row gap-12 text-white  justify-center px-7'
        id='Habilidades'
      >
        <div className='w-full flex items-center justify-center'>
        <Skills />
          </div>
       
        <section className='flex flex-col gap-3 items-center justify-center w-full'>
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
        className='w-full  text-white flex flex-row items-center justify-center px-7 py-16 mx-auto'
        id='Proyectos'
      >
        <section className='flex flex-col'>
          <h1 className='titulos neon-text w-2/4 mx-auto md:w-auto'>Recent Proyects</h1>
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 p-5'>
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
      <Copyrigth ancho="1.5em" alto="2em" /> 

        <p className='font-bold'> 2025 Creator by: Luz Angela Fernandez</p>
      </footer>
    </>
  )
}

export default Encabezado
