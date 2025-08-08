import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Safwan",
      location: "Kerala, India",
      image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
      quote: "The Hifzul Quran program transformed my spiritual journey, providing me with both knowledge and community support."
    },
    {
      name: "Abdullah Kalamban",
      location: "Kerala, India",
      image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
      quote: "The faculty's dedication and the vibrant campus life helped me grow as a leader and scholar."
    },
    {
      name: "Jamal",
      location: "Egypt",
      image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
      quote: "Studying at this institution gave me a global perspective while deepening my Islamic knowledge."
    },
    {
      name: "Malik Bin Sulaiman",
      location: "Abu Dhabi, UAE",
      image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
      quote: "The academic programs and campus activities prepared me for a meaningful career in Islamic finance."
    }
  ];

  const slideForward = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideBackward = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const backgroundPattern = (
    <div className="absolute inset-0 opacity-5 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-400 rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 border-2 border-emerald-300 -rotate-12 animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-teal-300 rotate-45 animate-pulse delay-3000"></div>
    </div>
  );

  return (
    <div id="testimonials" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
      {backgroundPattern}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
            animate={{
              y: [-20, -80, -20],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Student Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students about their transformative experiences at our institution.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.button
            onClick={slideBackward}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={slideForward}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name}'s avatar`}
                      className="w-20 h-20 rounded-full border-4 border-emerald-500 object-cover"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white">
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <Quote className="w-8 h-8 text-emerald-500 mb-4 mx-auto md:mx-0" />
                    <p className="text-xl text-gray-600 italic mb-4">{testimonials[currentIndex].quote}</p>
                    <h3 className="text-xl font-bold text-emerald-600">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of a transformative journey that combines academic excellence with spiritual growth.
          </p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Share your story"
          >
            Share Your Story
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;