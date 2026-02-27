import React from "react";
import Logo from "../assets/Logo.png";
import WhiteLogo from "../assets/WhiteLogo.png";


import '../App.css';

export default function HeroSection({ darkMode }) {

  return (
    <section className={`relative w-full ${darkMode ? "bg-black" : "bg-white"}`}>
      
      {/* Content Container */}
      <div className="relative flex flex-col items-center text-center h-92 md:h-screen
      px-4 md:px-0">
        
        {/* Logo */}
        

        {/* Heading */}
       <h1
  className={`animate-classicFade tracking-wider font-bold
              text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-6 md:mt-4 
              ${darkMode ? "text-white" : "text-black"}`}
  style={{
    fontFamily: 'Montaga, serif',
    textShadow: darkMode
      ? "0 0 20px rgba(255,255,255,0.9), 0 0 25px rgba(255,255,255,0.7)"
      : "0 0 20px rgba(0,0,0,0.3), 0 0 25px rgba(0,0,0,0.3)",
  }}
>
  ALPHAVERSE
</h1>

        {/* Subheading */}
        <p
          className={`animate-wave mt-8 md:mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl 
                      ${darkMode ? "text-white" : "text-black"}`}
          style={{ fontFamily: "Poppins, serif" }}
        >
          Empowering Students, Professionals & Entrepreneurs through Creativity, Technology & Integrity.
        </p>

        {/* Button */}
        <a
          href="https://wa.me/923317848769"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`cursor-pointer mt-8 md:mt-4 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                        rounded-4xl font-bold border shadow-[0_3px_6px_rgba(0,0,0,0.12)] border-gray-500 bg-linear-to-r from-[rgba(0,0,0,0.1)] via-[rgba(61,61,61,0.1)]
        to-[rgba(23,23,23,0.2)]
                        transition-all duration-300 hover:-translate-y-1
                        ${
                          darkMode 
                          ? " text-white border-gray-400 hover:bg-gray-600" 
                          : " text-black border-gray-700 hover:bg-gray-200"
                        }`}
            style={{ fontFamily: "Poppins" }}
          >
            Let's Chat
          </button>
        </a>
        <img
          src={darkMode ? WhiteLogo : Logo}
          alt="Logo"
          className="w-24 sm:w-32 md:w-40 lg:w-52 xl:w-64 h-auto mt-8 md:mt-14 animate-pauseSpin360 "
        />
      </div>
    </section>
  );
}
