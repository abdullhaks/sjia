import React, { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import AcademicExcellence from './components/AcademicExcellence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admissions from './components/Admissions';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id='programs'>
        <Programs/>
      </div>
      <div id="campus">
        <Campus />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="academicExcellence">
        <AcademicExcellence />
      </div>
      <div id="admissions">
        <Admissions />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>

    </div>
  );

};

export default App

// {/* Placeholder sections for scroll behavior */}
//       <div id="programs" className="h-96 bg-gray-100 flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-800">Programs Section</h2>
//         <About/>
//       </div>
      
//       <div id="about" className="h-96 bg-white flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-800">About Section</h2>
//       </div>
      
//       <div id="campus" className="h-96 bg-gray-100 flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-800">Campus Section</h2>
//       </div>
      
//       <div id="testimonials" className="h-96 bg-white flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-800">Testimonials Section</h2>
//       </div>
      
//       <div id="contact" className="h-96 bg-gray-100 flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-800">Contact Section</h2>
//       </div>