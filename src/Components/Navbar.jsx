import React, { useState } from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faBars, faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";  
import { Link } from "react-router-dom";  
  
// Assets  
import Logo from "../assets/alphaverse-logo.png";  
import Logowhite from "../assets/alphaversel.png";  
import Light from "../assets/flare 1.png";  
import Moon from "../assets/islam 1.png";  
import Moonwhite from "../assets/islam 2.png";  
import Lightwhite from "../assets/flare 2.png";  
  
export default function Navbar({ darkMode, setDarkMode }) {  
  
  const [open, setOpen] = useState(false);  
  const [down, setDown] = useState(false);  
  const [resources, setResources] = useState(false);  
  
  return (  
    <>  
      {/* NAVBAR */}  
      <div className={`sticky top-0 z-40 w-full border-b ${  
        darkMode ? "bg-black text-white" : "bg-white text-black"  
      }`}>  
        <nav className="flex items-center justify-between px-4 py-6 relative">  
  
          {/* LEFT */}  
          <div className="flex items-center gap-3">  
            <button  
              className="md:hidden"   
              onClick={() => setOpen(true)}  
            >  
              <FontAwesomeIcon icon={faBars} className="text-2xl" />  
            </button>  
  
            <img  
              src={darkMode ? Logowhite : Logo}  
              alt="Logo"  
              className="hidden md:block h-14 w-auto object-contain"  
            />  
          </div>  
  
          {/* CENTER */}  
          <img  
            src={darkMode ? Logowhite : Logo}  
            alt="Logo"  
            className="md:hidden h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"  
          />  
  
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">  
            <Link to="/" className="hover:border-b border-gray-500">Home</Link>  
  
            {/* SERVICES */}  
            <div className="relative">  
              <div  
                className="flex items-center gap-1 cursor-pointer hover:border-b border-gray-500"  
                onClick={() => {  
                  setDown(!down);  
                  setResources(false);  
                }}  
              >  
                Services <FontAwesomeIcon icon={faChevronDown} />  
              </div>  
  
              {down && (  
                <div className={`absolute mt-2 w-40 rounded-xl shadow-xl p-2 text-xs ${  
                  darkMode ? "bg-black text-white" : "bg-[#D9D9D9] text-black"  
                }`}>  
                  <Link to="/academic-services" onClick={() => setDown(false)} className="block py-1">Academic Services</Link>  
                  <Link to="/digital-services" onClick={() => setDown(false)} className="block py-1">Digital Services</Link>  
                  <Link to="/career-elevate" onClick={() => setDown(false)} className="block py-1">Career Elevate</Link>  
                  <Link to="/personal-growth" onClick={() => setDown(false)} className="block py-1">Personal Growth</Link>  
                </div>  
              )}  
            </div>  
  
            {/* RESOURCES */}  
            <div className="relative">  
              <div  
                className="flex items-center gap-1 cursor-pointer hover:border-b border-gray-500"  
                onClick={() => {  
                  setResources(!resources);  
                  setDown(false);  
                }}  
              >  
                Resources <FontAwesomeIcon icon={faChevronDown} />  
              </div>  
  
              {resources && (  
                <div className={`absolute mt-2 w-32 rounded-xl shadow-xl p-2 text-xs ${  
                  darkMode ? "bg-black text-white" : "bg-[#D9D9D9] text-black"  
                }`}>  
                  <Link to="/samp-les" onClick={() => setResources(false)} className="block py-1">Samples</Link>  
                  <Link to="/testi-monials" onClick={() => setResources(false)} className="block py-1">Testimonials</Link>  
                  <Link to="/legal-policy" onClick={() => setResources(false)} className="block py-1">Legal & Policy</Link>  
                  <Link to="/fa-qs" onClick={() => setResources(false)} className="block py-1">FAQs</Link>  
                </div>  
              )}  
            </div>  
  
            <Link to="/about-us" className="hover:border-b border-gray-500">About Us</Link>  
          </div>  
  
          {/* TOGGLE BUTTON DESKTOP */}  
          <div className="hidden md:flex items-center gap-3 shadow-[0_3px_6px_rgba(0,0,0,0.12)] rounded-4xl border border-gray-500 px-4 py-2 bg-linear-to-r from-[rgba(0,0,0,0.1)] via-[rgba(61,61,61,0.1)]
        to-[rgba(23,23,23,0.2)] 
          ">  
            <img  
              src={darkMode ? Lightwhite : Light}  
              alt="Light"  
              className="h-4 cursor-pointer"  
              onClick={() => setDarkMode(false)}  
            />  
            <img   
              src={darkMode ? Moonwhite : Moon}  
              alt="Dark"  
              className="h-4 cursor-pointer"  
              onClick={() => setDarkMode(true)}  
            />  
          </div>  
  
          {/* TOGGLE MOBILE */}  
          <div className="md:hidden absolute right-4 flex items-center gap-2 shadow-[0_3px_6px_rgba(0,0,0,0.12)] rounded-4xl border border-gray-500 px-4 py-2
          bg-linear-to-r from-[rgba(0,0,0,0.1)] via-[rgba(61,61,61,0.1)]
        to-[rgba(23,23,23,0.2)]">  
            <img  
              src={darkMode ? Lightwhite : Light}  
              alt="Light"  
              className="h-4 cursor-pointer"  
              onClick={() => setDarkMode(false)}  
            />  
            <img  
              src={darkMode ? Moonwhite : Moon}  
              alt="Dark"  
              className="h-4 cursor-pointer"  
              onClick={() => setDarkMode(true)}  
            />  
          </div>  
        </nav>  
      </div>  
  
      {/* MOBILE MENU */}  
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>  
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />  
  
        <div className={`absolute right-0 top-0 h-full w-64 shadow-xl p-4 ${  
          darkMode ? "bg-black text-white" : "bg-white text-black"  
        }`}>  
          <button className="p-4" onClick={() => setOpen(false)}>  
            <FontAwesomeIcon icon={faXmark} className="text-xl" />  
          </button>  
  
          <div className="space-y-4 mt-4">  
            <Link to="/" onClick={() => setOpen(false)} className="block font-semibold">Home</Link>  
            <Link to="/academic-services" onClick={() => setOpen(false)} className="block font-semibold">Academic Services</Link>  
            <Link to="/digital-services" onClick={() => setOpen(false)} className="block font-semibold">Digital Services</Link>  
            <Link to="/career-elevate" onClick={() => setOpen(false)} className="block font-semibold">Career Elevate</Link>  
            <Link to="/personal-growth" onClick={() => setOpen(false)} className="block font-semibold">Personal Growth</Link>  
            <Link to="/samp-les" onClick={() => setOpen(false)} className="block font-semibold">Samples</Link>  
            <Link to="/testi-monials" onClick={() => setOpen(false)} className="block font-semibold">Testimonials</Link>  
            <Link to="/legal-policy" onClick={() => setOpen(false)} className="block font-semibold">Legal & Policy</Link>  
            <Link to="/fa-qs" onClick={() => setOpen(false)} className="block font-semibold">FAQs</Link>  
            <Link to="/about-us" onClick={() => setOpen(false)} className="block font-semibold">About Us</Link>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
}