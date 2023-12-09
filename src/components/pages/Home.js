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
            <div id="imageContainer" className="w-full h-200 bg-gray-300 flex items-center justify-center">
                <img id="dynamicImage" className="w-full h-full object-cover" src={imageUrls[currentImageIndex]} alt="Dynamic Image" />
            </div>
            <div className="relative bg-cover bg-center h-auto"id='message' >
                <div className="absolute inset-0 bg-black opacity-50">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Your Text Here
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
