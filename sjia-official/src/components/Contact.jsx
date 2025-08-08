import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, Users, Heart, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { message } from 'antd';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [focusedField, setFocusedField] = useState(null);
  const [selectedInquiryType, setSelectedInquiryType] = useState('general');
  const [formRef, formInView] = useInView({ once: true, threshold: 0.2 });
  const [infoRef, infoInView] = useInView({ once: true, threshold: 0.2 });

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'education', label: 'Academic Programs', icon: <Users className="w-4 h-4" /> },
    { id: 'spiritual', label: 'Spiritual Guidance', icon: <Heart className="w-4 h-4" /> },
    { id: 'admissions', label: 'Admissions', icon: <Globe className="w-4 h-4" /> }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      message.error('Please enter your name');
      setSubmitStatus('error');
      return;
    }
    if (!validateEmail(formData.email)) {
      message.error('Please enter a valid email');
      setSubmitStatus('error');
      return;
    }
    if (!formData.message.trim()) {
      message.error('Please enter a message');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (emailjs commented out as per reference)
      message.info('Sorry! Message service is under maintenance now. Please try later. Shukran');
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      setSelectedInquiryType('general');
      // setSubmitStatus('success'); // Uncomment if emailjs is re-enabled
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: 'Email Address',
      value: 'info@jeelani.edu.in',
      link: 'mailto:info@jeelani.edu.in',
      description: 'Reach us via email anytime',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: 'Phone Number',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
      description: 'Call us during business hours',
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: 'Our Location',
      value: 'Jeelani Studies Centre, Valanchery, Malappuram, Kerala, India',
      link: 'https://maps.app.goo.gl/VY6p12Zt2vt8C8W69',
      description: 'Visit our campus',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  const formFields = [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      required: true,
      icon: <Users className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      required: true,
      icon: <Mail className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone Number',
      placeholder: 'Enter your phone number (optional)',
      required: false,
      icon: <Phone className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'subject',
      type: 'text',
      label: 'Subject',
      placeholder: 'What is this regarding?',
      required: false,
      icon: <MessageCircle className="w-5 h-5 text-gray-400" />
    }
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
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
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
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs or campus? Reach out, and our team will respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : -50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <p className="text-gray-600 mb-6">Fill out the form below, and we’ll get back to you soon.</p>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">Type of Inquiry</label>
              <div className="grid grid-cols-2 gap-3">
                {inquiryTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedInquiryType(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedInquiryType === type.id
                        ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-200'
                        : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
                    }`}
                    aria-label={`Select ${type.label} inquiry type`}
                  >
                    {type.icon}
                    {type.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label htmlFor={field.name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      {field.icon}
                    </div>
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.01 }}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300 bg-white/80 ${
                        focusedField === field.name
                          ? 'border-2 border-emerald-400 ring-2 ring-emerald-100'
                          : 'border border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder={field.placeholder}
                      aria-required={field.required}
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <MessageCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    whileFocus={{ scale: 1.01 }}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300 resize-none bg-white/80 ${
                      focusedField === 'message'
                        ? 'border-2 border-emerald-400 ring-2 ring-emerald-100'
                        : 'border border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                    aria-required="true"
                  />
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll respond soon.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Please fill in all required fields correctly.</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : 50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-800">Contact Information</h3>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <motion.a
                      href={item.link}
                      whileHover={{ scale: 1.02 }}
                      className="text-emerald-600 font-medium hover:text-teal-600 transition-colors"
                      aria-label={item.label}
                    >
                      {item.value}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: infoInView ? 1 : 0, y: infoInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 text-center"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">We’re Here for You</h4>
              <p className="text-gray-600">
                Contact us for inquiries about admissions, programs, or spiritual guidance. Our team is dedicated to supporting you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;