import React from 'react'
import faq from "../assets/faq.gif";
import faq1 from "../assets/faq1.jpg";
import faq2 from "../assets/faq2.jpg";
import faq3 from "../assets/faq3.jpg";
import faq4 from "../assets/faq4.jpg";
import faq5 from "../assets/faq5.jpg";
import faq6 from "../assets/faq6.jpg";

export default function FAQs({darkMode}) {
  return (
    <>
      <div className='min-h-screen mb-8 md:mb-12' style={{fontFamily: "Poppins"}}>
        <div className={`text-center py-2 font-bold md:text-2xl ${darkMode ? "bg-white text-black" : "bg-[#D9D9D9]"}`}>Frequently Asked
           Questions </div>
        <div className='flex flex-col items-center md:flex-row md:gap-30'> 
        <div className='md:px-10 px-4'>
        <div className='flex flex-col md:items-start mt-2 md:mt-4'>
          <div className='  w-xs sm:w-xs md:w-lg  font-bold text-xl'> What services does
             Alphaverse offer?</div>
          <div className='  text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-2 md:mt-4 '>We provide a
             full range of academic writing services, including:</div>
        </div>
        <ul className='list-disc ml-4 mt-6 font-semibold'>
          <li>Essays, Reports, and Assignments</li>
          <li>Dissertations & Thesis Writing</li>
          <li>Research Proposals & Case Studies</li>
          <li>Presentations (PowerPoint & Poster)</li>
          <li>Reflective Journals & Critical Reviews</li>
          <li>Coursework, Homework, and Exam Assistance</li>
        </ul>
        <div className=' text-sm sm:text-base w-2xs sm:w-xs md:w-lg mt-4 '>All content is 100% plagiarism-free, well-researched, and customised as per your 
          university guidelines.</div>
      </div>
      <div className='w-xs sm:w-sm md:w-lg md:h-120 mt-4 md:mt-8 shadow-xl'><img src={faq} className='w-full h-full' /></div>
      </div>
      <div className='flex flex-col items-center md:flex-row md:gap-30 md:mt-8'>
      <div className='flex flex-col items-center md:items-start md:px-10 py-6 md:mt-14'>
        <div className='w-2xs sm:w-xs md:w-lg  font-bold text-xl'>Is your service confidential?</div>
        <div className='w-xs sm:w-xs md:w-lg mt-2 md:mt-4 text-center md:text-left '>Yes, absolutely. Alphaverse maintains strict confidentiality. Your personal information, 
          order details, and documents are never shared with any third party. We also sign NDAs 
          (Non-Disclosure Agreements) if you'd like to add assurance.</div>
      </div>
      <div className='w-xs sm:w-sm md:w-lg md:h-96 mt-2 shadow-xl'><img src={faq1} className='w-full h-full'/></div>
      </div>

      <div className='mt-6 md:mt-10 md:flex md:px-10'>
        <div className='flex justify-center md:justify-start '>
          <div className='h-40 w-32 sm:w-42 sm:h-42 md:h-44 md:w-44 shadow-xl'><img src={faq2} className='w-full h-full'/></div>
          <div className='ml-4 flex flex-col justify-center  '>
            <div className='font-semibold text-sm md:text-xl'>How do I place an order? </div>
          <div className='  w-48 text-xs md:text-lg md:w-md mt-0.5 md:mt-2'>Contact us via WhatsApp, email, or our online order form. Share your assignment brief 
            and deadline. We will provide a free quote. Once confirmed, we begin work and deliver your
             completed project by the agreed deadline.</div>
          </div>
        </div>

          <div className='flex justify-center md:justify-start mt-4 md:mt-0'>
          <div className='h-40 w-32 sm:w-42 sm:h-42 md:h-44 md:w-44 shadow-xl'><img src={faq3} className='w-full h-full'/></div>
          <div className='ml-4 flex flex-col justify-center  '>
            <div className='font-semibold text-sm md:text-xl'>Are your writers qualified?  </div>
          <div className='  w-48 text-xs md:text-lg md:w-md mt-0.5 md:mt-2'>Yes. Our writers are highly
             qualified professionals with degrees from top UK and international universities. Each writer
              specialises in specific academic fields and has years of experience delivering high-scoring 
              academic content.</div>
          </div>
        </div>
        
      </div>

      <div className='flex flex-col items-center md:flex-row mt-8'>
        <div className='flex flex-col items-center '>
        <div className='w-2xs sm:w-xs md:w-md'><img src={faq4} className='w-full h-full' /></div>
        <div className='font-semibold mt-4 text-lg md:text-2xl w-3xs sm:w-2xs md:w-sm text-center'>What
           if I’m not satisfied with the work?  </div>
           <div className='w-xs text-center mt-2 md:ml-6'>Client satisfaction is our priority. If you're unhappy, we'll work closely with you to
             revise or improve the document until it meets your expectations. In rare cases, a partial
              or full refund may be offered as per our refund policy</div>
      </div>
      <div className='flex flex-col items-center  '>
        <div className='w-2xs sm:w-xs md:w-md'><img src={faq5} className='w-full h-full' /></div>
        <div className='font-semibold mt-4 text-lg md:text-2xl w-3xs sm:w-2xs md:w-sm text-center'>Do you offer revisions?   </div>
           <div className='w-xs text-center  mt-2 md:ml-6'>Yes. We offer free revisions within 7
             days of delivery. If the original instructions were followed and you still need changes,
              we’re happy to revise your document until you’re satisfied.</div>
      </div>
      <div className='flex flex-col items-center '>
        <div className='w-2xs sm:w-xs md:w-md mt-4 md:mt-0'><img src={faq6} className='w-full h-full' /></div>
        <div className='font-semibold mt-4 text-lg md:text-2xl w-3xs sm:w-2xs md:w-sm text-center'>
           How do you ensure plagiarism-free content?  </div>
           <div className='w-xs text-center  mt-2 md:ml-6'>Every document is written from scratch and
             checked using premium plagiarism detection tools (e.g., Turnitin-equivalent checkers).
              A free plagiarism report is provided upon request.</div>
      </div>
      </div>

      </div>
    </>
  )
}
