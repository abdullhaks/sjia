import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  GraduationCap, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Star, 
  Play,
  ChevronRight,
  Download,
  User,
  Globe
} from 'lucide-react';

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Enhanced program data with comprehensive details
  const programs = [
    {
      id: 1,
      title: "Hifzul Quran",
      category: "religious",
      level: "Foundation",
      duration: "2-3 Years",
      students: 150,
      description: "Complete memorization of the Holy Quran with proper Tajweed and understanding",
      longDescription: "Our Hifzul Quran program is designed to help students memorize the entire Holy Quran while developing a deep spiritual connection. The curriculum includes Tajweed rules, Arabic pronunciation, and basic Islamic studies.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Tajweed Rules and Application",
        "Quranic Arabic Basics",
        "Memorization Techniques",
        "Islamic Ethics and Morals",
        "Prayer and Worship Practices"
      ],
      prerequisites: "Basic Arabic reading ability",
      certification: "Hifz Certificate with Ijazah",
      tuitionFee: "$1,200/year",
      scholarships: "Merit-based scholarships available",
      faculty: [
        { name: "Sheikh Abdullah Rahman", qualification: "PhD in Quranic Studies", experience: "15 years" },
        { name: "Hafiz Muhammad Ali", qualification: "Master in Islamic Studies", experience: "12 years" }
      ],
      outcomes: [
        "Complete Quran memorization",
        "Advanced Tajweed proficiency",
        "Islamic character development",
        "Community leadership skills"
      ]
    },
    {
      id: 2,
      title: "Mutawwal (Advanced Islamic Studies)",
      category: "religious",
      level: "Advanced",
      duration: "4 Years",
      students: 85,
      description: "Comprehensive study of Islamic jurisprudence, theology, and classical texts",
      longDescription: "The Mutawwal program offers advanced Islamic education covering Fiqh, Hadith, Tafseer, and Islamic philosophy. Students engage with classical Islamic texts and contemporary issues.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Advanced Fiqh and Jurisprudence",
        "Hadith Sciences and Methodology",
        "Quranic Exegesis (Tafseer)",
        "Islamic Philosophy and Theology",
        "Comparative Religion Studies",
        "Research Methodology",
        "Contemporary Islamic Issues"
      ],
      prerequisites: "Completed basic Islamic studies or equivalent",
      certification: "Advanced Islamic Studies Diploma",
      tuitionFee: "$2,400/year",
      scholarships: "Need and merit-based aid available",
      faculty: [
        { name: "Dr. Hassan Al-Baghdadi", qualification: "PhD from Al-Azhar University", experience: "20 years" },
        { name: "Sheikh Yusuf Al-Qaradawi", qualification: "Master in Islamic Law", experience: "18 years" }
      ],
      outcomes: [
        "Islamic scholarship expertise",
        "Community religious leadership",
        "Academic research capabilities",
        "Interfaith dialogue skills"
      ]
    },
    {
      id: 3,
      title: "Bachelor's Degree Programs",
      category: "undergraduate",
      level: "Undergraduate",
      duration: "4 Years",
      students: 320,
      description: "Comprehensive undergraduate programs combining Islamic studies with modern disciplines",
      longDescription: "Our undergraduate programs integrate Islamic values with contemporary academic disciplines, preparing students for professional careers while maintaining strong Islamic identity.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Islamic Studies Core Curriculum",
        "Major-specific coursework",
        "Research Methods and Critical Thinking",
        "Professional Communication Skills",
        "Internship and Practical Training",
        "Capstone Project",
        "Contemporary Issues Seminar"
      ],
      specializations: [
        "Islamic Banking and Finance",
        "Islamic Education and Pedagogy",
        "Arabic Language and Literature",
        "Islamic Psychology and Counseling",
        "Halal Business Management"
      ],
      prerequisites: "High school diploma with minimum GPA 3.0",
      certification: "Bachelor of Arts/Science with Islamic Studies",
      tuitionFee: "$3,600/year",
      scholarships: "Multiple scholarship programs available",
      faculty: [
        { name: "Dr. Amina Khatoon", qualification: "PhD in Islamic Education", experience: "16 years" },
        { name: "Prof. Omar Farouk", qualification: "PhD in Islamic Finance", experience: "22 years" }
      ],
      outcomes: [
        "Professional career readiness",
        "Islamic leadership skills",
        "Research and analytical abilities",
        "Global competency with Islamic values"
      ]
    },
    {
      id: 4,
      title: "Master's Degree Programs",
      category: "postgraduate",
      level: "Postgraduate",
      duration: "2 Years",
      students: 120,
      description: "Advanced graduate studies in Islamic disciplines and contemporary fields",
      longDescription: "Our master's programs offer specialized knowledge in various Islamic and contemporary fields, designed for scholars, professionals, and community leaders seeking advanced expertise.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Advanced Research Methodology",
        "Specialized Core Courses",
        "Comprehensive Examinations",
        "Thesis Research and Writing",
        "Teaching Assistantship",
        "Conference Presentations",
        "Publication Requirements"
      ],
      specializations: [
        "Islamic Jurisprudence (Fiqh)",
        "Quranic Studies and Tafseer",
        "Islamic History and Civilization",
        "Islamic Finance and Economics",
        "Comparative Religion"
      ],
      prerequisites: "Bachelor's degree with minimum 3.3 GPA",
      certification: "Master of Arts in Islamic Studies",
      tuitionFee: "$4,800/year",
      scholarships: "Research assistantships and fellowships",
      faculty: [
        { name: "Dr. Ibrahim Al-Faruqi", qualification: "PhD from Harvard Divinity", experience: "25 years" },
        { name: "Dr. Khadijah Hassan", qualification: "PhD in Islamic Philosophy", experience: "19 years" }
      ],
      outcomes: [
        "Advanced scholarly expertise",
        "Research and publication skills",
        "Academic and professional leadership",
        "Contribution to Islamic scholarship"
      ]
    },
    {
      id: 5,
      title: "Certificate Programs",
      category: "certificate",
      level: "Certificate",
      duration: "6 months - 1 Year",
      students: 200,
      description: "Focused certificate programs for specific Islamic knowledge areas",
      longDescription: "Short-term intensive programs designed for working professionals and community members seeking specialized Islamic knowledge without full degree commitment.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Program-specific Core Modules",
        "Practical Application Workshops",
        "Assessment and Evaluation",
        "Community Service Component",
        "Final Project or Examination"
      ],
      specializations: [
        "Islamic Chaplaincy",
        "Halal Certification",
        "Islamic Counseling Basics",
        "Quranic Arabic",
        "Islamic Art and Calligraphy"
      ],
      prerequisites: "High school diploma or equivalent",
      certification: "Certificate of Completion",
      tuitionFee: "$800-1,500/program",
      scholarships: "Community sponsorship available",
      faculty: [
        { name: "Sheikh Ahmad Malik", qualification: "Master in Islamic Counseling", experience: "14 years" },
        { name: "Ustadha Fatima Ali", qualification: "Certificate in Islamic Art", experience: "10 years" }
      ],
      outcomes: [
        "Specialized skill development",
        "Professional enhancement",
        "Community service readiness",
        "Personal spiritual growth"
      ]
    },
    {
      id: 6,
      title: "Online Learning Programs",
      category: "online",
      level: "All Levels",
      duration: "Flexible",
      students: 450,
      description: "Comprehensive online Islamic education accessible globally",
      longDescription: "Our online programs make quality Islamic education accessible to students worldwide, featuring live classes, recorded lectures, and interactive assignments.",
      videoUrl: "https://ik.imagekit.io/aksWebSolutions/SJIA/quran.mp4?updatedAt=1754630720139",
      syllabus: [
        "Interactive Online Modules",
        "Live Virtual Classes",
        "Discussion Forums and Q&A",
        "Digital Resource Library",
        "Online Assessments",
        "Virtual Office Hours",
        "Student Support Services"
      ],
      specializations: [
        "Online Quran Recitation",
        "Islamic Studies Fundamentals",
        "Arabic Language Course",
        "Islamic History Series",
        "Contemporary Muslim Issues"
      ],
      prerequisites: "Internet access and basic computer skills",
      certification: "Digital certificates and transcripts",
      tuitionFee: "$400-2,000/course",
      scholarships: "Global accessibility scholarships",
      faculty: [
        { name: "Dr. Sarah Abdullah", qualification: "PhD in Educational Technology", experience: "13 years" },
        { name: "Sheikh Mahmoud Hassan", qualification: "Master in Digital Islamic Education", experience: "11 years" }
      ],
      outcomes: [
        "Flexible learning achievement",
        "Global Islamic community connection",
        "Self-paced skill development",
        "Continuous spiritual growth"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', icon: BookOpen },
    { id: 'religious', name: 'Religious Studies', icon: Award },
    { id: 'undergraduate', name: 'Undergraduate', icon: GraduationCap },
    { id: 'postgraduate', name: 'Postgraduate', icon: Users },
    { id: 'certificate', name: 'Certificates', icon: Star },
    { id: 'online', name: 'Online Learning', icon: Globe }
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  const handleVideoPlay = (programId) => {
    setPlayingVideo(programId);
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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
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
            Academic Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of Islamic education programs designed to nurture both spiritual growth and intellectual excellence for students at every level of their educational journey.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                    : 'bg-white/70 backdrop-blur-md text-gray-700 hover:bg-white/90 hover:shadow-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <video
                    ref={videoRef}
                    src={program.videoUrl}
                    autoPlay={playingVideo === program.id}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button
                    onClick={() => handleVideoPlay(program.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {program.students} Students
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-bold text-lg">
                      {program.tuitionFee}
                    </span>
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,325</div>
              <div className="text-emerald-100">Total Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-emerald-100">Programs Offered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Graduate Success</div>
            </div>
          </div>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Apply Online", desc: "Submit your application through our online portal" },
              { step: 2, title: "Document Review", desc: "Our admissions team reviews your credentials" },
              { step: 3, title: "Interview", desc: "Personal interview with faculty members" },
              { step: 4, title: "Enrollment", desc: "Complete enrollment and begin your journey" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-r from-emerald-600 to-teal-600">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  ×
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">{selectedProgram.title}</h2>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-5 h-5" /> {selectedProgram.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-5 h-5" /> {selectedProgram.students} Students
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h3>
                    <p className="text-gray-600 mb-6">{selectedProgram.longDescription}</p>

                    <h4 className="text-xl font-bold text-gray-800 mb-3">Learning Outcomes</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProgram.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Curriculum</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProgram.syllabus.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BookOpen className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold text-gray-800 mb-2">Program Details</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong>Prerequisites:</strong> {selectedProgram.prerequisites}</p>
                        <p><strong>Certification:</strong> {selectedProgram.certification}</p>
                        <p><strong>Tuition:</strong> {selectedProgram.tuitionFee}</p>
                        <p><strong>Scholarships:</strong> {selectedProgram.scholarships}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Faculty</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProgram.faculty.map((instructor, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">{instructor.name}</h5>
                          <p className="text-sm text-gray-600">{instructor.qualification}</p>
                          <p className="text-sm text-gray-500">{instructor.experience} experience</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs;