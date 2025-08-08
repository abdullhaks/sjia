
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen,BookCopy , Users, GraduationCap, Phone, Globe, ChevronDown, Star, Play, Volume2 ,Award} from 'lucide-react';
import { useTranslation } from 'react-i18next';
// Mock logo - replace with your actual logo
const collegeLogo = "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='23' fill='%23059669' stroke='%23ffffff' stroke-width='4'/%3E%3Ctext x='25' y='32' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EC%3C/text%3E%3C/svg%3E";

// Mock college background image
const collegeImage = "data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23134e4a'/%3E%3Cstop offset='100%25' stop-color='%23065f46'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E";

const Header = ({ activeSection = 'hero', setActiveSection = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowLangDropdown(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Globe className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Users className="w-4 h-4" /> },
    { id: 'programs', label: 'Programs', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'campus', label: 'Campus', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Star className="w-4 h-4" /> },
    { id: 'admissions', label: 'Admissions', icon: <BookCopy  className="w-4 h-4" /> },
    { id: 'academicExcellence', label: 'Academic Excels', icon: <Award className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },

    
  ];

   const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
    { code: 'ur', label: 'اردو', flag: '🇵🇰' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  setActiveSection(sectionId);
  setIsMenuOpen(false);
  setShowLangDropdown(false);

  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Adjust based on actual header height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth',
    });
  }
};

const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  return (
    <>
      {/* Islamic Pattern Background
      <div className="fixed top-0 w-full h-20 z-40 opacity-100 pointer-events-none">
        <div 
          className="w-full h-full bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.08'%3E%3Cpath d='M30 0L37.5 22.5H60L42.5 37.5L50 60L30 45L10 60L17.5 37.5L0 22.5H22.5L30 0Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100' 
            : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-fullxl mx-auto px-6 lg:px-6">
          <div className="flex items-center justify-between py-3">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-4 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => scrollToSection(e, 'hero')}
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <img 
                  src={collegeLogo} 
                  alt="College Logo" 
                  className="relative w-12 h-12 rounded-lg shadow-lg"
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Star className="w-2 h-2 text-white" />
                </motion.div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.h1 
                  className="text-sm font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Sheikh jeelani Islamic Academy
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-600 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                • Knowledge • Faith • Excellence
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl"
                      layoutId="activeNavBg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Language Dropdown */}
              <div className="relative hidden lg:block">
                <motion.button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">🌍</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-emerald-50 text-gray-700 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-emerald-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-100 overflow-hidden bg-white/50 backdrop-blur-md"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg mx-2 ${
                        activeSection === item.id
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ x: 4 }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Overlay for dropdowns */}
      {(showLangDropdown || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowLangDropdown(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header