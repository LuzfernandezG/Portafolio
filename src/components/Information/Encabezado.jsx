import React from 'react'
import './Encabezado.css'
import * as Scroll from 'react-scroll'
import Contenedor from './Contenedores.jsx'
import LineaPorcentaje from './LineaPorcentaje.jsx'
function Encabezado () {
  const handleScroll = () => {
    Scroll.scroller.scrollTo('Introduccion', {
      duration: 1000,
      delay: 500,
      smooth: true
    })
  }

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center '>
        <div className=' flex  items-center justify-center flex-col gap-3 z-30'>
          {/* <img src='../public/desarrollador.png' /> */}
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

          <p className='text-white text-3xl neon-text'>Software Developer</p>
          <p className='text-white text-xl neon-text'>
            Programadora en proceso, Always learning new technologies
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
        className='w-full h-screen text-white grid grid-cols-2 items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>HOLA A TODOS </h1>
          <p className='text-justify'>
            Holaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, quisquam velit quos, dignissimos delectus accusantium,
            praesentium sunt soluta facilis est facere qui. Recusandae earum
            adipisci accusamus dignissimos mollitia nemo officiis.
          </p>
          <button className='bg-white p-2 rounded-2xl text-black font-bold'>
            Mas Informacion
          </button>
        </section>
        <div className='flex items-center justify-center'>
          <img src='../public/desarrollador.png' className='w-52 h-52' />
        </div>
        '{' '}
      </div>

      <div
        className='w-full h-screen text-white items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>Enfoques </h1>
          <p className='text-justify'>
            Holaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, quisquam velit quos, dignissimos delectus accusantium,
            praesentium sunt soluta facilis est facere qui. ' Recusandae earum
            adipisci accusamus dignissimos mollitia nemo officiis.
          </p>
        </section>

        <div className='flex gap-7 p-10'>
          <Contenedor
            titulo='titulo1'
            descripcion='Holaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam velit quos, dignissimos delectus accusantium, praesentium sunt soluta facilis est facere qui.
                        Recusandae earum adipisci accusamus dignissimos mollitia nemo officiis'
          />
          <Contenedor
            titulo='titulo2'
            descripcion='Holaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam velit quos, dignissimos delectus accusantium, praesentium sunt soluta facilis est facere qui.
                        Recusandae earum adipisci accusamus dignissimos mollitia nemo officiis'
          />
          <Contenedor
            titulo='titulo3'
            descripcion='Holaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam velit quos, dignissimos delectus accusantium, praesentium sunt soluta facilis est facere qui.
                        Recusandae earum adipisci accusamus dignissimos mollitia nemo officiis'
          />
        </div>
      </div>

      <div
        className='w-full h-screen flex gap-12 text-white items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>Habilidades Tecnicas</h1>

          <LineaPorcentaje
            porcentaje={20}
            habilidad={'HTML'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <g fill='none'>
                  <g fill='currentColor' clip-path='url(#akarIconsHtmlFill0)'>
                    <path d='M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z' />
                    <path
                      fill-rule='evenodd'
                      d='M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z'
                      clip-rule='evenodd'
                    />
                  </g>
                  <defs>
                    <clipPath id='akarIconsHtmlFill0'>
                      <path fill='#fff' d='M0 0h24v24H0z' />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={20}
            habilidad={'CSS'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z'
                />
                <path
                  fill='currentColor'
                  fill-rule='evenodd'
                  d='m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z'
                  clip-rule='evenodd'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={90}
            habilidad={'Java Script'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                >
                  <path d='m20 4l-2 14.5l-6 2l-6-2L4 4z' />
                  <path d='M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5' />
                </g>
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={20}
            habilidad={'Tailwind'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 15 15'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linejoin='round'
                  d='M7.5 3Q4.7 3 4 6q1.05-1.5 2.45-1.125c.533.143.913.557 1.334 1.015C8.471 6.636 9.265 7.5 11 7.5q2.8 0 3.5-3q-1.05 1.5-2.45 1.125c-.533-.143-.913-.557-1.334-1.015C10.029 3.864 9.235 3 7.5 3ZM4 7.5q-2.8 0-3.5 3Q1.55 9 2.95 9.375c.533.143.913.557 1.334 1.015C4.971 11.136 5.765 12 7.5 12q2.8 0 3.5-3q-1.05 1.5-2.45 1.125c-.533-.143-.913-.557-1.334-1.015C6.529 8.364 5.735 7.5 4 7.5Z'
                  clip-rule='evenodd'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={20}
            habilidad={'SASS'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 640 512'
              >
                <path
                  fill='currentColor'
                  d='M301.84 378.92c-.3.6-.6 1.08 0 0m249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.3-6.7s-24 2.5-25.29 5.9a123 123 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3c-4.4-8.5-8.1-16-8.9-22c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.29-6.7s-24 2.5-25.3 5.9s-2.7 11.4-5.3 19.1s-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6c-.4.8-.7 1.3-.9 1.7c.3-.5.5-1 .5-.8c-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1c-.6 0-1.9-8.4.3-19.9c4.7-24.2 15.8-61.8 15.7-63.1c-.1-.7 2.1-7.2-7.3-10.7c-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2s10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5c-7.9 4.3-25 13.6-43 23.5c-6.9 3.8-14 7.7-20.7 11.4c-.5-.5-.9-1-1.4-1.5c-35.79-38.2-101.87-65.2-99.07-116.5c1-18.7 7.5-67.8 127.07-127.4c98-48.8 176.35-35.4 189.84-5.6c19.4 42.5-41.89 121.6-143.66 133c-38.79 4.3-59.18-10.7-64.28-16.3c-5.3-5.9-6.1-6.2-8.1-5.1c-3.3 1.8-1.2 7 0 10.1c3 7.9 15.5 21.9 36.79 28.9c18.7 6.1 64.18 9.5 119.17-11.8c61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4c-48.69 45.6-56.48 85.3-53.28 101.9c11.39 58.9 92.57 97.3 125.06 125.7c-1.6.9-3.1 1.7-4.5 2.5c-16.29 8.1-78.18 40.5-93.67 74.7c-17.5 38.8 2.9 66.6 16.29 70.4c41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8c4.2-2.5 8.5-5 12.8-7.5c8.29-4.9 16.39-9.4 23.49-13.3c-4 10.8-6.9 23.8-8.4 42.6c-1.8 22 7.3 50.5 19.1 61.7c5.2 4.9 11.49 5 15.39 5c13.8 0 20-11.4 26.89-25c8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46c16.2-31.8 31.69-71.5 31.69-71.5a201 201 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30c-3.8 5.2-6.1 8.2-6.1 8.2a.3.3 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5c-12.79 15.2-28 32.6-30 37.6c-2.4 5.9-1.8 10.3 2.8 13.7c3.4 2.6 9.4 3 15.69 2.5c11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8c-.4-9.6-3.5-19.2-7.3-28.2c1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201 201 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7c-18.59 15.1-30.09 32.6-34.09 44.1c-7.4 21.3-1.6 30.9 9.3 33.1c4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6c-.3-7.9-2.5-15.8-5.4-23.4c15.7-6.6 36.09-10.2 62.09-7.2c55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25s-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9c4.6-.8 29.19-11.8 30.29-38.7c1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4c2.7-1.6 6.6-4 11.4-6.9c.8-.5 1.2-.7 1.2-.7c.9-.6 1.9-1.1 2.9-1.7c8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6c-7-1.8-11.3-32.3-1.4-62.3c5-15.1 15.6-33.1 21.9-40.1c10.09-11.3 21.19-14.9 23.79-10.4c3.5 5.9-12.2 49.4-16.2 59.2m111 53c-2.7 1.4-5.2 2.3-6.4 1.6c-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9c0 .5.1 1 .1 1.6c-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7c2.6-5.7 8.59-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={20}
            habilidad={'React'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a321 321 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9m-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a488 488 0 0 0-64.18-10.16a481 481 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435 435 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47m0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440 440 0 0 1 16.12 42.32a434 434 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48m13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a440 440 0 0 1-15.37 41.39m-98.24-107.45a440 440 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18M145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491 491 0 0 0 201 160.51a499 499 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83m-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.5 493.5 0 0 0 23.4 60.75a502.5 502.5 0 0 0-23.69 61.58m111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a481 481 0 0 0 64.69 9.39a501 501 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48m23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439 439 0 0 1-28.2 34.74m124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.5 484.5 0 0 0 40.23-51.2a478 478 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47m17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483 483 0 0 0-24.31-60.94a481.5 481.5 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52'
                />
                <path
                  fill='currentColor'
                  d='M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={50}
            habilidad={'Node JS'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 15 15'
              >
                <path
                  fill='currentColor'
                  fill-rule='evenodd'
                  d='M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2'
                  clip-rule='evenodd'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={50}
            habilidad={'Next JS'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M23.749 30.005c-.119.063-.109.083.005.025a.3.3 0 0 0 .095-.061c0-.021 0-.021-.1.036m.24-.13c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.047c0-.027-.016-.021-.079.031m.156-.094c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.048c0-.025-.016-.02-.079.032m.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032m.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.8 15.8 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a341 341 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416 416 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.57.57 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.6.6 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.8.8 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a603 603 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.4 16.4 0 0 0 3.285-2.885a15.94 15.94 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333s-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a17 17 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.62.62 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={80}
            habilidad={'Vue'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 16 16'
              >
                <g
                  fill='none'
                  stroke='#a6da95'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='M1 1.5h5.44L8 4.56L9.56 1.5H15l-6.99 13z' />
                  <path d='M12.05 1.73L8 9.28L3.95 1.73' />
                </g>
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={15}
            habilidad={'Python'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <g fill='none'>
                  <g fill='currentColor' clip-path='url(#akarIconsPythonFill0)'>
                    <path d='M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969s3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0M8.708 1.85c.578 0 1.046.47 1.046 1.052c0 .581-.468 1.051-1.046 1.051s-1.046-.47-1.046-1.051c0-.582.467-1.052 1.046-1.052' />
                    <path d='M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735s-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24m3.206-1.85c-.579 0-1.046-.47-1.046-1.052c0-.581.467-1.051 1.046-1.051c.578 0 1.046.47 1.046 1.051c0 .582-.468 1.052-1.046 1.052' />
                  </g>
                  <defs>
                    <clipPath id='akarIconsPythonFill0'>
                      <path fill='#fff' d='M0 0h24v24H0z' />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={15}
            habilidad={'Django'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  fill-rule='evenodd'
                  d='M15.172 0h-4.176v5.932a7.2 7.2 0 0 0-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268c1.703 0 3.278-.15 5.417-.53zM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1c-2.14 0-3.305-1.142-3.305-3.21c0-2.125 1.22-3.338 3.331-3.338'
                  clip-rule='evenodd'
                />
                <path
                  fill='currentColor'
                  d='M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786c-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88c.726-1.288.973-2.782.973-5.887M21.585 0h-4.176v3.993h4.176z'
                />
              </svg>
            }
          />
          <LineaPorcentaje
            porcentaje={90}
            habilidad={'SQL'}
            icono={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M18.68 12.32a4.49 4.49 0 0 0-6.36.01a4.49 4.49 0 0 0 0 6.36a4.51 4.51 0 0 0 5.57.63L21 22.39L22.39 21l-3.09-3.11c1.13-1.77.87-4.09-.62-5.57m-1.41 4.95c-.98.98-2.56.97-3.54 0c-.97-.98-.97-2.56.01-3.54c.97-.97 2.55-.97 3.53 0c.97.98.97 2.56 0 3.54M10.9 20.1a6.5 6.5 0 0 1-1.48-2.32C6.27 17.25 4 15.76 4 14v3c0 2.21 3.58 4 8 4c-.4-.26-.77-.56-1.1-.9M4 9v3c0 1.68 2.07 3.12 5 3.7v-.2c0-.93.2-1.85.58-2.69C6.34 12.3 4 10.79 4 9m8-6C7.58 3 4 4.79 4 7c0 2 3 3.68 6.85 4h.05c1.2-1.26 2.86-2 4.6-2c.91 0 1.81.19 2.64.56A3.22 3.22 0 0 0 20 7c0-2.21-3.58-4-8-4'
                />
              </svg>
            }
          />
        </section>
        <section className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='titulos neon-text'>Habilidades Blandas</h1>
          <ul className=' grid grid-cols-2 mx-auto gap-5'>
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
        className='w-full h-screen text-white flex items-center justify-center px-7'
        id='Introduccion'
      >
        <section className='flex '>
          <h1 className='titulos neon-text'>Ultimos Proyectos </h1>
         
     
        </section>
       
        
      </div>

    </>
  )
}

export default Encabezado
