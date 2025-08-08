import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import quran from "../assets/quran.mp4";
import { 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Heart, 
  Target, 
  TrendingUp, 
  MapPin,
  Calendar,
  Star,
  Building,
  Lightbulb,
  Shield,
  Crown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  User,
  GraduationCap,
  Trophy
} from 'lucide-react';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('mission');
  const [countersStarted, setCountersStarted] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (isStatsInView && !countersStarted) {
      setCountersStarted(true);
    }
  }, [isStatsInView, countersStarted]);

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

  // Counter Animation Hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!countersStarted) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, countersStarted]);
    
    return count;
  };

  // Statistics data with animated counters
  const statistics = [
    { 
      value: useCounter(45), 
      suffix: '+', 
      label: 'Years of Excellence', 
      icon: Calendar,
      description: 'Serving the community since 1978'
    },
    { 
      value: useCounter(5000), 
      suffix: '+', 
      label: 'Graduates', 
      icon: GraduationCap,
      description: 'Alumni making global impact'
    },
    { 
      value: useCounter(85), 
      suffix: '+', 
      label: 'Expert Faculty', 
      icon: Users,
      description: 'Scholars from prestigious institutions'
    },
    { 
      value: useCounter(98), 
      suffix: '%', 
      label: 'Success Rate', 
      icon: Trophy,
      description: 'Graduate employment and advancement'
    },
    { 
      value: useCounter(25), 
      suffix: '+', 
      label: 'Countries Served', 
      icon: Globe,
      description: 'International student community'
    },
    { 
      value: useCounter(50), 
      suffix: '+', 
      label: 'Community Programs', 
      icon: Heart,
      description: 'Outreach and social initiatives'
    }
  ];

  // Timeline data for institutional history
  const timeline = [
    {
      year: '1978',
      title: 'Foundation',
      description: 'Established with a vision to provide quality Islamic education',
      highlight: true
    },
    {
      year: '1985',
      title: 'First Graduation',
      description: 'Celebrated our first class of Hafiz graduates',
      highlight: false
    },
    {
      year: '1992',
      title: 'Campus Expansion',
      description: 'Built new facilities including library and dormitories',
      highlight: false
    },
    {
      year: '1999',
      title: 'University Status',
      description: 'Achieved university status and accreditation',
      highlight: true
    },
    {
      year: '2005',
      title: 'International Recognition',
      description: 'Partnerships with Al-Azhar and other prestigious institutions',
      highlight: false
    },
    {
      year: '2012',
      title: 'Digital Innovation',
      description: 'Launched online learning platform and digital resources',
      highlight: false
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Expanded to serve students from over 25 countries',
      highlight: true
    },
    {
      year: '2023',
      title: 'Modern Excellence',
      description: 'State-of-the-art facilities and cutting-edge programs',
      highlight: false
    }
  ];

  // Leadership team data
  const leadership = [
    {
      name: 'Dr. Abdullah Rahman Al-Faruqi',
      position: 'Chancellor',
      qualification: 'PhD Islamic Studies, Harvard University',
      experience: '30 years',
      specialization: 'Islamic Philosophy and Contemporary Issues',
      image: null
    },
    {
      name: 'Prof. Amina Khatoon',
      position: 'Vice Chancellor - Academic Affairs',
      qualification: 'PhD Education, Oxford University',
      experience: '25 years',
      specialization: 'Islamic Education and Pedagogy',
      image: null
    },
    {
      name: 'Dr. Omar Hassan Al-Baghdadi',
      position: 'Dean of Islamic Studies',
      qualification: 'PhD Quranic Studies, Al-Azhar University',
      experience: '22 years',
      specialization: 'Quranic Exegesis and Arabic Literature',
      image: null
    },
    {
      name: 'Dr. Sarah Abdullah',
      position: 'Director of Student Affairs',
      qualification: 'PhD Psychology, Cambridge University',
      experience: '18 years',
      specialization: 'Student Development and Counseling',
      image: null
    },
    {
      name: 'Sheikh Muhammad Ali',
      position: 'Head of Religious Affairs',
      qualification: 'Master Islamic Jurisprudence, Medina University',
      experience: '20 years',
      specialization: 'Fiqh and Islamic Law',
      image: null
    },
    {
      name: 'Dr. Khadijah Hassan',
      position: 'Research Director',
      qualification: 'PhD Islamic History, Yale University',
      experience: '16 years',
      specialization: 'Islamic Civilization and Research',
      image: null
    }
  ];

  // Core values data
  const values = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Pursuing the highest standards of education and scholarship in all our programs.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Spiritual Development',
      description: 'Nurturing the soul through authentic Islamic teachings and practices.',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Contributing positively to society through knowledge and compassionate action.',
      color: 'cyan'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to address contemporary challenges with Islamic wisdom.',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and ethical principles in all endeavors.',
      color: 'teal'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern methods while preserving traditional Islamic knowledge.',
      color: 'cyan'
    }
  ];

  // Infrastructure data
  const facilities = [
    {
      name: 'Central Library',
      description: 'Over 100,000 books and digital resources',
      features: ['Rare manuscript collection', 'Digital archives', '24/7 study halls', 'Research stations']
    },
    {
      name: 'Modern Classrooms',
      description: 'Smart classrooms with latest technology',
      features: ['Interactive boards', 'Audio-visual systems', 'Climate control', 'Flexible seating']
    },
    {
      name: 'Student Dormitories',
      description: 'Comfortable accommodation for 800+ students',
      features: ['Private rooms', 'Study areas', 'Prayer facilities', 'Recreation rooms']
    },
    {
      name: 'Mosque Complex',
      description: 'Beautiful mosque accommodating 2000 worshippers',
      features: ['Main prayer hall', 'Separate women section', 'Minaret', 'Islamic architecture']
    },
    {
      name: 'Conference Center',
      description: 'Modern facility for seminars and events',
      features: ['500-seat auditorium', 'Meeting rooms', 'Exhibition halls', 'Catering facilities']
    },
    {
      name: 'Sports Complex',
      description: 'Complete recreational facilities',
      features: ['Indoor gymnasium', 'Outdoor courts', 'Swimming pool', 'Fitness center']
    }
  ];

  const backgroundPattern = (
    <div className="absolute inset-0 opacity-5 overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 border-2 border-emerald-400 rotate-45 animate-pulse"></div>
      <div className="absolute top-60 right-32 w-32 h-32 border-2 border-teal-400 rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-36 h-36 border-2 border-emerald-300 -rotate-12 animate-pulse delay-2000"></div>
      <div className="absolute bottom-80 right-1/4 w-28 h-28 border-2 border-teal-300 rotate-45 animate-pulse delay-3000"></div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
      {backgroundPattern}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
            animate={{
              y: [-30, -100, -30],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Side - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={quran}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-96 object-cover"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={handleVideoToggle}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  {isVideoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                <button
                  onClick={handleMuteToggle}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-emerald-600 font-semibold text-lg mb-2 uppercase tracking-wider">About Our Institution</h3>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Nurturing Excellence in Islamic Education
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                For over four decades, our institution has been a beacon of Islamic knowledge and academic excellence, 
                combining traditional Islamic scholarship with modern educational methodologies to prepare students 
                for leadership roles in their communities and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe in holistic education that nurtures both the mind and soul, fostering critical thinking 
                while maintaining strong spiritual foundations. Our graduates serve as scholars, educators, 
                community leaders, and professionals worldwide, carrying forward the torch of Islamic knowledge 
                and values in the contemporary world.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Explore Programs
                </button>
                <button className="border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300">
                  Campus Tour
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Decades of excellence reflected in our achievements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission, Vision, Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide our educational mission</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg">
              {['mission', 'vision', 'values'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'mission' && (
                <div className="max-w-4xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-12 rounded-2xl text-white mb-8">
                    <Target className="w-16 h-16 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-xl leading-relaxed">
                      To provide exceptional Islamic education that combines traditional scholarship with contemporary knowledge, 
                      fostering spiritual growth, intellectual development, and moral leadership to serve humanity with wisdom, 
                      compassion, and excellence.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'vision' && (
                <div className="max-w-4xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-12 rounded-2xl text-white mb-8">
                    <Crown className="w-16 h-16 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                    <p className="text-xl leading-relaxed">
                      To be a globally recognized center of Islamic learning and excellence, producing graduates who are 
                      scholars, leaders, and advocates for justice, peace, and positive change in their communities 
                      and the world at large.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'values' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {values.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r from-${value.color}-500 to-${value.color === 'emerald' ? 'teal' : 'emerald'}-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">{value.title}</h4>
                        <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600">Milestones in our institutional development</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start mb-8"
                >
                  {/* Timeline Dot */}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 z-10 ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 ring-4 ring-emerald-200' 
                      : 'bg-white border-4 border-emerald-300'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="ml-8 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg flex-1 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`text-2xl font-bold ${
                        item.highlight ? 'text-emerald-600' : 'text-teal-600'
                      }`}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Distinguished scholars and administrators guiding our institution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{leader.name}</h3>
                  <p className="text-emerald-600 font-semibold text-center mb-3">{leader.position}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Education:</strong> {leader.qualification}</p>
                    <p><strong>Experience:</strong> {leader.experience}</p>
                    <p><strong>Specialization:</strong> {leader.specialization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Modern infrastructure supporting academic and spiritual growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{facility.name}</h3>
                <p className="text-gray-600 text-center mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Academic Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on a transformative educational journey that combines spiritual growth with academic excellence. 
            Discover your potential and contribute to positive change in the world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;