import React from 'react'
import growth from "../assets/growth.jpg";
import thought from "../assets/thought.jpg";
import thought1 from "../assets/thought1.png";
import thought2 from "../assets/thought2.jpg";
import thought3 from "../assets/thought3.jpg";
import thought4 from "../assets/thought4.jpg";
import thought5 from "../assets/thought5.jpg";


export default function Personalgrowth(darkMode) {
  return (
    <>
    <div style={{fontFamily: "Poppins"}}>
    <div className={`flex flex-col items-center py-1 ${darkMode ? "bg-white" :"bg-[#D9D9D9] "}`}>
    <div className="text-center font-bold text-xl sm:text-2xl text-black md:3xl ">Personal Growth</div>
    <div className='text-black '>At Alphaverse, our Personal Growth service is rooted in psychological principles and evidence-based techniques.</div>
    </div>
    <div className='flex flex-col items-center md:flex-row md:gap-30'> 
            <div className='md:px-10 px-4'>
            <div className='flex flex-col md:items-start mt-2 md:mt-4'>
              <div className='  w-xs sm:w-xs md:w-lg  font-bold text-xl'> We help individuals understand 
                how their thoughts, emotions, and behaviors shape their lives — and how to consciously 
                improve them.</div>
              <div className='  text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-2 md:mt-4 '>Our approach focuses on:</div>
            </div>
            <ul className='list-disc ml-4 mt-6 font-semibold'>
              <li>Cognitive behavior awareness</li>
              <li>Emotional regulation</li>
              <li>Self-esteem development</li>
              <li>Stress management</li>
              <li>Behavioral transformation</li>
            </ul>
            <div className=' text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-4 '>This is not just 
              motivation — this is structured mental development.</div>
          </div>
          <div className='w-xs sm:w-sm md:w-lg md:h-120 mt-4 md:mt-8 shadow-xl'><img src={growth} className='w-full h-full' /></div>
          </div>
         <div className={`text-center font-bold mt-6 text-lg sm:xl md:2xl  py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]"}`} style={{fontFamily: "Poppins"}}>What We Offer? </div>
 <div className=' flex flex-col items-center md:flex-row md:gap-6 md:justify-center py-10 ' >
                <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'> <img src={thought} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}> Cognitive & Behavioral Coaching</h1>
                </div>
                <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={thought1} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Emotional Intelligence Development</h1>
                </div>
                <div className='h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={thought2} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}> Stress & Anxiety Management</h1>
                </div>
                
  </div>

  <div className=' flex flex-col items-center md:flex-row md:gap-10 py-10 ' >
                <div className=' md:ml-8 mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'> <img src={thought3} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}> Cognitive & Behavioral Coaching</h1>
                </div>
                <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={thought4} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Emotional Intelligence Development</h1>
                </div>
                
  </div>
  <div className='flex flex-col items-center md:flex-row md:gap-30'> 
            <div className='md:px-10 px-4'>
            <div className='flex flex-col md:items-start mt-2 md:mt-4'>
              <div className='  w-xs sm:w-xs md:w-lg  font-bold text-xl'> Our Methodology</div>
              <div className='  text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-2 md:mt-4 '>We use structured frameworks inspired by:</div>
            </div>
            <ul className='list-disc ml-4 mt-6 font-semibold'>
              <li>Cognitive Behavioral principles</li>
              <li>Positive psychology</li>
              <li>Behavioral science</li>
              <li>Mindfulness-based practices</li>
            </ul>
            <div className=' text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-4 '>All sessions are practical, confidential, and solution-focused.</div>
          </div>
          <div className='w-xs sm:w-sm md:w-lg md:h-120 mt-4 md:mt-8 shadow-xl'><img src={thought5} className='w-full h-full' /></div>
          </div>
          <a className=' mb-8 md:hidden'
          href="https://wa.me/923317848769"
          target="_blank"
           rel="noopener noreferrer"
            >
          <button
          className=' hover:cursor-pointer duration-400 hover:-translate-y-1 
           mt-4 shadow-[0_3px_6px_rgba(0,0,0,0.12)]  font-bold  rounded-4xl border
         border-gray-500 bg-linear-to-r from-[rgba(0,0,0,0.1)] via-[rgba(61,61,61,0.1)]
        to-[rgba(23,23,23,0.2)] px-4 py-2
        sm:px-4 sm:py-2 md:px-4 md:py-2 text-sm sm:text-base md:text-lg'
        style={{ fontFamily: "Poppins"}}
         >
      Let's Chat
    </button>
            </a>
    </div>

    </>
  )
}
