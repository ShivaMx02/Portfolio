import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

function About() {
    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <div className='h-screen w-full px-16 flex items-center justify-evenly flex-col'>
        <div data-aos='fade-down' data-aos-duration='1000' className=' flex justify-center items-center'>
            <h1 className='font-extrabold text-5xl'>About Me</h1>
        </div>
        <div className='w-full flex flex-wrap gap-2'>
            <div data-aos='fade-right' data-aos-duration='1500' className='px-6 py-8 w-full flex flex-col flex-wrap max-w-[45%] items-center gap-4 rounded-md shadow-2xl text-center'>
                <h3 className='mb-8 font-extrabold text-2xl'>My Introduction</h3>
                <p className='font-medium mb-5'>I am well-versed in HTML, CSS and JavaScript , and other cutting edge frameworks and libraries,which allows me to implement interactive features. </p>
                <button className='bg-[#6E57E0] text-white px-6 py-2 rounded-3xl font-semibold hover:bg-[#285BD4] duration-300'>Download CV <i class="uil uil-import"></i></button>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className='px-6 py-8 flex flex-col flex-wrap rounded-md '>
                <div><h3 className='mb-8 font-extrabold text-2xl'>Frontend</h3></div>
                <div className='flex flex-wrap max-w-[90%] gap-2 font-medium'>                        
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>HTML</span>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>CSS</span>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>Tailwind css</span>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>JavaScript</span>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>React</span>
                </div>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className='px-6 py-8 max-w-[30%] flex flex-col flex-wrap rounded-md '>
                <div><h3 className='mb-8 font-extrabold text-2xl'>Database</h3></div>
                <div  className='flex flex-wrap gap-2 font-medium'>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>MySQL</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About