import React from 'react'
import '../../styles/ipr.css'
import patentSteps from '../../images/Patent filling Steps.png'
import patentProcedure from '../../images/Patent filling procedure.jpg'

const Ipr = () => {
  return (
    <div className='dem p-3 flex flex-col '>
       
        <p className='text-center text-white text-3xl font-serif font-bold p-2'>IPR</p>
        <img src={patentSteps} className='h-auto'/>
        <img src={patentProcedure} className='h-auto'/>
    
      
    </div>
  )
}

export default Ipr
