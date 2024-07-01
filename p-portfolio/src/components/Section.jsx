import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'


function Section() {
    useEffect(()=>{
        Aos.init({})
    },[])
  return (
    <section>
        <div data-aos='fade-down' className='h-[calc(100vh-80px)] w-full'>
            <div data-aos='zoom-in' data-aos-duration='1500' className='h-full w-full justify-center flex flex-wrap items-center flex-col gap-7 px-16'>
                <span className='text-2xl font-bold text-white bg-[#c1a836] py-1 px-4 rounded-md'>Shivam Negi</span>
                <h1 className='font-extrabold text-6xl'>I'm <span className='text-[#1e9fab]'>Frontend Developer</span></h1>
                <p className='text-2xl text-center font-semibold'>Experienced frontend developer with a <br /> passion for creating visually stunning and user-friendly websites. </p>
                <div className='flex gap-7 '>
                    <button data-aos='fade-right' data-aos-duration='1900' className='bg-[#6E57E0] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#285BD4] duration-300'>Hire Me</button>
                    <button data-aos='fade-left' data-aos-duration='1900' className='bg-gray-200 px-6 py-2 rounded-md font-semibold hover:bg-[#00C9FF] hover:text-white duration-300 '>Download CV <i class="uil uil-file-alt"></i></button>
                </div>
                <div className='flex flex-wrap items-center justify-center w-full h-12 gap-6 text-2xl'>
                    <div className='justify-center flex w-10 h-10 bg-slate-200 rounded-[50%] items-center hover:text-[#6E57E0] cursor-pointer duration-300'><i class="uil uil-instagram"></i></div>
                    <div className='flex items-center justify-center w-10 h-10 bg-slate-200 rounded-[50%] hover:text-[#6E57E0] cursor-pointer duration-300'><i class="uil uil-linkedin-alt"></i></div>
                    <div className='flex items-center justify-center w-10 h-10 bg-slate-200 rounded-[50%] hover:text-[#6E57E0] cursor-pointer duration-300'><i class="uil uil-github-alt"></i></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section