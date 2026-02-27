import React, { useState, useEffect } from 'react'
import image12 from "../assets/image12.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpg";
import imagea from "../assets/imagea.jpg";
import imageb from "../assets/imageb.gif";
import imagec from "../assets/imagec.jpg";
import imaged from "../assets/imaged.jpg";
import imagee from "../assets/imagee.jpg";
import imagef from "../assets/imagef.jpg";
import imageg from "../assets/imageg.gif";
import imagechoose from "../assets/imagechoose.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Section3({ darkMode }) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
  const cards = [
    { img: image12, text: "Digital Marketing" },
    { img: image2, text: "Professional Resume" },
    { img: image3, text: "Linkedin Profile Creation & Optimization" },
    { img: image4, text: "Website & Portfolio Development" },
    { img: image5, text: "Essay Writing" },
    { img: image6, text: "Assignments & Reports" },
    { img: image7, text: "Presentations" },
    { img: image8, text: "Reflective Journals" },
    { img: image9, text: "Research Proposals" }
  ];
    const cardsPerSlide = 3; // desktop
  const maxIndex = Math.ceil(cards.length / cardsPerSlide) - 1;
  const [index2, setIndex2] = useState(0);
  const cards2 = [
  { img: imagea, text: "Literature Reviews" },
  { img: imageg, text: " Personal Growth and Healing Support" },
  { img: imaged, text: "Graphic Designing" },
  { img: imageb, text: "Coursework" },
  { img: imagec, text: "Dissertation/Thesis" },
  { img: imagee, text: "Video Editing " },
  { img: imagef, text: "Social Media Management and Growth " },
 
];
const cardsPerSlide2 = 3;
const maxIndex2 = Math.ceil(cards2.length / cardsPerSlide2) - 1;

  

  return (
    <>
      <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-[#D9D9D9]"}`}>
        <div className='flex  justify-center items-center py-4 sm:py-6 md:py-8'>
         <div className='font-bold text-xl sm:text-3xl md:text-5xl mt-2 'style={{ fontFamily: "Poppins"}}>Welcome to </div>
        <div className='text-[#686868] ml-2 text-xl  sm:text-3xl md:text-5xl mt-2  font-bold '>ALPHAVERSE
          
        </div>
        </div>
        <div className='  text-center  px-4 text-sm  sm:text-base md:text-lg
         lg:text-xl xl:text-2xl 2xl:text-3xl max-w-xl sm:max-w-2xl md:max-w-3xl
          lg:max-w-4xl  mx-auto'
    style={{ fontFamily: "Poppins"}}><p>Alphaverse is a global platform 
      that supports learners, professionals, and businesses with reliable
       academic and digital solutions. By blending innovation with expertise, 
we create results you can trust.</p></div>

<div className='flex justify-center'><div className='bg-white h-0.5 mt-6 w-52 md:w-xl '></div></div>
   <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-[#D9D9D9] py-8"}`}>

      {/* ===== TITLE ===== */}
      <h1 className="text-center text-3xl font-bold mb-10 mt-4" style={{fontFamily: "Poppins"}}>
        What We <span className="text-[#686868]" style={{fontFamily: "Poppins"}}>Offer</span>
      </h1>

      {/* ================= FIRST CAROUSEL ================= */}
      <div className="px-4">
        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-6 px-4 overflow-y-auto 
        scroll-smooth "> 
          {cards.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center
snap-start transform transition-all duration-500
        }`} > 
            
              <img
                src={item.img}
                alt={item.text}
                className="h-48 w-full object-cover"
              />
              <p className="text-center mt-2 mb-4 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-800 ease-in-out "
             style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards.map((item, i) => (
              <div
                key={i}
                className="min-w-[33.33%] bg-white rounded-xl overflow-hidden shadow-md flex flex-col 
                items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="h-72 w-full object-cover"
                />
                <p className="text-center mt-2 mb-4 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
            className="hover:bg-gray-100 cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
          >
             <FontAwesomeIcon icon={faArrowLeft} className={`hover:animate-ping ${darkMode ? "text-black": "text-black"}`}/>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setIndex((prev) => Math.min(prev + 1, maxIndex))}
            className="hover:bg-gray-100 z-10 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
          >
             <FontAwesomeIcon icon={faArrowRight} className={`hover:animate-ping ${darkMode ? "text-black": "text-black"}`} />
          </button>
        </div>
      </div>
      
  <div className="px-4 mt-20">
  {/* MOBILE */}
  <div className="md:hidden flex flex-col gap-6 px-4 overflow-y-auto scroll-smooth">
    {cards2.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center"
      >
        <img
          src={item.img}
          alt={item.text}
          className="h-48 w-full object-cover"
        />
        <p className="text-center mt-2 mb-4 font-medium">
          {item.text}
        </p>
      </div>
    ))}
  </div>

  {/* DESKTOP */}
  <div className="hidden md:block relative overflow-hidden">
    <div
      className="flex gap-4 transition-transform duration-800 ease-in-out"
      style={{ transform: `translateX(-${index2 * 100}%)` }}
    >
      {cards2.map((item, i) => (
        <div
          key={i}
          className="min-w-[33.33%] bg-white rounded-xl overflow-hidden shadow-md flex flex-col 
          items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          <img
            src={item.img}
            alt={item.text}
            className="h-72 w-full object-cover"
          />
          <p className="text-center mt-2 mb-4 font-medium">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* LEFT BUTTON */}
    <button
      onClick={() => setIndex2(prev => Math.max(prev - 1, 0))}
      className="hover:bg-gray-100 cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
    >
      <FontAwesomeIcon icon={faArrowLeft} className={`hover:animate-ping ${darkMode ? "text-black": "text-black"}`} />
    </button>

    {/* RIGHT BUTTON */}
    <button
      onClick={() => setIndex2(prev => Math.min(prev + 1, maxIndex2))}
      className="hover:bg-gray-100 z-10 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
    >
      <FontAwesomeIcon icon={faArrowRight} className={`hover:animate-ping ${darkMode ? "text-black": "text-black"}`}/>
    </button>
  </div>
</div>
      
   
   </div>

   <div className='flex justify-center'><div className='bg-white h-0.5 mt-6 md:mt-10 sm:mb-5 mb-4 w-55 sm-xl md:w-2xl '></div></div>
    <div className='md:mt-8 flex flex-col items-center '>
      <div className='flex'><h1 className='  text-xl sm:text-2xl 
      md:text-3xl lg:text-4xl font-bold'style={{ fontFamily: "Poppins, serif" }}>Why Choose </h1>
      <h1 className='ml-2 text-[#686868] tracking-wider text-xl sm:text-2xl 
      md:text-3xl lg:text-4xl font-bold'style={{ fontFamily: "Poppins, serif" }}>ALPHAVERSE?</h1></div>
      <p className='text-sm text-center mt-2.5
    sm:text-base md:text-lg lg:text-xl  max-w-xs sm:max-w-sm md:max-w-lg 
    lg:max-w-xl  mx-auto'style={{ fontFamily: "Poppins, serif" }}>
      We combine education, technology, and creativity to turn your goals into achievements.</p>
      <div className='  mt-6  text-base sm:text-lg 
      md:text-xl lg:text-2xl font-bold'>Our Core Divisions:</div>
    </div>
    <div className='hidden md:flex justify-center gap-6 py-6'>
    <div className=' md:flex md:flex-col md:justify-center  ' >
      <div className='  md:h-34 md:w-66 '><h3 className='md:font-bold md:text-lg max-w-full md:mt-2'style={{fontFamily: "Poppins"}}>Academic Excellence:</h3> <div className='md:text-base'style={{fontFamily: "Poppins"}}> Essays, 
        dissertations, reports, and research guidance. Essays, dissertations, reports, 
        and research guidance.</div> </div> 
    <div className='md:mt-3 md:flex md:flex-col md:justify-end md:h-34 w-66 '><h3 className='md:font-bold md:text-lg max-w-full'style={{fontFamily: "Poppins"}}>Digital Growth:</h3> <div className='md:mb-2 md:text-base'style={{fontFamily: "Poppins"}}>Marketing, SEO, content creation, and brand development.</div> </div> 
    </div>
     <div className='md:min-h-full  md:flex items-center' > 
      <div className=' md:h-72 md:w-76  '><img src={imagechoose} alt="" className='md:w-full h-full md:shadow-2xl' /></div> 
     </div>
     <div className=' md:flex md:flex-col md:justify-center ' >
      <div className='  md:h-34 md:w-66 md:ml-2'><h3 className='font-bold md:text-lg max-w-full md:mt-2'style={{fontFamily: "Poppins"}}>eBay & E-Commerce:</h3> <div className='md:text-base'style={{fontFamily: "Poppins"}}>Store setup, optimization, and performance scaling.</div></div> 
    <div className='md:ml-2 md:mt-3 md:flex flex-col justify-end md:h-34 md:w-66  '><h3 className='md:font-bold md:text-lg md:max-w-full'style={{fontFamily: "Poppins"}}> Career Boosting: </h3> <div className='md:mb-2 md:text-base'style={{fontFamily: "Poppins"}}>Resume creation, portfolio design, and business proposals.</div> </div>
     </div> 
   </div>
    <div className='md:flex md:justify-center hidden md:text-base' style={{fontFamily: "Poppins"}}><p>Each service is delivered legally, ethically, and with complete confidentiality.</p></div>
{/* our core divisions-mobile */}
<div className='md:hidden  mt-4 flex px-3 items-center  '>
<img src={imagechoose} alt="" className='h-46 w-[45%] shadow-2xl' /> 
<div className='flex flex-col '>
  <div className='text-[12px] font-bold ml-3'>Academic Excellence:</div>
  <div className='text-[10px] ml-3'>Essays, dissertations, reports, and research guidance.</div>
<div className='text-[12px] font-bold ml-3'> Digital Growth:</div>
  <div className='text-[10px] ml-3'>Marketing, SEO, content creation, and brand development.</div>
  <div className='text-[12px] font-bold ml-3'>eBay & E-Commerce:</div>
  <div className='text-[10px] ml-3'> Store setup, optimization, and performance scaling.</div>
  <div className='text-[12px] font-bold ml-3'>Academic Excellence:</div>
  <div className='text-[10px] ml-3'>Essays, dissertations, reports, and research guidance.</div>
</div>
</div>

   </div>
    </>
  )
}
