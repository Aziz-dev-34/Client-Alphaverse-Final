import React from 'react'
import career from "../assets/career.jpg";
import cv from "../assets/cv.jpg";
import cover from "../assets/cover.jpg";
import linkedin from "../assets/linkedin.jpg";
import interview from "../assets/interview.jpg";

export default function Careerelevate({darkMode}) {
  return (
    <>
       <div className='min-h-screen '>
              <div className={`flex flex-col items-center  ${darkMode ? "bg-white" : "bg-[#D9D9D9]"}`}>
              <div className='text-xl sm:text-2xl md:3xl font-bold text-black mb-1'>Career Elevate</div>
              <div className="text-sm text-center sm:text-lg text-black">We help you build a career that matches your potential.  </div>
              </div>
              <div className="w-full mt-4">
                      <img
                        src={career}
                        alt="Academic Hero"
                        className="w-full h-64 sm:h-80 md:h-screen object-cover block"
                      />
                    </div>
                <div className={`text-center font-bold mt-6 text-lg sm:xl md:2xl  py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]"}`} style={{fontFamily: "Poppins"}}>Services </div>
                <div className=' flex flex-col items-center md:flex-row md:gap-12 md:justify-center mt-6 sm:mt-8 md:mt-10  ' >
                    <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-88 md:w-120  text-center'> <img src={cv} className='w-full h-full rounded-xl' />
                    <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Resume  / cv</h1>
                    </div>
                    <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-88 md:w-120  text-center'><img src={cover} className='w-full h-full rounded-xl' />
                    <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Cover Letter Design </h1>
                    </div>         
                    </div>

                    <div className=' flex flex-col items-center md:flex-row md:gap-12 md:justify-center md:py-16  ' >
                    <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-88 md:w-120  text-center'> <img src={linkedin} className='w-full h-full rounded-xl' />
                    <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>LinkedIn Optimization</h1>
                    </div>
                    <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-88 md:w-120  text-center'><img src={interview} className='w-full h-full rounded-xl' />
                    <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Interview Preparation </h1>
                    </div>         
                    </div>

                    </div>
    </>
  )
}
