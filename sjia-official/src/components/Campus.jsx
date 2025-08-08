import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Award, 
  BookOpen, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Building, 
  Heart, 
  Trophy 
} from 'lucide-react';

// Mock images - replace with actual campus images if available
const campusImages = [
  "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
  "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
  "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883",
  "https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
];

const Campus = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Campus activities data
  const activities = [
    { title: "Annual Quran Recitation Competition", icon: BookOpen, description: "Students compete in Tajweed and memorization, showcasing their Quranic mastery." },
    { title: "Islamic Cultural Fest", icon: Star, description: "A vibrant celebration of Islamic art, calligraphy, and nasheed performances." },
    { title: "Community Service Drives", icon: Heart, description: "Organized charity events and outreach programs to serve local communities." },
    { title: "Academic Seminars", icon: Calendar, description: "Guest lectures and workshops by renowned Islamic scholars." },
    { title: "Sports Tournaments", icon: Trophy, description: "Interdepartmental competitions fostering teamwork and fitness." },
    { title: "Student Association Gatherings", icon: Users, description: "Regular meetings for leadership development and student initiatives." }
  ];

  // Student association key members
  const associationMembers = [
    { name: "Ahmed Al-Sayed", role: "President", description: "Leads student initiatives and campus events.", image: null },
    { name: "Fatima Noor", role: "Vice President", description: "Coordinates community service and cultural programs.", image: null },
    { name: "Yusuf Khan", role: "Event Coordinator", description: "Organizes fests, competitions, and gatherings.", image: null },
    { name: "Aisha Rahman", role: "Treasurer", description: "Manages association budget and fundraising.", image: null }
  ];

  const backgroundPattern = (
    <div className="absolute inset-0 opacity-5 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-400 rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 border-2 border-emerald-300 -rotate-12 animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-teal-300 rotate-45 animate-pulse delay-3000"></div>
    </div>
  );

  return (
    <div ref={containerRef} id="campus" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
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
            Our Vibrant Campus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience a dynamic campus life filled with academic excellence, spiritual growth, and vibrant community activities that shape well-rounded individuals.
          </p>
        </motion.div>

        {/* Campus Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <video
            ref={videoRef}
            src="https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139"
            loop
            muted={isMuted}
            playsInline
            className="w-full h-96 object-cover"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            poster="https://ik.imagekit.io/aksWebSolutions/SJIA/View01.jpg?updatedAt=1754629459883"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={handleVideoToggle}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <button
              onClick={handleMuteToggle}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </motion.div>

        {/* Campus Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Campus Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{activity.title}</h3>
                  <p className="text-gray-600 text-center">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Campus Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Campus image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Association */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Student Association</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Our student association drives campus initiatives, fostering leadership, community service, and cultural engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {associationMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our vibrant community and participate in enriching activities that nurture your academic and spiritual growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Schedule a campus visit"
            >
              Schedule Visit
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Explore campus life"
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Campus;