import React from 'react'
import digitalservices from "../assets/digitalservices.jpg";
import marketing from "../assets/marketing.jpg";
import socialmedia from "../assets/socialmedia.jpg";
import branding from "../assets/branding.jpg";
import imageco from "../assets/imageco.jpg";
import ads from "../assets/ads.jpeg";
import video from "../assets/video.jpg";
import graphics from "../assets/graphics.jpg";
import web from "../assets/web.jpg";
import SEO from "../assets/SEO.jpg";

export default function Digitalservices({darkMode}) {
  return (
    <>
     <div className='min-h-screen '>
        <div className={`flex flex-col items-center ${darkMode ? "bg-white" : "bg-[#D9D9D9]"}`}>
        <div className='text-xl sm:text-2xl md:3xl font-bold text-black mb-1'>DIGITAL SERVICES</div>
        <div className="text-sm text-center sm:text-lg text-black">Your brand deserves visibility, engagement, and growth, and we make that happen. </div>
        </div>
        <div className="w-full mt-4">
                <img
                  src={digitalservices}
                  alt="Academic Hero"
                  className="w-full h-64 sm:h-80 md:h-full object-cover block"
                />
              </div>
              <div className=' flex flex-col items-center md:flex-row md:gap-6 md:justify-center py-10 ' >
                <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'> <img src={marketing} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Digital Marketing Campaigns</h1>
                </div>
                <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={socialmedia} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Social Media Management (Facebook, Instagram, TikTok, LinkedIn)</h1>
                </div>
                <div className='h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={branding} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Brand Strategy and Audience Building</h1>
                </div>
                
              </div>
              {/* 2nd */}
              <div className=' flex flex-col items-center md:flex-row md:gap-6 md:justify-center py-10 ' >
                <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'> <img src={imageco} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Content Creation and Optimization</h1>
                </div>
                <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={ads} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Paid Advertising (Meta, Google Ads)</h1>
                </div>
                <div className='h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={video} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Video Editing </h1>
                </div>
                
              </div>

              <div className=' flex flex-col items-center md:flex-row md:gap-6 md:justify-center py-10 ' >
                <div className=' mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'> <img src={graphics} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Graphic Design </h1>
                </div>
                <div className='mb-16 md:mb-0 h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={web} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>Graphic Design </h1>
                </div>
                <div className='h-62 w-82 sm:h-72 sm:w-92 md:h-84 md:w-102  text-center'><img src={SEO} className='w-full h-full rounded-xl' />
                <h1 className='font-bold mt-3'style={{fontFamily: "Poppins"}}>SEO</h1>
                </div>
                
              </div>

        </div> 
    </>
  )
}
