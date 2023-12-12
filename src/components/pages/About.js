import React, { useState } from 'react'
import '../../styles/about.css'
import activityImage from '../../images/REsearch Projects Consultancy Projects.png';
import dean from '../../images/Picture1.jpg'
const About = () => {

    const [tab, setTab] = useState(0);
    return (
        <div className='dem'>
            <div className="btn-group p-2" role="group" aria-label="Basic example">
                <button type="button" onClick={() => setTab(0)} className={`btn btn-secondary ${tab == 0 ? "bg-slate-500" : ""}`}>Dean's Message</button>
                <button type="button" onClick={() => setTab(1)} className={`btn btn-secondary ${tab == 1 ? "bg-slate-500" : ""}`}>SRIC Activities</button>
                <button type="button" onClick={() => setTab(2)} className={`btn btn-secondary ${tab == 2 ? "bg-slate-500" : ""}`}>General Information</button>
                <button type="button" onClick={() => setTab(3)} className={`btn btn-secondary ${tab == 3 ? "bg-slate-500" : ""}`}>Project Guidelines</button>
            </div>

            <div className="container">
                {(tab == 0) && <div className=""  >
                    <div className="flex flex-col justify-between items-center  p-3">
                       <div className=''>
                       <img src={dean} className=''/>
                       </div>
                       <p className='text-white font-bold text-lg pt-2'>Dean SRIC Desk </p>
                        <p className='text-white font-semibold text-xl p-2'>The Institute has research guidelines in place for effective management of on-going research in the Institute. The research activities of the Institute are of strategic importance to the nation, catering to the needs of large/medium/small scale industries in the country, facilitating the needs of the rural sector by dissemination of technology for societal benefit including healthcare and training of the rural people and academic research. IIT Roorkee is further focused on enhancing the industrial research ambience in the Institute through industry interventions. The Institute invites all stakeholders to collaborate with us for cutting edge fundamental and translational research. </p>
                        <p className='text-white font-bold text-lg '>Prof. Akshay Dvivedi </p>
                    </div>
                   
                </div>}
                {(tab == 1) &&
                 <dv className="container">
                  
                    <div className="" >
                    
                        <div className=' p-2 text-white font-serif ' >
                            <p className='text-center font-bold text-3xl p-2 '>SRIC ACTIVITIES</p>
                            <div className="grid sm:grid-rows-3 md:grid-rows-none sm:grid-cols-none md:grid-cols-3 gap-4">
                                <div className="p-4">
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
                                <div className="p-4 ">
                                    <p className='font-semibold text-lg pb-1' >Office ADII</p>
                                    <p className='text-md px-2'>IPR Cell</p>
                                    <p className='text-md px-2'>Institute Innovation Council</p>
                                    <p className='text-md px-2'>Faculty Entrepreneurship Policy </p>
                                    <p className='text-md px-2'>Faculty Startups</p>
                                    <p className='text-md px-2'> Courses/workshops on IPR</p>
                                    <p className='text-md px-2'>TRL Booster scheme</p>
                                    <p className='text-md px-2'>Technology Transfers</p>
                                </div>
                                <div className="p-4 ">
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
                            <img src={activityImage}/>
                        </div>
                    </div>
                </dv>}
                {(tab == 2) && <div className='flex flex-col items-center justify-center h-80 font-sarif'>
                    <p className='text-center font-bold text-3xl p-2   text-white pb-2 '>GENERAL INFORMATION</p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Coordinating IITR representation in events</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Research/Consultancy Projects</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>International Collaboration</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Major Technologies and Products Developed/Technology Transfer/Awards</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Patents</a></p>
                </div>}
                {(tab == 3) && <div className='flex flex-col items-center justify-center b font-sarif'>
                    <p className='text-center font-bold text-3xl p-2   text-white pb-2 '>Project Guidelines</p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Apply for a Project & Endorsement Letter</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Getting Project Number</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>PFMS/DSIR/FERA Certificate</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>GST/TAN/PAN</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Unique ID No.[NGO]</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Tax Invoice</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Tax Exemption</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>SRIC Account Detais/Pay,ents</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Travel for Project Work</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Analysis/Testing</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Request for SE/UC</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Purchase Manual</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>Advance for carrying out Project Work</a></p>
                    <p className="text-xl  px-2 text-white hover:text-red-400 md:font-semibold"><a href=''>PDF Guidelines</a></p>
                </div>}





            </div>

        </div>
    )
}

export default About
