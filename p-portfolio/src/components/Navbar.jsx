import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

function Navbar() {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
  return (
    <nav data-aos='fade-down' className='w-full h-20 flex flex-wrap items-center justify-between text-center px-24 py-3text-black shadow-md'>
        <div>
            <p className='text-3xl font-extrabold text-[#1e9fab]'>Shivam.</p>
        </div>
        <div>
            <ul className='flex flex-wrap items-center justify-center gap-20 tracking-widest font-semibold text-lg '>
                <li className='hover:text-[#6E57E0]'><a href="#home">Home</a></li>
                <li className='hover:text-[#6E57E0]'><a href="#about" >About</a></li>
                <li className='hover:text-[#6E57E0]'><a href="#projects" >Projects</a></li>
                <li className='hover:text-[#6E57E0]'><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div>
            <button className='bg-gray-200 px-6 py-2 rounded-md font-semibold hover:bg-[#00C9FF] hover:text-white duration-300 '>Download CV <i class="uil uil-file-alt"></i></button>
        </div>
      </nav>
  )
}

export default Navbar