import React from 'react'
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.gif";
import about4 from "../assets/about4.jpg";

export default function Aboutus({darkMode}) {
  return (
    <>
    <div className='min-h-screen' style={{fontFamily: "Poppins"}}>
      <div className={`bg-[#D9D9D9] font-bold  text-center py-2 md:text-2xl ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]"}`}>About Us</div>
    <div className='flex justify-center'>
      <div className='w-full mt-4 md:mt-8'>
        <img src={about}  className='h-auto w-full'/></div>
    </div>

    <div className='flex flex-col items-center'>
      <div className='font-bold mt-4 md:mt-6 md:text-xl '>Alphaverse</div>
      <div className='mt-2 text-sm md:text-base text-center w-xs sm:w-md md:w-3xl font-medium'> was founded by a team of expert academic professionals who 
        understand the pressure UK students face with tight deadlines and complex assignments.
         Our writers are carefully selected for their qualifications, subject expertise, 
         and writing skills. </div>
    </div>

    <div className='text-center font-bold md:text-2xl mt-4 md:mt-6'>Key Values</div>
    <div className=' font-semibold flex flex-col items-center md:flex-row md:justify-center md:gap-6 md:px-4 mt-4 md:mt-6'>
      <div className="rounded-xl text-center h-60 w-xs sm:w-sm sm:h-64 md:w-2xl md:h-108 bg-[#D9D9D9] pb-10 "><img src={about1} className='h-full w-full rounded-xl transition-transform duration-800 ease-in-out hover:scale-90 ' />
      <div className={`py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]" }`}>Academic Excellence</div>
      </div>
        <div className='rounded-xl text-center h-60 w-xs sm:w-sm sm:h-64 md:w-2xl md:h-108 bg-[#D9D9D9] pb-10 mt-6 md:mt-0 '><img src={about2} className='h-full w-full rounded-xl  transition-transform duration-800 ease-in-out hover:scale-90' />
            <div className={`py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]" }`}>Integrity & Confidentiality</div>
            </div>

    </div>

    <div className='mb-4 md:mb-6 font-semibold flex flex-col items-center md:flex-row md:justify-center md:gap-6 md:px-4 mt-4 md:mt-6'>
      <div className='rounded-xl text-center h-60 w-xs sm:w-sm sm:h-64 md:w-2xl md:h-108 bg-[#D9D9D9] pb-10 '><img src={about3} className='h-full w-full rounded-xl transition-transform duration-800 ease-in-out hover:scale-90 ' />
      <div className={`py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9] "}`}>Affordable Academic Support</div>
      </div>
        <div className="rounded-xl text-center h-60 w-xs sm:w-sm sm:h-64 md:w-2xl bg-[#D9D9D9] md:h-108 pb-10 mt-6 md:mt-0 "><img src={about4} className='h-full w-full rounded-xl transition-transform duration-800 ease-in-out hover:scale-90 ' />
            <div className={`py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]" }`} >Client-Centered Approach</div>
            </div>

    </div>
    </div>
    
      
    </>
  )
}
