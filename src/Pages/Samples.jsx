import React from 'react'
import sam from '../assets/sam.jpg';
import data1 from '../assets/data1.jpg';
import data2 from '../assets/data2.jpg';
import data3 from '../assets/data3.jpg';
import data4 from '../assets/data4.jpg';
import data5 from '../assets/data5.jpg';
import data6 from '../assets/data6.jpg';
import data7 from '../assets/data7.jpg';
import data8 from '../assets/data8.jpg';
import data9 from '../assets/data9.jpg';
import data10 from '../assets/data10.jpg';
import data11 from '../assets/data11.jpg';
import data12 from '../assets/data12.jpg';
import data13 from '../assets/data13.png';
import data14 from '../assets/data14.png';


export default function Samples({darkMode}) {
  return (
    <>
    <div className='w-full overflow-x-hidden'>
      <div className=" flex flex-col">
      <div className={`flex flex-col items-center  mt-2 py-2 ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9] text-black" }`}>
       <p className='font-bold text-lg sm:text-xl md:text-2xl'style={{fontFamily: "Poppins"}}>At ALPHAVERSE</p>
        
          <p className="w-xs sm:w-md md:w-2xl text-base text-center sm:text-lg md:text-xl ">
            we value transparency and quality. Here are sample works showcasing
            our writing style, formatting, referencing, and subject expertise.
          </p>
        </div>
         <div className="w-full mt-4">
        <img
        src={sam}
        className="w-full h-64 sm:h-80 md:h-full object-cover block "/>
        </div>
        </div>
        <div className='py-6 flex flex-col items-center md:flex md:flex-row gap-6 md:justify-center '>
          <div className='shadow-2xl  w-72 h-64 sm:w-96 md:h-82 md:w-82 '><img src={data1} className='h-full w-full'/></div>

        <div className='flex flex-col items-center justify-center px-2   '>
          <div className='font-bold sm:text-base md:text-xl mt-2 md:mt-0  'style={{fontFamily: "Poppins"}}>Data Sets Used in Our Projects</div>
          <div className='text-center mt-2 md:mt-3 text-sm sm:text-base md:text-lg w-xs sm:w-xl md:w-xl '>At WriteNation, we use reliable and academically approved datasets for IT,
             Computer Science, and Data Science projects. Whether it's for machine learning,
              cybersecurity, or analytics, our experts choose the best data to meet your assignment
               or research needs. </div>
        </div>
        <div className='shadow-2xl  w-72 h-64 md:h-82 sm:w-96 md:w-82'><img src={data2} className='h-full '/></div>
        </div>
        
        
        <div className='flex justify-center py-4'>
          <div className='h-0.5 w-3xs sm:2xs md:w-lg  bg-[#D9D9D9]'></div>
        </div>
        <div className='flex flex-col items-center md:flex-row py-6 justify-center md:gap-20'>
          <div className='shadow-xl w-72 h-64 md:h-82 sm:w-96 md:w-130 '><img src={data3} className='w-full h-full' /></div>
          <div className='shadow-xl w-72 h-64 md:h-82 sm:w-96 md:w-130 mt-8 md:mt-0'><img src={data4} className='w-full h-full' /></div>
        </div>
        
          <div className='md:flex-row flex flex-col items-center md:gap-32 py-4'>
          <div className=' md:px-6 flex flex-col items-center md:items-start md:justify-center '>
            <div className='text-center md:text-left font-bold sm:text-lg md:text-2xl' style={{fontFamily: "Poppins"}}>DIGITAL MARKETING</div>
            <div className='text-center md:text-left w-xs sm:w-sm md:w-xl mt-2'>This sample showcases a professionally written masters-level assignment focused
               on Dell's digital marketing strategy. It covers key areas like social media campaigns,
                website personalization, and display retargeting. Designed for top UK universities, 
                this report aligns with academic expectations and industry practices.</div>
                </div>
                <div className='w-xs md:h-120 sm:w-sm md:w-xl mt-4 md:mt-0'><img src={data5} className='w-full h-full' /></div>
          </div>

          <div className='flex flex-col items-center md:flex-row  md:mb-8'>
            <div className='bg-blue-950 h-96 w-sm md:w-1/2'> <img src={data6} className='h-full w-full' /></div>
            <div className='bg-blue-950 h-96 w-xs sm:w-sm md:w-1/2 mt-8 md:mt-0'><img src={data7} className='h-full w-full' /></div>
          </div>

          <div className='md:flex-row flex flex-col items-center md:gap-20 py-2 md:py-4'>
          <div className='w-xs md:h-120 sm:w-sm md:w-xl   hidden md:block  shadow-2xl'><img src={data8} className='w-full h-full' /></div>
          <div className=' md:px-6 flex flex-col items-center md:items-start md:justify-center '>
            <div className='text-center md:text-left font-bold sm:text-sm md:text-xl' style={{fontFamily: "Poppins"}}>Emerging Technologies and Their Impact on Modern Business </div>
            <div className='text-center md:text-left w-xs sm:w-sm md:w-xl mt-2'>This sample examines how 
              cutting-edge technologies, including Artificial Intelligence, Blockchain, Internet of 
              Things (IoT), and Cloud Computing, are transforming industries. It highlights their 
              applications in business operations, innovation, and strategy, crafted to meet the 
              academic standards of top-tier universities.</div>
                </div>
                <div className='w-xs md:h-120 sm:w-sm md:w-xl mt-6 md:mt-0 md:hidden'><img src={data8} className='w-full h-full' /></div>
          </div>

          <div className='bg-[#D9D9D9] mt-4 md:mt-8 py-4 px-1 md:px-4 flex gap-1 md:gap-4'>
            <div className=' h-32 md:h-72 w-24 sm:w-30  md:w-1/4'><img src={data9} className='w-full h-full'/></div>
            <div className=' h-32 md:h-72 w-24 sm:w-30  md:w-1/4'><img src={data10} className='w-full h-full'/></div>
            <div className=' h-32 md:h-72 w-24 sm:w-30  md:w-1/4'><img src={data11} className='w-full h-full'/></div>
            <div className=' h-32 md:h-72 w-24 sm:w-30 md:w-1/4'><img src={data12} className='w-full h-full'/></div>
          </div>

          <div className='font-bold text-center sm:sm md:text-2xl mt-4 md:mt-8'>
            Info Systems Analysis & Design</div>
          <div className='text-center font-light text-xs md:text-base text-[#818181]'>
            MSc Information Technology</div>
            <div className='flex flex-col items-center md:flex-row px-4 gap-2 py-2 md:py-4'>
              <div className='h-96 w-xs sm:w-sm md:w-1/2 bg-amber-500'><img src={data13} className='w-full h-full'/></div>
              <div className='h-96 w-xs sm:w-sm md:w-1/2 bg-amber-800'><img src={data14} className='w-full h-full'/></div>


            </div>


        </div>
    </>
  )
}
