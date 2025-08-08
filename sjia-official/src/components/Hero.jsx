import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Play, Volume2, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import audio from '../assets/salaam.mp3';

// Mock logo - replace with your actual logo
const collegeLogo =
  "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='23' fill='%23059669' stroke='%23ffffff' stroke-width='4'/%3E%3Ctext x='25' y='32' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EC%3C/text%3E%3C/svg%3E";

// Mock college background image
const collegeImage =
  "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883";

const Hero = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  // BlurText component with one-time animation
  const BlurText = ({
    text,
    delay = 100,
    className = '',
    direction = 'up',
  }) => {
    const words = text.split(' ');

    return (
      <div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{
              opacity: 0,
              filter: 'blur(10px)',
              y: direction === 'up' ? 50 : -50,
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: (index * delay) / 1000,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  };

  // ShinyText component for greeting
  const ShinyText = ({ text, className = '' }) => (
    <motion.div
      className={`inline-block bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-transparent bg-[length:200%_100%] ${className}`}
      animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      {text}
    </motion.div>
  );

  const playGreeting = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Audio playback error:', error);
        });
        setIsPlaying(true);
      }
    }
  };

  // Handle audio end
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Audio Element */}
      <audio ref={audioRef} src={audio} onEnded={handleAudioEnded} />

      {/* Complex Background System */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(5, 46, 22, 0.9)), url(${collegeImage})`,
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Islamic Geometric Pattern
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M50 0L62.5 37.5H100L75 62.5L87.5 100L50 75L12.5 100L25 62.5L0 37.5H37.5L50 0Z' /%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='white' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            rotate: [0, 360],
          }}
          transition={{
            backgroundPosition: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            },
            rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
          }}
        /> */}

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-teal-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [-30, -120, -30],
              opacity: [particle.opacity, 0, particle.opacity],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-40 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <BlurText
              text={t('hero_head')}
              delay={120}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight"
            />

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 2, duration: 1 }}
            />
          </motion.div>

          {/* Quranic Verse */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <BlurText
              text={t('hero_ayah')}
              delay={80}
              direction="down"
              className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium font-arabic"
            />

            <motion.p
              className="text-sm md:text-base text-white/70 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              - Qur'an 39:9
            </motion.p>
          </motion.div>

          {/* Greeting Button */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={playGreeting}
              className={`group relative overflow-hidden px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all duration-500 ${
                isPlaying
                  ? 'scale-105 bg-white/20'
                  : 'hover:bg-white/15 hover:scale-105'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center space-x-3">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                >
                  {isPlaying ? (
                    <Volume2 className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </motion.div>

                <ShinyText
                  text="السلام عليكم ورحمة الله وبركاته"
                  className="text-lg font-arabic"
                />
              </div>

              {isPlaying && (
                <motion.div
                  className="absolute inset-0 border-2 border-white/50 rounded-full"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Explore Programs</span>
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Learn More</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
        >
          <span className="text-sm font-medium group-hover:text-white transition-colors">
            Scroll to explore
          </span>
          <motion.div
            className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;