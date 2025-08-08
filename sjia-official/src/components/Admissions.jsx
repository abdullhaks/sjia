import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Mail, Phone, MapPin, BookOpen, Send, ArrowRight, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { message } from 'antd';

// Helper function to check if current month is April, May, June, or July
const isAdmissionOpen = () => {
  const currentMonth = new Date().getMonth(); // 0 = January, 3 = April, ..., 6 = July
  return currentMonth >= 3 && currentMonth <= 7; // April (3) to July (6)
};

const Admissions = () => {
  const [formData, setFormData] = useState({
    nameOfStudent: '',
    age: '',
    place: '',
    contactNumber: '',
    email: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [focusedField, setFocusedField] = useState(null);
  const [formRef, formInView] = useInView({ once: true, threshold: 0.2 });

  const courseOptions = [
    { value: 'hifzul-quran', label: 'Hifzul Quran' },
    { value: 'mutawwal', label: 'Mutawwal' },
    { value: 'islamic-education', label: 'Islamic Education' }
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

    if (!formData.nameOfStudent.trim()) {
      message.error('Please enter the student’s name');
      setSubmitStatus('error');
      return;
    }
    if (!formData.age || isNaN(formData.age) || formData.age < 5 || formData.age > 100) {
      message.error('Please enter a valid age (5–100)');
      setSubmitStatus('error');
      return;
    }
    if (!formData.place.trim()) {
      message.error('Please enter the place');
      setSubmitStatus('error');
      return;
    }
    if (!formData.contactNumber.trim() || !/^\+?\d{10,15}$/.test(formData.contactNumber)) {
      message.error('Please enter a valid contact number (10–15 digits)');
      setSubmitStatus('error');
      return;
    }
    if (!validateEmail(formData.email)) {
      message.error('Please enter a valid email');
      setSubmitStatus('error');
      return;
    }
    if (!formData.course) {
      message.error('Please select a course');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      message.info('Sorry! Admission submission is under maintenance now. Please try later. Shukran');
      setFormData({
        nameOfStudent: '',
        age: '',
        place: '',
        contactNumber: '',
        email: '',
        course: ''
      });
      // setSubmitStatus('success'); // Uncomment if submission is enabled
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: 'nameOfStudent',
      type: 'text',
      label: 'Student’s Name',
      placeholder: 'Enter student’s full name',
      required: true,
      icon: <Users className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'age',
      type: 'number',
      label: 'Age',
      placeholder: 'Enter student’s age',
      required: true,
      icon: <Calendar className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'place',
      type: 'text',
      label: 'Place',
      placeholder: 'Enter city/town',
      required: true,
      icon: <MapPin className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'contactNumber',
      type: 'tel',
      label: 'Contact Number',
      placeholder: 'Enter contact number',
      required: true,
      icon: <Phone className="w-5 h-5 text-gray-400" />
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter email address',
      required: true,
      icon: <Mail className="w-5 h-5 text-gray-400" />
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
    <section id="admissions" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
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
            Admission Application
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our esteemed institution and embark on a journey of academic and spiritual growth. Submit your application during our open admission period.
          </p>
        </motion.div>

        {isAdmissionOpen() ? (
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Apply Now</h3>
            <p className="text-gray-600 mb-6">Complete the form below to start your admission process.</p>

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
                      min={field.name === 'age' ? 5 : undefined}
                      max={field.name === 'age' ? 100 : undefined}
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                  <motion.select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('course')}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.01 }}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300 bg-white/80 ${
                      focusedField === 'course'
                        ? 'border-2 border-emerald-400 ring-2 ring-emerald-100'
                        : 'border border-gray-200 hover:border-gray-300'
                    }`}
                    aria-required="true"
                  >
                    <option value="" disabled>Select a course</option>
                    {courseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Submit application"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
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
                      <span>Application submitted successfully! We’ll contact you soon.</span>
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
        ) : (
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center"
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Admissions Closed</h3>
            <p className="text-gray-600 text-lg mb-6">
              The admission process is only open from April to July. Please check back during the admission period to apply.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Contact us for inquiries"
            >
              Contact Us for Inquiries
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Admissions;