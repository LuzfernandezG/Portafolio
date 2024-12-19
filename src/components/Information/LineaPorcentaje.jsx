import React from 'react'

function LineaPorcentaje ({ porcentaje, habilidad,icono }) {
  return (
    <>
      <div className='flex gap-3 p-3 w-full'>
        <section className='flex gap-1'>
        {icono}
        <h2>{habilidad}</h2>
        </section>
        <svg width='100%' height='10'>
          <rect
            x='0'
            y='0'
            width={porcentaje + '%'}
            height='10'
            fill='white'
            rx='5'
          />
          <rect
            x='0'
            y='0'
            width='100%'
            height='10'
            fill='gray'
            rx='5'
            opacity='0.5'
          />
        </svg>
      </div>
    </>
  )
}

export default LineaPorcentaje
