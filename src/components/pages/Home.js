import React from 'react'
import sric_image from '../../images/main webslide_SRIC.png';
import banner from '../../images/banner.png'
import cropped from '../../images/cropped-iitr-1-1.jpg'
import iitrCampus from '../../images/IITR Campus Updated.png'
import { useState, useEffect } from 'react';
import "../../styles/home.css"
import activityImage from '../../images/REsearch Projects Consultancy Projects.png';
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
            <img src={activityImage} className="img-fluid"/>
            <div className="" id="backImage">
            <div className=' p-2 text-white font-serif ' >
                <p className='text-center font-bold text-3xl p-2 '>SRIC ACTIVITIES</p>
                <div className="grid sm:grid-rows-3 md:grid-rows-none sm:grid-cols-none md:grid-cols-3 gap-4">
                    <div class="p-4">
                        <p className='font-semibold text-lg pb-1' >Office of Dean SCIR</p>
                        <p className='text-md px-2'>Research Projects</p>
                        <p className='text-md px-2'>Consultancy Projects</p>
                        <p className='text-md px-2'>Faculty Initiation Grant (FIG)</p>
                        <p className='text-md px-2'>Matching Grant</p>
                        <p className='text-md px-2'>R & D Newsletter</p>
                        <p className='text-md px-2'>MoU's MoA's</p>
                        <p className='text-md px-2'>CEC and ELC</p>
                        <p className='text-md px-2'>ISRO-Space Technology Cell</p>
                        <p className='text-md px-2'>Tinkering Lab</p>
                        <p className='text-md px-2'>Industry-Academia linkage</p>
                        <p className='text-md px-2'>IPR management</p>
                        <p className='text-md px-2'>IPR management</p>
                        <p className="text-md px-2">Coordination with TIDES & TIH</p>
                        <p className="text-md px-2">Conference/Workshop</p>
                        <p className="text-md px-2">Projects through Internal Resources</p>
                        <p className="text-md px-2">Student Technical Council (STC)</p>

                    </div>
                    <div class="p-4 ">
                    <p className='font-semibold text-lg pb-1' >Office ADII</p>
                    <p className='text-md px-2'>IPR Cell</p>
                    <p className='text-md px-2'>Institute Innovation Council</p>
                    <p className='text-md px-2'>Faculty Entrepreneurship Policy </p>
                    <p className='text-md px-2'>Faculty Startups</p>
                    <p className='text-md px-2'> Courses/workshops on IPR</p>
                    <p className='text-md px-2'>TRL Booster scheme</p>
                    <p className='text-md px-2'>Technology Transfers</p>                                     
                    </div>
                    <div class="p-4 ">
                    <p className='font-semibold text-lg pb-1' >Office of Dean SCIR</p>
                    <p className="text-md px-2">Industry-Academia Interaction</p>
                    <p className="text-md px-2">Opportunities for faculty and students</p>
                    <p className="text-md px-2">Coordinating MoUs and MoAs</p>
                    <p className="text-md px-2">Fellowships and work-studentships</p>
                    <p className="text-md px-2">Institute application for awards CII</p>
                    <p className="text-md px-2">Coordinating IITR representation in events</p>
                    <p className="text-md px-2">I-STEM</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center  font-sarif'>
            <p className='text-center font-bold text-3xl p-2   text-white pb-2 '>GENERAL INFORMATION</p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/files/R&D_Brochure.pdf'>Coordinating IITR representation in events</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/sponsored-projects.php'>Research/Consultancy Projects</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href=''>International Collaboration</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/files/Major Technologies Developed.pdf'>Major Technologies and Products Developed/Technology Transfer/Awards</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/files/Patent_Details_2018_onwards.pdf'>Patents</a></p>
            </div>
            <div className='flex flex-col items-center justify-center b font-sarif'>
            <p className='text-center font-bold text-3xl p-2   text-white pb-2 '>Project Guidelines</p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg2'>Apply for a Project & Endorsement Letter</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg3'>Getting Project Number</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg5'>PFMS/DSIR/FERA Certificate</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg6'>GST/TAN/PAN</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/files/Patent_Details_2018_onwards.pdf'>Unique ID No.[NGO]</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg8'>Tax Invoice</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg98'>Tax Exemption</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href=''>SRIC Account Detais/Pay,ents</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg13'>Travel for Project Work</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg14'>Analysis/Testing</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/roject-guideline.php#pg15'>Request for SE/UC</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg16'>Purchase Manual</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg17'>Advance for carrying out Project Work</a></p>
            <p className="text-xl  px-2 text-red-500 hover:text-red-400 md:font-semibold"><a href='https://people.iitism.ac.in/~research/project-guideline.php#pg18'>PDF Guidelines</a></p>
            </div>
           
            </div>
        </div>
    )
}

export default Home
