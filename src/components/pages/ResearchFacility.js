import React from 'react'
import resImage from '../../images/Research project guideline.png'
const ResearchFacility = () => {
  return (
    <div className='bg-cover bg-center h-screen' id='download'>
     <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4'>Research Facility</p>
     <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://www.istem.gov.in/'>1. I-STEM </a></p> 
     <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://iicbooking.iitr.ac.in/'>2. IIC </a></p>
     <p className="text-xl md:text-3xl  px-2 text-center text-white hover:text-grey-400 md:font-semibold py-2"><a href='https://iicbooking.iitr.ac.in/'>3. Tinkering Lab </a></p>
     
     <img src={resImage} className='py-2 px-5' id='dem'/>
   
    </div>
  )
}

export default ResearchFacility
