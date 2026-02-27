import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function Footer({ darkMode }) {
  return (
    <>
    
   <div className={`flex flex-col items-center py-6 sm:py-8 md:py-10  ${darkMode ? "bg-black" : "bg-[#D9D9D9]"}`}>
    <div className='bg-white h-0.5 mb-3 sm:mb-4 md:mb-6 w-3xs sm:2xs md:w-lg '></div>
     <div className='font-bold text-xl sm:text-2xl md:text-3xl'style={{fontFamily: "Poppins"}}>Mission Statement: </div>
    <div className='text-center mx-auto w-xs sm:w-sm md:w-2xl md:text-lg ' style={{fontFamily: "Poppins"}}>To support students in their academic journey by providing 
        high-quality, plagiarism-free, and custom-written academic content 
        tailored to UK university standards. </div>
   </div>
   
        <div className='max-w-full h-44  border-t '>

          <div className='flex gap-8  justify-center mt-4'>
            <a
          href="https://wa.me/923317848769"
         target="_blank"
         rel="noopener noreferrer"
           >
            <div className='bg-black text-white rounded-full w-8 h-8 sm:h-9 sm:w-9 
            cursor-pointer hover:-translate-y-1 md:h-10 md:w-10 flex justify-center items-center 
            text-lg sm:text-xl md:text-2xl'><FontAwesomeIcon icon={faWhatsapp}/></div></a>
            <a
          href="https://www.facebook.com/share/18AtNAp5mc/"
         target="_blank"
         rel="noopener noreferrer">
          <div className='bg-black text-white rounded-full w-8 h-8 sm:h-9 sm:w-9 cursor-pointer hover:-translate-y-1 
            md:h-10 md:w-10 flex justify-center items-center text-lg sm:text-xl md:text-2xl'><FontAwesomeIcon icon={faFacebookF} /></div></a>
           <a
          href="https://www.instagram.com/alphaverse_4?igsh=MTV1Y2JudnB5NGhlYg=="
         target="_blank"
         rel="noopener noreferrer"><div className='bg-black text-white  rounded-full w-8 h-8 sm:h-9 sm:w-9 cursor-pointer hover:-translate-y-1 
            md:h-10 md:w-10 flex justify-center items-center text-lg sm:text-xl md:text-2xl'> <FontAwesomeIcon icon={faInstagram} /></div></a>
           
          </div>
          <div className='flex gap-4 h-16 sm:h-18 md:h-20 sm:gap-6 md:gap-10 items-center justify-center'>
            <Link to="/"><div className='text-sm sm:text-base md:text-lg font-medium cursor-pointer hover:border-b'onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{fontFamily: "Poppins"}}>Home</div></Link>
           <Link to="/"> <div className='text-sm sm:text-base md:text-lg font-medium 
           cursor-pointer hover:border-b' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{fontFamily: "Poppins"}}>Services</div></Link>

             <Link to="/"><div className='text-sm sm:text-base md:text-lg font-medium cursor-pointer 
             hover:border-b'onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}  
             style={{fontFamily: "Poppins"}}>Resources</div></Link>

            <Link to="/"><div className='text-sm sm:text-base md:text-lg font-medium cursor-pointer 
             hover:border-b' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}  
             style={{fontFamily: "Poppins"}}>About Us</div></Link>
            
          </div>
           <div className={` border-t flex 
           justify-center items-center  h-14 sm:h-16 md:h-18 text-sm sm:text-base md:text-lg  ${darkMode ? "bg-black" : "bg-white"}`}>
            Copyright © 2026 Alphaverse. All Rights Reserved.</div>

        </div>
    </>
  )
}
