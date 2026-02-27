import React from 'react'
import testimonial from "../assets/testimonial.jpg";
import testimg from "../assets/testimg.png";
import testimg1 from "../assets/testimg1.jpg";
import testimg2 from "../assets/testimg2.jpg";
import testimg3 from "../assets/testimg3.png";
import testimg4 from "../assets/testimg4.jpg";
import testimg5 from "../assets/testimg5.png";
import testimg6 from "../assets/testimg6.png";
import testimg7 from "../assets/testimg7.jpg";
import testimg8 from "../assets/testimg8.png";
import testimg9 from "../assets/testimg9.jpg";
import testimg10 from "../assets/testimg10.jpg";


export default function Testimonials({darkMode}) {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
<div className={`flex justify-center  ${darkMode ? "bg-white" : "bg-[#D9D9D9]"}`}>
          <h1 className="text-xl sm:text-2xl md:3xl font-bold text-black mb-1"style={{fontFamily: "Poppins"}}>
            TESTIMONIALS & RESULTS
          </h1>
        </div>
        <div className='md:hidden py-4'><img src={testimonial} /></div>
        <div className='flex flex-col items-center py-3 md:flex md:flex-col md:items-start'>
          
          <div className='md:flex flex  md:gap-32 md:items-center md:mt-4'>
          <div className='md:ml-6 flex flex-col items-center md:items-start '>
          <div className='md:w-lg sm:w-md w-xs font-semibold text-lg text-center md:text-left'style={{fontFamily: "Poppins"}}>Real Results. Real Success Stories</div>

           <div className='text-center md:text-left w-xs sm:w-sm md:w-lg font-medium mt-2'>Here’s what our satisfied clients and students say about Alphaverse.</div>
            <ul className='mt-2 text-center md:text-left px-3 md:px-0 '>
            <li>I passed my degree with distinction thanks to Alphaverse’s academic guidance.</li>
            <li>Their digital marketing strategy took my business from zero to thousands of followers.</li>
            <li>Professional, responsive, and reliable, highly recommended.</li>
          </ul>
          </div>
            <div className='hidden md:block  md:w-140 '><img src={testimonial} className='md:rounded-2xl shadow-2xl md:h-82 md:w-full' /></div>
       </div>
        </div>

        <div className=' flex flex-col items-center md:flex-row justify-center md:px-6 gap-6 py-4 md:mt-8'>
          <div className='h-64 w-72 sm:w-82 md:h-96 md:w-1/2 shadow-2xl '><img src={testimg} className='h-full md:w-full'/></div>
          <div className='h-64 w-72 sm:w-82 md:h-96 md:w-1/2 shadow-2xl'><img src={testimg1} className='h-full md:w-full'/>
         
          </div>
        </div>

        <div className='flex flex-col items-center md:flex-row md:justify-center gap-12 py-8 md:py-12'>
          <div className=' h-160 w-2xs sm:xs md:w-sm shadow-2xl'><img src={testimg2} className='h-full w-full' /> </div>
          <div className='h-160 w-2xs sm:xs md:w-sm shadow-2xl'><img src={testimg3} className='h-full w-full' /> </div>
          <div className='h-160 w-2xs sm:xs md:w-sm shadow-2xl'><img src={testimg4} className='h-full w-full'/> </div>
        </div>

        <div className=' px-12 gap-8 flex flex-col items-center md:flex-row md:justify-between'>
          <div className=' h-120 w-2xs sm:w-xs md:w-lg shadow-2xl'><img src={testimg5} className='h-full w-full' /></div>
          <div className=' md:h-120 h-96 w-2xs sm:w-xs md:w-2xl shadow-2xl'><img src={testimg6} className='h-full w-full' /></div>

        </div>
        <div className='px-12 gap-8 flex flex-col items-center md:flex-row md:justify-between py-8 md:py-12'>
          <div className=' md:h-120 h-76  w-2xs sm:w-xs md:w-lg shadow-2xl'><img src={testimg7} className='h-full w-full' /></div>
          <div className=' md:h-120 h-96 w-2xs sm:w-xs md:w-2xl shadow-2xl'><img src={testimg8} className='h-full w-full' /></div>
          
        </div>

        <div className=' px-12 gap-8 flex flex-col items-center md:flex-row md:justify-between mb-8 md:mb-12'>
          <div className=' md:h-120 h-82 w-2xs sm:w-xs md:w-lg shadow-2xl'><img src={testimg9} className='h-full w-full' /></div>
          <div className=' md:h-120 h-96 w-2xs sm:w-xs md:w-2xl shadow-2xl'><img src={testimg10} className='h-full w-full' /></div>
          
        </div>




        </div>
    </>
  )
}
