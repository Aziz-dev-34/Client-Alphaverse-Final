import React from 'react'
import HeroSection from "../Components/HeroSection";

import Section3 from '../Components/Section3';


export default function Home({ darkMode }) {
  return (
    <>
     <HeroSection darkMode={darkMode} />
      <Section3 darkMode={darkMode}/>
      


    </>
  )
}

