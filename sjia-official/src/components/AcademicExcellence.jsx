import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Star, 
  GraduationCap, 
  Trophy, 
  Users, 
  Heart, 
  ChevronRight 
} from 'lucide-react';

// Dummy data for design purposes
const topRankHolders = [
  {
    name: "Amina Rahman",
    rank: "1st",
    program: "Hifzul Quran",
    description: "Achieved perfect scores in Tajweed and memorization.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    name: "Yusuf Al-Sayed",
    rank: "2nd",
    program: "Mutawwal",
    description: "Excelled in Islamic jurisprudence and Hadith studies.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    name: "Fatima Noor",
    rank: "3rd",
    program: "Bachelor’s in Islamic Education",
    description: "Outstanding performance in pedagogy and research.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  }
];

const awardRecipients = [
  {
    name: "Abdullah Khan",
    award: "Scholar of the Year",
    year: 2024,
    description: "Recognized for exceptional academic and community contributions.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    name: "Safa Beegam",
    award: "Excellence in Quran Recitation",
    year: 2024,
    description: "Won first place in the national Quran competition.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    name: "Malik Bin Sulaiman",
    award: "Leadership Award",
    year: 2023,
    description: "Led successful student initiatives and charity drives.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  }
];

const specialMoments = [
  {
    title: "Graduation Ceremony 2024",
    description: "Celebrating the achievements of our graduates.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    title: "Quran Competition Finals",
    description: "Students showcased their memorization skills.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    title: "Cultural Fest Highlights",
    description: "A vibrant display of Islamic art and performances.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  },
  {
    title: "Community Service Day",
    description: "Students giving back to the local community.",
    image: "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
  }
];

const AcademicExcellence = () => {
  const containerRef = useRef(null);
  const [rankRef, rankInView] = useInView({ once: true, threshold: 0.2 });
  const [awardRef, awardInView] = useInView({ once: true, threshold: 0.2 });
  const [momentRef, momentInView] = useInView({ once: true, threshold: 0.2 });

  const backgroundPattern = (
    <div className="absolute inset-0 opacity-5 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-400 rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 border-2 border-emerald-300 -rotate-12 animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-teal-300 rotate-45 animate-pulse delay-3000"></div>
    </div>
  );

  return (
    <div ref={containerRef} id="academic-excellence" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
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
            Celebrating Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We honor the outstanding achievements of our students, from top ranks to prestigious awards and unforgettable moments that define their journey.
          </p>
        </motion.div>

        {/* Top Rank Holders */}
        <motion.div
          ref={rankRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: rankInView ? 1 : 0, y: rankInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Top Rank Holders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRankHolders.map((holder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: rankInView ? 1 : 0, scale: rankInView ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="relative mb-4">
                  <img
                    src={holder.image}
                    alt={`${holder.name}'s profile`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-500"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{holder.name}</h3>
                <p className="text-emerald-600 font-semibold text-center mb-2">{holder.rank} - {holder.program}</p>
                <p className="text-gray-600 text-center">{holder.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Award Recipients */}
        <motion.div
          ref={awardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: awardInView ? 1 : 0, y: awardInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Award Recipients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardRecipients.map((recipient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: awardInView ? 1 : 0, scale: awardInView ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{recipient.name}</h3>
                <p className="text-emerald-600 font-semibold text-center mb-2">{recipient.award} ({recipient.year})</p>
                <p className="text-gray-600 text-center">{recipient.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Moments Gallery */}
        <motion.div
          ref={momentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: momentInView ? 1 : 0, y: momentInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Special Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: momentInView ? 1 : 0, scale: momentInView ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-lg font-bold">{moment.title}</h3>
                    <p className="text-white text-sm">{moment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Strive for Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of scholars and achieve your academic and spiritual potential through dedication and hard work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Apply for admission"
            >
              Apply Now
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Learn about scholarships"
            >
              Scholarships <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicExcellence;