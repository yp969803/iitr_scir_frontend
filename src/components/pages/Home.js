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
            <div class="flex md:flex-row flex-col p-2 bg-gray-500">
                <div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">Sponsored Projects</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">Consultancy Projects</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div><div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">No. of Faculty Members</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div><div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">No. of Research Scholars</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div><div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">No. of Project Staff</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div><div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">Technology Transfer</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-gray-500">
                    <div class="card bg-gray-500">
                        <div class="card-body bg-gray-500 text-white">
                            <h5 class="card-title font-bold text-xl">Patents</h5>
                            <p class="card-text text-lg">0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="row">
                    <div class="col-8">
                        <p className='text-xl  font-bold'>Recent Activities</p>
                        <div className="flex md:flex-row flex-col p-2">
                            <div class="flex-1 bg-gray-500">
                                <div class="card bg-gray-500">
                                    <div class="card-body bg-gray-500 text-white">
                                        <h5 class="card-title font-bold text-xl"></h5>
                                        <p class="card-text text-lg"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col p-2">
                            <div class="flex-1 bg-gray-500">
                                <div class="card bg-gray-500">
                                    <div class="card-body bg-gray-500 text-white">
                                        <h5 class="card-title font-bold text-xl"></h5>
                                        <p class="card-text text-lg"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col p-2">
                            <div class="flex-1 bg-gray-500">
                                <div class="card bg-gray-500">
                                    <div class="card-body bg-gray-500 text-white">
                                        <h5 class="card-title font-bold text-xl"></h5>
                                        <p class="card-text text-lg"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col p-2">
                            <div class="flex-1 bg-gray-500">
                                <div class="card bg-gray-500">
                                    <div class="card-body bg-gray-500 text-white">
                                        <h5 class="card-title font-bold text-xl"></h5>
                                        <p class="card-text text-lg"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                            <p className='text-xl font-bold'>News</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
