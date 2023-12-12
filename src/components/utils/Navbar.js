import React, { useEffect, useState } from 'react'
import logo from '.././../images/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/nav.css'
const Navbar = () => {

  let [open, setOpen] = useState(false);

  const location = useLocation()
 
  return (
    <>
      <div className='shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between  bg-white py-3 md:px-10 px-7'>
          <div className='font-bold test-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <img src={logo} alt="logo" className="w-30 h-10" />
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <i className={`bi bi-${open ? "x" : "list"}`} ></i>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 ${open?"static":"absolute"} md:static bg-white md:z-auto ${open?"z-[20]":"z-[-1]"} left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            <li key={"home"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/"} className={`${location.pathname=="/"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Home</Link>

            </li>
            <li key={"about"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/about"} className={`${location.pathname=="/about"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>About us</Link>

            </li>

            <li key={"researchSupport"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/research"} className={`${location.pathname=="/research"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Research</Link>

            </li>
           
            <li key={"studentCorner"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/studentCorner"} className={`${location.pathname=="/studentCorner"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Student's Corner</Link>

            </li>
            
            <li key={"peoples"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/peoples"} className={`${location.pathname=="/peoples"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Peoples</Link>

            </li>
            <li key={"ipr"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/ipr"} className={`${location.pathname=="/ipr"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>IPR</Link>

            </li>
           
            <li key={"download"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/download"} className={`${location.pathname=="/download"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Downloads</Link>

            </li>
            <li key={"contact"} className='md:ml-4 text-l md:my-0 my-7'>
              <Link to={"/contact"} className={`${location.pathname=="/contact"?"text-blue-500":"text-gray-800"} hover:text-gray-400 duration-500`}>Contact Us</Link>
            </li>
          </ul>

        </div>
      </div>
    </>

  )
}

export default Navbar
