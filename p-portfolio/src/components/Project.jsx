import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'


function Project() {

  return (
    <section className='w-full px-16 h-screen flex flex-col items-center justify-evenly'>
        <div data-aos='fade-down' data-aos-duration='1000' className=' flex justify-center items-center'>
            <h1 className='font-extrabold text-5xl'>Projects</h1>
        </div>
        <div className='flex w-full flex-wrap items-start gap-64 justify-center'>
            <div data-aos='fade-dowm' data-aos-duration='1300'  className='bg-white shadow-2xl rounded-xl duration-1000  px-6 py-8 max-w-[33%]  flex flex-col flex-wrap items-center gap-4 text-center cursor-pointer hover:bg-[#b3a7f0] hover:text-white'>
                <span className='text-5xl text-[#00C9FF]'><i class="uil uil-briefcase-alt"></i></span>
                <h3 className='mt-4 font-extrabold text-xl'>Completed</h3>
                <label className='font-medium mb-5'>15+ Finished Projects</label>
            </div>
            <div data-aos='fade-dowm' data-aos-duration='1600' className='bg-white shadow-2xl rounded-xl px-6 py-8 max-w-[33%] flex flex-col flex-wrap items-center gap-4 text-center cursor-pointer hover:bg-[#b3a7f0] hover:text-white'>
                <span className='text-5xl text-[#00C9FF]'><i class="uil uil-users-alt"></i></span>
                <h3 className='mt-4 font-extrabold text-xl'>Clients</h3>
                <label className='font-medium mb-5'>25+ Happy Clients</label>
            </div>
            <div data-aos='fade-dowm' data-aos-duration='1900' className='bg-white shadow-2xl rounded-xl px-6 py-8 max-w-[33%] flex flex-col items-center gap-4 text-center cursor-pointer  hover:bg-[#b3a7f0] hover:text-white'>
                <span className='text-5xl text-[#00C9FF]'><i class="uil uil-award"></i></span>
                <h3 className='mt-4 font-extrabold text-xl'>Experience</h3>
                <label className='font-medium mb-5'>7+ Years in the field</label>
            </div>
        </div>
    </section>
  )
}

export default Project