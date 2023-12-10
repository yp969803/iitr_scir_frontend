import React from 'react'
import sric_image from '../../images/main webslide_SRIC.png';
import banner from '../../images/banner.png'
import cropped from '../../images/cropped-iitr-1-1.jpg'
import iitrCampus from '../../images/IITR Campus Updated.png'
import { useState, useEffect } from 'react';
import "../../styles/home.css"

const Home = () => {
    const imageUrls = [
        sric_image,
        banner,
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000);


        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <div id="imageContainer" className="w-full h-200 bg-gray-300 flex items-center justify-center ">
                <img id="dynamicImage" className="w-full h-full object-cover" src={imageUrls[currentImageIndex]} alt="Dynamic Image" />
            </div>
            <div className="relative h-80" id='message' >
                <div className="absolute inset-0 bg-black opacity-50">
                    <div className="absolute inset-0  items-center justify-center text-white md:text-2xl sm:text-sm font-bold md:p-2 ">
                        <p className='text-center'>WELCOME TO SRIC</p>
                        <p className='text-center md:px-3 md:p-2'> Indian Institute of Technology Roorkee (IITR) recognizes Sponsored Research (SR) and Industrial Consultancy (IC) as the essential attributes of research and development. A full-fledged office operating under Dean (SRIC) provides administrative and accounting support to the faculty undertaking sponsored research and consultancy work.

                            Sponsored Research (SR) and Industrial Consultancy (IC) plays a strong promotional role by liaising with industry and government organizations, providing IPR support and internal research grants to the faculty.</p>
                    </div>
                </div>
            </div>
            <div className='bg-blue-200 p-2 text-blue-700 font-serif '>
                <p className='text-center font-bold text-3xl p-2 '>SCIR ACTIVITIES</p>
                <div className="grid grid-cols-3 gap-4">
                    <div class="p-4">
                        <p className='font-semibold ' >Office of Dean SCIR</p>
                      
                    </div>
                    <div class="p-4 ">
                       
                        Column 2
                    </div>
                    <div class="p-4 ">
                       
                        Column 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
