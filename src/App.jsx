import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Academicservices from './Pages/Academicservices';
import Digitalservices from './Pages/Digitalservices';
import Careerelevate from './Pages/Careerelevate';
import Samples from './Pages/Samples';
import Testimonials from './Pages/Testimonials';
import FAQs from './Pages/FAQs';
import LegalPolicy from './Pages/LegalPolicy';
import Aboutus from './Pages/Aboutus';
import Personalgrowth from './Pages/Personalgrowth';

function App() {

  // ✅ Global Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      
      {/* Navbar ko control dena */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/academic-services" element={<Academicservices darkMode={darkMode} />} />
        <Route path="/digital-services" element={<Digitalservices darkMode={darkMode} />} />
        <Route path="/career-elevate" element={<Careerelevate darkMode={darkMode} />} />
        <Route path="/personal-growth" element={<Personalgrowth darkMode={darkMode} />} />
        <Route path="/Samp-les" element={<Samples darkMode={darkMode} />} />
        <Route path="/testi-monials" element={<Testimonials darkMode={darkMode} />} />
        <Route path="/legal-policy" element={<LegalPolicy darkMode={darkMode} />} />
        <Route path="/fa-qs" element={<FAQs darkMode={darkMode} />} />
        <Route path="/about-us" element={<Aboutus darkMode={darkMode} />} />
      </Routes>

      <Footer darkMode={darkMode} />

    </div>
  );
}

export default App;