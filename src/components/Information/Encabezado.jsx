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

    <header className={`w-full hidden  md:block md:fixed xl:px-20 opacity-70 md:py-8 transition-colors  ${color}  animacion_inicial`}>
      <nav className='md:flex gap-2 text-white w-full  md:justify-end md:gap-4 p-0 '>
        <li className='list-none'>
          <a className={`enlaces `}  onClick={()=>handleScroll2(1)} >HOME</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces `} onClick={()=>handleScroll2(2)} >ABOUT ME</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces `} onClick={()=>handleScroll2(3)} >APPROACH</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces `} onClick={()=>handleScroll2(4)} >SKILLS</a>
        </li>
        <li  className='list-none'>
          <a className={`enlaces `} onClick={()=>handleScroll2(5)} >PROYECTS</a>
        </li>
        <a href='https://github.com/LuzfernandezG'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='enlaces'><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
        </a>
        <a href='https://www.linkedin.com/in/luz-fernandez-858570244/'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className='enlaces'><rect width="16" height="16" fill="none"/><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>


        </a>


      </nav>
    </header>

      <div className='contenedor-principal flex-col' id='Home'>
        <div className=' flex  items-center justify-center flex-col gap-3 z-30 w-1/4 md:w-full '>
          {/* <Computador ancho='12em' alto='12em' /> */}
          {/* <img src='icono2.png' width="15%" className='giro'/> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 2048 2048" className='giro text-purple-600'><rect width="2048" height="2048" fill="none"/><path fill="currentColor" d="M2048 1039q0 47-21 88t-57 75t-81 63t-92 51t-94 40t-82 28q15 63 24 126t9 127q0 53-9 109t-34 101t-67 75t-108 29q-55 0-112-21t-111-55t-102-72t-87-75q-38 36-86 75t-103 72t-111 54t-112 22q-65 0-107-29t-67-74t-34-102t-10-109q0-64 9-127t24-126q-37-11-82-28t-93-39t-93-51t-80-63t-57-76t-22-88q0-47 21-88t57-75t81-63t92-51t94-40t82-28q-15-63-24-126t-9-127q0-53 9-109t34-101t67-75t108-29q55 0 112 21t111 55t102 72t87 76q38-36 86-75t103-73t111-54t112-22q65 0 107 29t67 74t34 102t10 109q0 64-9 127t-24 126q36 11 82 28t93 39t93 51t80 63t57 76t22 88m-612-816q-43 0-91 20t-94 49t-88 64t-71 62q47 49 88 101t81 107q69 6 136 17t133 27q13-56 21-113t8-114q0-30-4-68t-16-72t-37-57t-66-23m-834 930q-17 41-31 81t-28 83q43 11 86 18t87 13q-31-48-59-96t-55-99m-59-392q13 42 27 83t32 82q26-51 55-99t59-97q-44 6-87 13t-86 18m109 278q80 166 186 322q47 4 93 5t93 2q47 0 93-1t93-6q106-156 186-322q-42-85-87-164t-99-158q-47-3-93-5t-93-2t-93 2t-93 5q-53 78-98 157t-88 165m680 309q44-5 87-12t86-19q-13-42-27-82t-32-82q-26 51-54 99t-60 96m114-422q17-41 31-82t28-83q-43-10-86-17t-87-14q30 48 59 96t55 100m-311-309q-26-35-53-67t-58-65q-30 32-57 64t-54 68q55-3 111-3q55 0 111 3M489 443q0 57 8 114t21 113q66-16 133-27t136-17q39-55 80-107t89-101q-30-28-71-62t-87-63t-95-50t-91-20q-41 0-65 23t-37 56t-17 72t-4 69m-38 849q20-65 44-128t52-125q-28-62-52-125t-44-128q-24 7-59 19t-74 30t-79 40t-71 48t-52 55t-20 61q0 32 19 61t51 55t71 48t79 39t75 30t60 20m161 563q43 0 91-20t94-49t88-63t71-62q-47-49-88-101t-81-108q-68-6-135-17t-134-26q-13 56-21 112t-8 114q0 31 3 69t17 72t37 56t66 23m301-393q52 69 111 132q58-63 111-132q-56 3-111 3q-57 0-111-3m646 173q0-57-8-113t-21-113q-67 15-134 26t-135 17q-39 55-80 107t-89 102q30 28 71 61t87 63t95 50t91 20q41 0 65-22t37-56t17-72t4-70m38-343q24-7 59-19t75-30t79-40t71-48t51-55t20-61q0-32-20-61t-51-55t-71-48t-79-39t-75-30t-59-20q-20 65-44 128t-52 125q28 62 52 125t44 128m-573-62q-39 0-74-15t-60-41t-41-61t-15-74q0-39 15-74t40-60t61-41t74-15q39 0 74 15t60 40t41 61t15 74q0 39-15 74t-40 61t-61 41t-74 15"/></svg>
          <h1 className='titulos neon-text font-bold  animacion_inicial'>
            Luz Angela Fernandez Gutierrez
          </h1>
          <p className='text-white text-3xl neon-text texto'>Web Developer JR</p>
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

      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:h-screen mx-auto items-center justify-center text-white' id='Introduccion'>
      
        <div className='flex flex-col items-center justify-center mx-auto px-36 gap-10 md:w-auto '>
          <h1 className='titulos neon-text'>HELLO EVERYONE</h1>
          <p className='text-justify '>
          As a student of Information Technology in Systems and Software Development in Cali, Colombia, 
          I have been autonomously developing my skills in web development. My passion lies in crafting 
          intuitive and engaging interfaces that enhance user experience and foster seamless interactions 
          with technology.
          </p>
          <button className='boton ' onClick={onButtonClick}>
          MORE INFORMATION
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
        {/* <Persona ancho='300' alto='300' /> */}
        <img  src='icono.png' className=' w-1/3 md:w-1/2'/>

        </div>
       
      </div>

      <div
        className=' w-full h-full md:h-screen items-center justify-center p-7  text-white flex  flex-col gap-11 p-10  '
        id='Enfoques'
      >
        <section className='flex flex-col gap-6 items-center justify-center w-1/2 md:w-3/4 xl:w-full mx-auto '>
          <h1 className='titulos neon-text'>APPROACH</h1>
          <p className='text-justify '>
            I focus on the following areas:
          </p>
        </section>

        <div className='grid  md:grid-cols-2 xl:grid-cols-4 gap-5 p-32 md:p-0 '>
          <Contenedor
            titulo='Frontend Developer'
            descripcion='I leverage technologies like HTML5, CSS3, and JavaScript, along with frameworks such as React, Vue, and NextJS, to craft exceptional user experiences, with responsive and accessible designs. '
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" className=' alineacion_iconos '><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 7.282L19.556 4v12.718L8 20zm0 18.393l11.556-3.282v12.718L8 38.393zm16.889-4.599l11.555-2.854v22.924L24.89 44z"/></svg>}
          />
          <Contenedor
            titulo='Backend Developer'
            descripcion='Basic use of technologies like Node.js and Django for backend development.'

            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className=' alineacion_iconos '><path fill="currentColor" d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71c-.441.525-.755 1.088-.755 1.784c0 .695.314 1.258.755 1.782c.42.499 1.03 1.049 1.766 1.711l1.74 1.564a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598c-.33-.393-.403-.622-.403-.817c0-.196.072-.425.403-.818c.344-.409.875-.889 1.663-1.598zm6.941 5.111a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711c.441.524.755 1.088.755 1.783s-.314 1.259-.755 1.783c-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599c.33-.392.403-.622.403-.817s-.072-.425-.403-.817c-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059"/><path fill="currentColor" d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532" opacity="0.5"/></svg>}
          />
          <Contenedor
            titulo='Data Analyst'
            descripcion='Implementation of relational (MySQL) and NoSQL (Firebase) databases, with Pandas integration in Django and interactive data visualization using Power BI.'
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='alineacion_iconos'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"/><path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"/></g></svg>} 
         />
          <Contenedor
            titulo='support TI'
            descripcion='In the support area, I ensure that systems are operational and users can work uninterrupted, providing effective solutions as needed.'
            icono={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='alineacion_iconos'><path fill="currentColor" d="M12.942 18H11.5q-3.132 0-5.316-2.183T4 10.504t2.183-5.317T11.498 3q1.566 0 2.93.586q1.364.585 2.383 1.604t1.604 2.379T19 10.5q0 2.658-1.33 4.985t-3.436 3.913q-.211.116-.413.133t-.402-.089t-.321-.276t-.127-.408zm-1.406-2.429q.306 0 .52-.216t.213-.523t-.216-.52t-.523-.214t-.52.216t-.214.523t.217.52t.523.214M9.459 8.202q.174.067.347-.009t.283-.245q.205-.339.582-.54q.377-.2.868-.2q.736 0 1.197.385t.46 1.041q0 .406-.197.76t-.672.829q-.644.627-.925 1.076t-.28.872q0 .197.128.336t.31.14t.305-.14q.123-.138.146-.342q.049-.31.335-.688q.287-.379.696-.789q.564-.563.807-1.062t.243-.999q0-1.029-.71-1.655t-1.805-.626q-.736 0-1.356.359q-.621.358-.932.856q-.11.202-.065.388t.235.253"/></svg>}
          />
        </div>
      </div>

      <div
        className='w-full   grid  grid-cols-1 md:grid-flow-col-dense h-full md:flex-row gap-12 text-white  justify-center px-7'
        id='Habilidades'
      >
        <div className='w-full flex items-center justify-center mx-auto p-5'>
        <Skills />
          </div>
       
        <section className='flex flex-col gap-3 items-center justify-center w-full'>
          <h1 className='titulos neon-text'>SOFT SKILLS</h1>
          <ul className=' grid grid-cols-1 mx-auto gap-5'>
            <li className='boton'>Responsibility</li>
            <li className='boton'>Adaptability</li>
            <li className='boton'>Creativity</li>
            <li className='boton'>Self-taught</li>
            <li className='boton'>Teamwork</li>
            <li className='boton'>Critical thinking</li>
          </ul>
        </section>
      </div>
      <div
        className='w-full  text-white flex flex-row items-center justify-center px-7 py-16 mx-auto'
        id='Proyectos'
      >
        <section className='flex flex-col'>
          <h1 className='titulos neon-text w-2/4 mx-auto md:w-auto'>Recent Proyects</h1>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <Card
              titulo='Minimarket- Gestor de ventas'
              descripcion='Project for a minimarket-type store, enabling product sales, visualization and control of sales, modalities, and graphical analysis - Built with Django + Vue'
              url='mercado.jpeg'
              ruta='https://github.com/LuzfernandezG/Tienda-Python'
            />
            <Card
              titulo='Mi portafolio- Luz Angela Fernandez'
              descripcion='Project developed with React + Tailwind'
              url='portafolio.jpeg'
              ruta='#'
            />
            <Card
              titulo='Restaurante-Asados del oeste'
              descripcion='Restaurant website for charcoal-grilled food, featuring a table reservation management platform built with Vue.'
              url='restaurante.jpeg'
              ruta='https://github.com/LuzfernandezG/Restaurante'
            />
            <Card
              titulo='Festival de musica'
              descripcion='Design and layout of a festival ticket sales page, implementing SASS for efficient style management.'
              url='festival.jpeg'
              ruta='https://github.com/LuzfernandezG/Festival-de-Musica-en-SASS'
            />
            <Card
              titulo='Blog- La Pluma Digital'
              descripcion='A community sharing platform that enables users to share posts, view existing users, rank top posts, and requires user authentication (Log in) for access.'
              url='blog.jpeg'
              ruta='https://github.com/LuzfernandezG/La-Pluma-Digital'
            />
          </div>
        </section>
      </div>
      <div className='w-full h-full flex items-center justify-center mx-auto p-10'>
        <section className='contenedor-contacto'>
        <h1 className='titulos neon-text '>CONTACT ME</h1>
        <p><span>Email:</span> Fernandezluz1995@gmail.com</p>
        <p><span>Phone:</span> +57 3153609570</p>
        <p>Cali, Colombia</p>
        

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
