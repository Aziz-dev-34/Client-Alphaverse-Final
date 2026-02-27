import React from 'react';
import imageacademy from "../assets/imageacademy.png";
import Compliance from "../assets/Compliance.jpg";
import imageab from "../assets/imageab.jpg";
import essay from "../assets/essay.jpg";
import Thesis from "../assets/Thesis.jpg";
import Assignment from "../assets/Assignment.jpg";
import Proofreading from "../assets/Proofreading.jpg";
import whyalpha from "../assets/whyalpha.jpg";
import legal from "../assets/legal.jpg";

export default function Academicservices({darkMode}) {
  return (
    <div className="min-h-screen flex flex-col ">
<div className={`flex flex-col items-center bg-[#D9D9D9] ${darkMode ? "bg-white": "bg-[#D9D9D9]"}`}>
          <h1 className="text-xl sm:text-2xl md:3xl font-bold text-black mb-1">
            Academic Services
          </h1>
          <p className="text-sm text-center sm:text-lg text-black">
            Empowering Students Through Legal, Ethical & Educational Guidance.
          </p>
        </div>
      {/* Hero Image */}
      
      <div className="w-full mt-4">
        <img
          src={imageacademy}
          alt="Academic Hero"
          className="w-full h-64 sm:h-80 md:h-full object-cover block"
        />
      </div>

      {/* Content Section */}
      <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
      <div className=" md:w-120 w-full sm:w-full">
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left'> Legal Assurance </h1>
      <p className='text-base sm:text-lg md:text-xl text-center md:text-left mb-2 sm:text-center '>Every service provided by Alphaverse is designed for educational improvement only.
       We do not participate in plagiarism, impersonation, or academic misconduct.
       All materials shared are for reference, learning, and skill development purposes
       only, in accordance with academic integrity guidelines of global universities. </p>
       </div>
        

        {/* Compliance Image */}
        <div className="md:w-1/3">
          <img
            src={Compliance}
            alt="Compliance"
            className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>

      <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
        <div className="md:w-1/3"><img src={imageab} className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]" /></div>
        <div className='md:w-120 w-full sm:w-full'>
        <div className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left mt-6 md:mt-0'>About Our Academic Support </div>
        <div className='text-center md:text-left'>At Alphaverse, we operate with one principle,  academic integrity above everything else.
         We provide legitimate academic guidance, not ghostwriting. Every service we offer helps 
         students understand, structure, and present their own work more effectively. Our purpose 
         is to guide, mentor, and support students so they can improve their academic 
         performance through learning, not shortcuts. We comply with all academic and 
         institutional policies on originality, ethical assistance, and intellectual property. 
        Every interaction is confidential, transparent, and within legal boundaries.</div>
        </div>
        
      </div>
       <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
      <div className=" md:w-120 w-full sm:w-full">
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left'> Essay Writing Services </h1>
      <p className='text-base sm:text-lg md:text-xl text-center md:text-left mb-2 sm:text-center '>We
         help students craft strong, well-researched, and critically analyzed essays. Our experts
          guide you through topic selection, argument development, referencing, and formatting, 
          ensuring your essay meets academic standards, ethically and effectively. 
        </p>
       </div>
        

        {/* Compliance Image */}
        <div className="md:w-1/3">
          <img
            src={essay}
            alt="Compliance"
            className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>

      <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
        <div className="md:w-1/3"><img src={Thesis} className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]" /></div>
        <div className='md:w-120 w-full sm:w-full'>
        <div className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left mt-6 md:mt-0'>Dissertation Help </div>
        <div className='text-base sm:text-lg md:text-xl text-center md:text-left mb-2 sm:text-center '>Our team of academic professionals provides one-on-one legal mentorship for
           dissertation planning, methodology design, literature review, and final editing.
           We guide you step by step, so you can write your own research confidently and ethically.
        </div>
        </div>
        
      </div>

       <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
      <div className=" md:w-120 w-full sm:w-full">
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left'> Assignment Writing </h1>
      <p className='text-base sm:text-lg md:text-xl text-center md:text-left mb-2 sm:text-center '>
         Assignments can be complex, but with Alphaverse, you’ll never feel lost.
         We help you interpret guidelines, plan your layout, reference correctly, and refine
          your own writing to produce high-quality, original assignments. 
        </p>
       </div>
        

        {/* Compliance Image */}
        <div className="md:w-1/3">
          <img
            src={Assignment}
            alt="Compliance"
            className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>

      <div className='md:flex md:justify-between md:items-center ml-2 mr-2  md:px-6 py-4'>
        <div className="md:w-1/3"><img src={Proofreading} className="w-full sm:w-full md:w-full rounded-md  shadow-[12px_12px_30px_rgba(0,0,0,0.5)]" /></div>
        <div className='md:w-120 w-full sm:w-full'>
        <div className='text-base sm:text-lg md:text-xl font-bold text-center md:text-left mt-6 md:mt-0'>Proofreading & Editing </div>
        <div className='text-base sm:text-lg md:text-xl text-center md:text-left mb-2 sm:text-center'>Grammar, Structure, Turnitin Report Refinement </div>

        
        </div>
        
      </div>
     <div className='flex justify-center mt-4 md:mt-12'><div className='h-0.5 bg-black md:w-xl w-2xs '></div></div>

        <div className='md:flex-row md:justify-between flex flex-col items-center md:mt-6'>
          <div className='flex flex-col items-center'style={{fontFamily: "Poppins"}}>
          <div className=' mt-4 text-center md:text-left md:px-6 w-64 sm:w-96 md:w-120 font-bold text-lg sm:text-xl md:text-2xl 'style={{fontFamily: "Poppins"}}>
          Why Choose Alphaverse for Legal Academic Guidance
          
        </div>
        <div className='pl-8 md:pl-10 mt-4 w-xs md:w-full'>
          <li>
            100% Legal, Ethical, and Transparent Services
          </li>
          <li>
            Confidential & Secure Process (GDPR Compliant)
          </li>
          <li>
            Guidance from Experienced Academic Mentors
          </li>
          <li>
            Personalized Feedback for Every Student
          </li>
          <li>
            Plagiarism Awareness & Turnitin Support
          </li>
          <li>
            Fast and Reliable Assistance with Full Compliance
          </li>
        </div>
        </div>
        <div className='h-48 w-48 sm:h-60 sm:w-60 md:w-96 md:h-96 mt-4 md:mt-0'>
          <img src={whyalpha} className='w-full h-full' /></div>
        </div>

        <div className='md:flex-row md:justify-between flex flex-col items-center md:mt-6'>
          <div className='flex flex-col items-center md:items-start'style={{fontFamily: "Poppins"}}>
          <div className=' mt-4 text-center md:text-left md:px-6 w-64 sm:w-96 md:w-120 font-bold text-lg sm:text-xl md:text-2xl 'style={{fontFamily: "Poppins"}}>
          Our Legal Framework & Student Protection
          
        </div>
        <div className='pl-8 md:pl-10 mt-4 w-xs md:w-full'>
          <p className='font-medium mb-4 -ml-4 '>At Alphaverse, every academic service is:</p>
          <li>
            Provided for learning and reference purposes only
          </li>
          <li>
            Fully compliant with international academic integrity laws
          </li>
          <li>
           Monitored for transparency, originality, and professionalism
          </li>
          <li>
            Delivered by mentors with verified educational backgrounds
          </li>
          <p className='mt-4 font-medium md:w-lg -ml-4 '>We do not offer or promote ghostwriting, plagiarism, or impersonation of student work.
Our role is to educate, empower, and ethically support students worldwide.</p>
        </div>
        </div>
        <div className='h-48 w-48 sm:h-60 sm:w-60 md:w-96 md:h-96 mt-4 md:mt-0'>
          <img src={legal} className='w-full h-full md:-ml-6 ' /></div>
        </div>
      
      
    </div>
  );
}