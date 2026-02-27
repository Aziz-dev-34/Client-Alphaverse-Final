import React from 'react'
import legalp from "../assets/legalp.jpg";
import legalp1 from "../assets/legalp1.jpg";
import legalp2 from "../assets/legalp2.jpg";

export default function LegalPolicy({darkMode}) {
  return (
    <>
      <div className='min-h-screen'>
        <div className={` text-center font-bold md:text-2xl py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]"}`}
        style={{fontFamily: "Poppins"}}>Legal & Policy</div>

        <div className=' py-2 md:py-4 flex items-center justify-center'> 
          <img src={legalp} className='h-full  w-sm sm:w-md md:w-3xl' />
        </div>

        <div className='flex flex-col items-center md:flex-row  md:gap-16 md:px-8'>
        <div className='flex flex-col items-center md:items-start'>
        <div className='font-bold text-center md: text-2xl'>DISCLAIMER</div>
        <div className='w-xs sm:w-sm md:w-xl text-center md:text-left md:text-lg mt-2'>Alphaverse, Academic Services provides
           academic support and guidance to students. The content delivered is intended
            for learning, research, and reference purposes only. Clients are advised not
             to submit any work provided by us as their own. We are not liable for any academic
              penalties resulting from misuse of the delivered content. By placing an order, the
               client agrees to use the materials for lawful, ethical, and academic enhancement
                purposes only.</div> </div>

                <div><img src={legalp1} className='h-full w-xs sm:w-sm md:w-2xl shadow-2xl mt-4 md:mt-0'/></div>
        </div>
        
        <div className='md:flex-row flex flex-col items-center md:gap-40 md:py-12'>
        <div className='flex flex-col items-center md:items-start md:justify-center px-8 py-8'>
          <div className='text-center font-bold text-2xl 'style={{fontFamily: "Poppins"}}>Privacy Policy</div>
          <div className='w-xs sm:w-sm md:w-xl  md:text-lg mt-2'>
            We value your privacy. All personal and academic information shared 
            by clients is kept strictly confidential. We do not share, sell, or disclose
             your data to third parties.
             </div>
            <ul className='w-xs sm:w-sm md:w-xl mt-2 list-disc ml-3 md:ml-4 '>
              <li>We do not store any payment data.</li>
              <li>All conversations remain private.</li>
              <li>Client documents are permanently deleted upon completion.</li>
            </ul>
            <div className='w-xs sm:w-sm md:w-xl mt-2 '>For any queries regarding data privacy, please contact: </div>
             <a className='hidden md:block'
          href="https://wa.me/923707310831"
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

        <div className=' md:mt-0 w-xs sm:w-sm md:w-xl ' ><img src={legalp2} /></div>

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
          
      </div>
    </>
  )
}
