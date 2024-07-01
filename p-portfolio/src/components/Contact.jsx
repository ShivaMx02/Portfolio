import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'


function Contact() {
    useEffect(()=>{
        Aos.init({})
    },[])
  return (
    <section className='w-full h-screen flex flex-col justify-center px-16 items-center overflow-hidden gap-24'>
        <div data-aos='fade-down' data-aos-duratio='1000' className='flex flex-col flex-wrap w-full items-center mt-6'>
            <h1 className='font-extrabold text-5xl'> Get in touch </h1>
            <p className='font-medium mt-4'>  Do you have a project in your mind, contact me here </p>
        </div>
        <div data-aos='fade-down' data-aos-duratio='1500' className='flex flex-wrap items-center justify-between w-full h-[99%] gap-4'>
            <div data-aos='fade-right' data-aos-duratio='1500'  className='w-[48%] h-[100%] flex flex-col items-center justify-center shadow-xl duration-300 text-white bg-[#00C9FF] rounded-xl hover:bg-white hover:text-black'>
                <h1 className='font-extrabold text-4xl'> Find Me <i class="uil uil-corner-right-down"></i> </h1>
                <p className='font-medium mt-8'> <i class="uil uil-envelope"></i> Email: negishivam363@gmail.com </p>
                <p className='font-medium mt-4'> <i class="uil uil-phone"></i> Mob: 8909529254 </p>
            </div>
            <div data-aos='fade-left' data-aos-duratio='1500' className='w-[48%] h-[100%] flex flex-col gap-11 '>
                <div className='w-full gap-[4%] flex'>
                    <input className='w-[48%] px-2 py-3 border-[#777] rounded-lg border-2 text-sm' type="text" placeholder="Name" />
                    <input className='w-[48%] px-2 py-3 border-[#777] rounded-lg border-2 text-sm' type="text" placeholder="Email" />
                </div>
                <div className='w-full h-[100%] '>
                    <textarea className='w-full h-[100%] px-2 py-3 border-[#777] rounded-lg border-2 text-sm' placeholder="Message"></textarea>
                </div>
            </div>
        </div>
        <div className='mb-4'>
            <button className='px-2 py-2 bg-[#00C9FF] text-white rounded-lg font-semibold duration-300 hover:bg-[#00B5E7]'>Send <i class="uil uil-message"></i></button>
        </div>
    </section>
  )
}

export default Contact