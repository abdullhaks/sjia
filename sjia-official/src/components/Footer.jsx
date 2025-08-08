import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, Phone, MapPin, ArrowUp, Instagram, Youtube, BookOpen, Users, Heart, Globe, Send, Clock 
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [footerRef, footerInView] = useInView({ once: true, threshold: 0.2 });

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/jeelanistudiescentre?igsh=MWkzaGxrMGIzc3MxMw==',
      color: 'hover:text-pink-500',
      bgGradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: 'YouTube',
      href: 'https://youtube.com/@vijayamargam8134?si=fz2oIv68ra9id0u5',
      color: 'hover:text-red-600',
      bgGradient: 'from-red-600 to-red-700'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:info@jeelani.edu.in',
      color: 'hover:text-emerald-400',
      bgGradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about', icon: <Users className="w-4 h-4" /> },
    { label: 'Programs', href: '#programs', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Campus', href: '#campus', icon: <Globe className="w-4 h-4" /> },
    { label: 'Excellence', href: '#academic-excellence', icon: <Globe className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const services = [
    { name: 'Islamic Education', desc: 'Comprehensive academic programs', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Spiritual Guidance', desc: 'Mentorship for spiritual growth', icon: <Heart className="w-4 h-4" /> },
    { name: 'Community Outreach', desc: 'Social service initiatives', icon: <Users className="w-4 h-4" /> },
    { name: 'Cultural Events', desc: 'Celebrating Islamic heritage', icon: <Globe className="w-4 h-4" /> }
  ];

  const achievements = [
    { number: '1500+', label: 'Students Enrolled', icon: <Users className="w-5 h-5" /> },
    { number: '50+', label: 'Faculty Members', icon: <BookOpen className="w-5 h-5" /> },
    { number: '30+', label: 'Years of Excellence', icon: <Clock className="w-5 h-5" /> },
    { number: '200+', label: 'Community Events', icon: <Heart className="w-5 h-5" /> }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: footerInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white overflow-hidden"
    >
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

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://ik.imagekit.io/aksWebSolutions/SJIA/sjia-logo.png?updatedAt=1754667321979"
                alt="Sheikh Jeelani Islamic Academy"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sheikh Jeelani Isamic Academy
              </h3>
              <p className="text-emerald-200 text-lg">Excellence in Islamic Education</p>
              <p className="text-emerald-200 text-lg">Mankery, Irimibiliyam, Malppuram, Kerala</p>
            </div>
          </motion.div>
          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Committed to fostering academic excellence and spiritual growth through Islamic education and community engagement.
          </motion.p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {achievement.icon}
              </motion.div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">{achievement.number}</div>
              <div className="text-gray-300 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "#10b981" }}
                  className="text-gray-300 transition-colors duration-300"
                >
                  <a href={link.href} className="flex items-center gap-2 hover:text-emerald-400" aria-label={link.label}>
                    {link.icon}
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  className="text-gray-300 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <div>
                      <div className="font-semibold hover:text-emerald-400">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.desc}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>info@jeelani.edu.in</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+91 000000 000000 </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Mankery, Irimbiliyam, Valanchery, Malappuram, Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Newsletter
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">Stay updated with our latest news and events</p>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`w-10 h-10 bg-gradient-to-br ${social.bgGradient} rounded-full flex items-center justify-center text-white`}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-white/10 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Sheikh Jeelani Islamic Academy. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Website by <a href="https://www.linkedin.com/in/abdullha-kalamban-234746295" className="underline hover:text-emerald-400" target="_blank" rel="noopener noreferrer">AKS-WebSolutions</a>
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;