import React from 'react'
import './Tips.css'

export const Tips = () => {
  return (
    <div className='container-tips'>
         <h1 className='titulo'>FIESTA</h1>
         <h2 className='sub-titulo'>TIPS</h2>
         <lord-icon
           src="https://cdn.lordicon.com/ohcuigqh.json"
           trigger="loop"
          colors="primary:#000000,secondary:#9fddea"
          style={{ width: '50px', height: '50px' }}>
        </lord-icon>
       <p>Detalles a tener en cuenta</p>
        <p>Para estas esceneas necesitaremos un DRESS CODE FORMAL</p>
        <div>
            <p>Tips</p>
            <p>Para más tarde estaremos en la tramunatana si eres friolero recomendamos un abrigo</p>
            <p>Para las escenas de baile te recomendamos tus zapatos más cómodos</p>
        </div>
    </div>
  )
}
