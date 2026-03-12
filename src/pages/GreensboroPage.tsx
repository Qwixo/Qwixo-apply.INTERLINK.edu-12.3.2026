import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Real_Testimonials from '../components/Real_Testimonials';
import { Users, Globe, Calendar, MapPin, User, MessageSquare, Presentation, HelpCircle, BookOpen, Lightbulb, Check, ChevronDown, X, Film } from 'lucide-react';

const APPLICATION_URL = "https://interlink.edu/student-application/";

function GreensboroPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    commitment: ''
  });

  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroCTAClick = () => {
    scrollToApply();
  };

  const handleBannerClick = () => {
    scrollToApply();
  };

  const handleCloseBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBanner(false);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('u', '607289d66021f9dbd8e30d04c');
    data.append('id', 'f16b13f8cc');
    data.append('FNAME', formData.firstName);
    data.append('LNAME', formData.lastName);
    data.append('EMAIL', formData.email);
    data.append('MMERGE13', 'greensboro-application');

    try {
      await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-1043003990/gNYTCOqGlLQaENb0q_ED',
        });
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen">
      {showBanner && (
        <div
          onClick={handleBannerClick}
          className="sticky top-0 z-50 w-full bg-red-600 text-white cursor-pointer py-2 px-4 group"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            <p className="text-xs md:text-sm leading-tight text-center group-hover:underline">
              Save up to $340 on Spring I (Apr 1–May 8) if you apply by March 18.
            </p>
            <button
              onClick={handleCloseBanner}
              className="absolute right-0 p-2 hover:bg-red-700 rounded transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-white pt-3 md:pt-4 pb-1 md:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-3"
            >
              ON CAMPUS CLASSES AT UNC GREENSBORO • ONLINE CLASSES
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Speak English with confidence
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto"
            >
              Practice smarter and improve faster with live classes
            </motion.p>

            {/* Google Drive Video Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-6"
            >
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1rA8y00AqAgvszZZ6zD6kPBwNodRVi7dK/preview"
                  title="INTERLINK Video"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <button
                onClick={handleHeroCTAClick}
                className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                I'm done studying – I want to use English
              </button>

              {/* Selective tagline */}
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Daily English classes with a live instructor. No textbooks or exams. Build real-world skills you'll actually use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

{/* Section 2: Credibility Strip */}
<section className="bg-white py-0 md:py-0">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center items-stretch">
      <div className="flex flex-col items-center justify-center gap-2 min-h-[80px] md:min-h-[90px]">
        <Calendar className="w-8 h-8 text-[#064088]" />
        <p className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          45+ Years of Expertise
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 min-h-[80px] md:min-h-[90px]">
        <Users className="w-8 h-8 text-[#064088]" />
        <p className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          10k+ Global Graduates
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 min-h-[80px] md:min-h-[90px]">
        <Globe className="w-8 h-8 text-[#064088]" />
        <p className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          80+ Countries Serves
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 min-h-[80px] md:min-h-[90px]">
        <MapPin className="w-8 h-8 text-[#064088]" />
        <p className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          On campus and online
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Section 3: Pain Block */}
      <section className="bg-gray-50 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Using English in real life can be hard
                </h2>

                <div className="space-y-3 mb-5">
                  <p className="text-gray-700">
                    You've studied and practiced, but in the moment, the words don't come.
                  </p>
                  <p className="text-gray-700">
                    People speak quickly and you miss things.
                  </p>
                  <p className="text-gray-700">
                    You stay quiet, not because you don't have ideas, but because you're not sure how to say them in a way that lands.
                  </p>
                </div>

                <div className="text-sm text-gray-700">

                  <div className="space-y-2">

                  </div>
                  <p className="font-semibold mt-4">
                    You've probably wondered: What am I doing wrong?
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                  <h3 className="text-base font-bold text-gray-900 mb-2">The truth</h3>
                  <p className="text-sm text-gray-700">
                    It isn't because you're not smart.
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Your English is good enough to get by, but not yet where you need it to be.
                  </p>
                </div>

                <button
                  onClick={scrollToApply}
                  className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-lg"
                >
                  I'm ready for real English
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: The Real Secret - Daily Practice */}
      <section className="bg-gray-100 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Column: Content */}
              <div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-[#dc5d33] font-bold mb-3">
                  THE REAL SECRET
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  More practice. Every day.
                </h2>

                <div className="space-y-3 mb-5">
                  <p className="text-base text-gray-700">
                    The truth: Most English programs and free lessons teach grammar rules, not how to communicate confidently in the situations that actually matter to you: at your job, in your classes, in your daily life in the U.S.
                  </p>
                  <p className="text-base text-gray-700 font-semibold">
                    What you actually need are skills you can start using tomorrow.
                  </p>
                </div>

                <button
                  onClick={scrollToApply}
                  className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  I'm done studying – I want to use English
                </button>
              </div>

              {/* Right Column: Features & Outcomes */}
              <div className="flex flex-col gap-4">
                {/* Features */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Express your ideas clearly</p>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Ask and answer questions without freezing up</p>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Follow a fast conversation and stay in it.</p>
                  </div>

                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#064088] flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Know what went wrong and how to do better next time and the confidence to keep trying.</p>
                  </div>
                </div>

                {/* Outcomes */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.6: THE INTERLINK METHOD */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="text-xs md:text-sm uppercase tracking-widest text-[#dc5d33] font-bold mb-3">
              THE INTERLINK METHOD
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You learn by doing, not by memorizing.
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Forget textbooks, worksheets, and grammar drills. In our classes, you practice real English – the kind you need at work, in school, and in everyday life. Then, you reflect, get feedback, and try again. That's how real progress happens.
            </p>
          </div>

          {/* Visual Cycle */}
          <div className="flex items-center justify-center my-0 md:my-0">
            <img
              src="https://i.imgur.com/PNYhMLa.png"
              alt="The DO, REFLECT, TRY AGAIN cycle that builds real confidence"
              className="w-full max-w-3xl h-auto"
            />
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-[#064088]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Skills that grow with you</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Critical thinking, problem-solving, collaboration: the skills U.S. employers and universities expect.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#064088]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Feedback made for you</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Every student is different. Your instructor gives you personalized guidance to help you improve faster.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#064088]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Real practice every class</h3>
              </div>
              <p className="text-gray-700 text-sm">
                You speak, listen, read, and write in situations that feel like real life, not a test.
              </p>
            </div>
          </div>

          {/* Highlighted Supporting Statement */}
          <div className="bg-blue-50 border-l-4 border-amber-400 rounded-lg p-6 md:p-8">
            <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
              Students come to us to improve their reading, writing, speaking, and listening. They leave with much more. The confidence, strategies, and real-world skills to keep getting better long after the program ends.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What You Will Do In Class - Simplified Sub-section */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What you will do in class
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Learn more about how
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
            {/* Item 1 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Talk in small groups
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Get personalized feedback
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Give presentations
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Write essays and outlines
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Discuss videos and readings
              </p>
            </div>

            {/* Item 6 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm md:text-base font-semibold text-gray-900">
                Interview other students
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm md:text-base text-gray-600 font-medium">
              No textbooks, no exams, no memorizing rules
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              I want to use English in real life
            </button>
          </div>
        </div>
      </section>

      <Real_Testimonials guideStyle />

      {/* Section 5: Intensive Practice */}
      <section className="bg-gray-50 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="text-center mb-5">
              <p className="text-xs font-semibold text-[#064088] tracking-wide uppercase mb-2">
                INTENSIVE PROGRAM
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                5 days/week. Expert teachers. Personalized feedback.
              </h2>
              <div className="max-w-2xl mx-auto space-y-1">
                <p className="text-base text-gray-700">
                  One class per week won't help you progress quickly. At INTERLINK, our daily classes provide regular practice to help solidify your skills
                </p>
                <p className="text-xs text-gray-600 mt-2 font-medium">
                  Times are Eastern Time
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-4">
              {/* Part-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#064088] transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Part-time
                </h3>
                <p className="text-xs text-gray-600 mb-2 font-medium">
                  Choose ONE class:
                </p>
                <div className="space-y-1 text-xs text-gray-700">
                  <p>• 9:30–11:30 AM (Reading & Writing)</p>
                  <p>• 12:30–2:30 PM (Communication Skills)</p>
                </div>
              </div>

              {/* Full-time Card */}
              <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#064088] transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Full-time
                </h3>
                <p className="text-xs text-gray-600 mb-2 font-medium">
                  Both classes every day:
                </p>
                <div className="space-y-1 text-xs text-gray-700">
                  <p>• 9:30–11:30 AM (Reading & Writing)</p>
                  <p>• 12:30–2:30 PM (Communication Skills)</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={scrollToApply}
                className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                I'm ready to improve my English
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.5: Dates and Deadlines */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Dates and deadlines
            </h2>
            <p className="text-base text-gray-700">
              Choose the term that works for you.
            </p>
          </div>

          <div className="hidden md:block overflow-x-auto mb-5">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Term</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Dates</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Apply by</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* Spring I - Highlighted */}
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">Spring I 2026</span>
                      <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        20% OFF
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">Apr 1 – May 8</td>
                  <td className="px-4 py-3 text-gray-700">March 18</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">
                      Full-time: $1,360
                      <span className="text-xs text-gray-500 font-normal"> (was $1,700)</span>
                    </div>
                    <div className="text-xs text-gray-600 font-normal">
                      Part-time: $680
                      <span className="text-xs text-gray-500"> (was $850)</span>
                    </div>
                    <div className="text-xs text-red-600 font-semibold">Save up to $340</div>
                  </td>
                </tr>

                {/* Spring II */}
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Spring II 2026</td>
                  <td className="px-4 py-3 text-gray-700">May 12 – Jun 17</td>
                  <td className="px-4 py-3 text-gray-700">April 28</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Full-time: $1,700</div>
                    <div className="text-xs text-gray-600">Part-time: $850</div>
                  </td>
                </tr>

                {/* Summer */}
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Summer 2026</td>
                  <td className="px-4 py-3 text-gray-700">Jun 19 – Jul 28</td>
                  <td className="px-4 py-3 text-gray-700">June 5</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Full-time: $1,700</div>
                    <div className="text-xs text-gray-600">Part-time: $850</div>
                  </td>
                </tr>

                {/* Fall I */}
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Fall I 2026</td>
                  <td className="px-4 py-3 text-gray-700">Aug 17 – Sep 23</td>
                  <td className="px-4 py-3 text-gray-700">August 3</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Full-time: $1,700</div>
                    <div className="text-xs text-gray-600">Part-time: $850</div>
                  </td>
                </tr>

                {/* Fall II */}
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Fall II 2026</td>
                  <td className="px-4 py-3 text-gray-700">Sep 25 – Nov 3</td>
                  <td className="px-4 py-3 text-gray-700">See dates & fees</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Full-time: $1,700</div>
                    <div className="text-xs text-gray-600">Part-time: $850</div>
                  </td>
                </tr>

                {/* Fall III */}
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Fall III 2026</td>
                  <td className="px-4 py-3 text-gray-700">Nov 5 – Dec 16</td>
                  <td className="px-4 py-3 text-gray-700">See dates & fees</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Full-time: $1,700</div>
                    <div className="text-xs text-gray-600">Part-time: $850</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 mb-5">
            {/* Spring I */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm">Spring I 2026</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">20% OFF</span>
              </div>
              <p className="text-xs text-gray-700">Dates: Apr 1 – May 8</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: March 18</p>
              <div className="font-bold text-gray-900 text-sm">
                Full-time: $1,360
                <span className="text-xs text-gray-500 font-normal"> (was $1,700)</span>
              </div>
              <div className="text-xs text-gray-600">
                Part-time: $680
                <span className="text-xs text-gray-500"> (was $850)</span>
              </div>
              <div className="text-xs text-red-600 font-semibold">Save up to $340</div>
            </div>

            {/* Spring II */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <div className="font-semibold text-gray-900 text-sm mb-1">Spring II 2026</div>
              <p className="text-xs text-gray-700">Dates: May 12 – Jun 17</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: April 28</p>
              <div className="font-bold text-gray-900 text-sm">Full-time: $1,700</div>
              <div className="text-xs text-gray-600">Part-time: $850</div>
            </div>

            {/* Summer */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <div className="font-semibold text-gray-900 text-sm mb-1">Summer 2026</div>
              <p className="text-xs text-gray-700">Dates: Jun 19 – Jul 28</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: June 5</p>
              <div className="font-bold text-gray-900 text-sm">Full-time: $1,700</div>
              <div className="text-xs text-gray-600">Part-time: $850</div>
            </div>

            {/* Fall I */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <div className="font-semibold text-gray-900 text-sm mb-1">Fall I 2026</div>
              <p className="text-xs text-gray-700">Dates: Aug 17 – Sep 23</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: August 3</p>
              <div className="font-bold text-gray-900 text-sm">Full-time: $1,700</div>
              <div className="text-xs text-gray-600">Part-time: $850</div>
            </div>

            {/* Fall II */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <div className="font-semibold text-gray-900 text-sm mb-1">Fall II 2026</div>
              <p className="text-xs text-gray-700">Dates: Sep 25 – Nov 3</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: See dates & fees</p>
              <div className="font-bold text-gray-900 text-sm">Full-time: $1,700</div>
              <div className="text-xs text-gray-600">Part-time: $850</div>
            </div>

            {/* Fall III */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <div className="font-semibold text-gray-900 text-sm mb-1">Fall III 2026</div>
              <p className="text-xs text-gray-700">Dates: Nov 5 – Dec 16</p>
              <p className="text-xs text-gray-700 mb-1">Apply by: See dates & fees</p>
              <div className="font-bold text-gray-900 text-sm">Full-time: $1,700</div>
              <div className="text-xs text-gray-600">Part-time: $850</div>
            </div>
          </div>

{/* Pricing Note Box */}
<div className="bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-5 mb-5">
  <h3 className="font-bold text-gray-900 mb-2 text-sm">Tuition and fees</h3>
  <div className="space-y-1 text-gray-700 text-sm">
    <p><span className="font-semibold">Full-time:</span> $1,700 / term (4 hours/day, Monday–Friday)</p>
    <p><span className="font-semibold">Part-time:</span> $850 / term (2 hours/day, Monday–Friday)</p>
    <p><span className="font-semibold">Application Fee:</span> $100 for in-person / $50 for online</p>
    <p className="text-xs pt-2 border-t border-blue-200 mt-2">
      <span className="font-semibold">Spring I discount:</span> Save $340 on full-time ($1,360) or $170 on part-time ($680). Apply by March 18.
      <br />
      <span className="font-semibold">Continuing student savings:</span> Students who continue into the next term may be eligible for additional savings.
    </p>
  </div>
</div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={scrollToApply}
              className="flex-1 bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply & get the discount
            </button>
            <a
              href="https://interlink.edu/dates-fees/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-white text-[#064088] border-2 border-[#064088] font-bold text-base px-6 py-3 rounded-lg hover:bg-[#064088] hover:text-white transition-all duration-300 text-center"
            >
              See all dates & fees
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: How to apply */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              How to apply
            </h2>
            <p className="text-base text-gray-700">
              We'll help you through our simple process
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#064088] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Submit an application
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Complete the application and upload your supporting documents. We'll carefully review your application and contact you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#064088] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Pay the application fee
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Pay your application fee after you apply. Contact us if you need assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#064088] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Take a placement test
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We'll send you the link to your test once you've paid your application fee
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-5">
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              Then, you’re ready to start your classes!
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start my application
            </button>
          </div>
        </div>
      </section>

      {/* SECTION A: Is this for you? */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Is this for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Card 1: This IS for you if... */}
            <div className="bg-white rounded-xl p-5 shadow-md border-2 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                This IS for you if…
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">You know fluent English opens doors to better jobs and opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">You want critical thinking, problem-solving, and collaboration skills that employers are actually looking for</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">You want to be university-ready, not just meet the minimum requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">You're ready to put in the work to speak with real confidence</span>
                </li>
              </ul>
            </div>

            {/* Card 2: This is NOT for you if... */}
            <div className="bg-white rounded-xl p-5 shadow-md border-2 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                This is NOT for you if…
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg text-red-600 flex-shrink-0 leading-none">×</span>
                  <span className="text-sm text-gray-700">You want something easy or passive.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg text-red-600 flex-shrink-0 leading-none">×</span>
                  <span className="text-sm text-gray-700">You do not want to participate in class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg text-red-600 flex-shrink-0 leading-none">×</span>
                  <span className="text-sm text-gray-700">You want free classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg text-red-600 flex-shrink-0 leading-none">×</span>
                  <span className="text-sm text-gray-700">You're not ready to commit to daily classes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToApply}
              className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* SECTION B: Two Paths */}
      <section className="bg-gray-100 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Choose your path
            </h2>
            <p className="text-base text-gray-700">
              Are you ready to make real progress?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left card: Keep struggling */}
            <div className="bg-gray-200 rounded-xl p-5 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Keep struggling with free programs
              </h3>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-sm text-gray-700">No real interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-sm text-gray-700">No critical thinking or learning skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-sm text-gray-700">No results after long hours of studying</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-sm text-gray-700">No feedback to help you improve</span>
                </li>
              </ul>
              <span
                className="block w-full bg-gray-500 text-white font-bold text-base px-6 py-3 rounded-lg text-center cursor-default"
              >
                Keep watching free videos
              </span>
            </div>

            {/* Right card: Commit to real practice */}
            <div className="bg-[#064088] rounded-xl p-5 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">
                Start building relevant skills with INTERLINK
              </h3>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-sm text-white">Daily, real-world practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-sm text-white">Critical thinking skills for academic and professional success</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-sm text-white">Collaboration with real classmates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-sm text-white">Personalized feedback from expert instructors</span>
                </li>
              </ul>
              <button
                onClick={scrollToApply}
                className="w-full bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 mb-2"
              >
                Make progress towards your goals
              </button>
              <p className="text-center text-xs text-white font-medium">
                If you're serious about your English skills, apply today and save!
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* SECTION D: Bottom Apply Section */}
      <section id="apply" className="bg-gray-50 py-10 md:py-14">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {!formSubmitted ? (
              <>
                <div className="text-center mb-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Apply in minutes
                  </h2>
                  <p className="text-base text-gray-700">
                    If you're serious, we're ready to help you get started
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="commitment" className="block text-sm font-semibold text-gray-900 mb-1">
                      Are you ready to study 5 days/week? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="commitment"
                      name="commitment"
                      value={formData.commitment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064088] focus:border-transparent text-sm"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="maybe">I'm not sure yet</option>
                      <option value="not-now">Maybe later</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Continue to official application
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-gray-200 text-center space-y-1">
                  <p className="text-xs text-gray-600">
                    We review every application.
                  </p>
                  <p className="text-xs text-gray-600">
                    Not everyone is accepted.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    Now complete your official application.
                  </p>
                </div>
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Begin official application
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      
{/* SECTION C: FAQ */}
<section className="bg-white py-8 md:py-10">
  <div className="max-w-4xl mx-auto px-4">
    <div className="text-center mb-5">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-700 text-sm">
        Here are the most common questions students ask before applying to INTERLINK. Click to expand each question for details.
      </p>
    </div>

    <div className="space-y-2 mb-5">
      {/* FAQ 1 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(1)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">Where are classes?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 1 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">We have classes on campus at University of North Carolina Greensboro. We also have online classes.</p>
          </div>
        )}
      </div>

      {/* FAQ 2 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(2)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">What is the class schedule?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 2 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Classes are Monday through Friday.<br />
              Reading &amp; Writing: 9:30 - 11:30 AM<br />
              Communication Skills: 12:30 - 2:30 PM<br />
              <span className="text-xs text-gray-600">(Listed in Eastern Time)</span>
            </p>
          </div>
        )}
      </div>

      {/* FAQ 3 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(3)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">What is the difference between full time and part time?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 3 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Full-time: 4 hours each day (2 classes).<br />
              Part-time: 2 hours each day (choose ONE class).<br />
              Reading &amp; Writing: 9:30 - 11:30 AM<br />
              Communication Skills: 12:30 - 2:30 PM
            </p>
          </div>
        )}
      </div>

      {/* FAQ 4 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(4)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">How much does it cost?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 4 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 4 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              INTERLINK tuition and fees are $1,700 per term for full-time study and $850 per term for part-time study.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 5 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(5)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">How does the discount work?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 5 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 5 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Join our next term to get 20% off your tuition! Students already in the North Carolina area are eligible. Just submit your application and let your admissions advisor know you saw the 20% offer.<br />
              <br />
              Save up to $340 (full-time) or $170 (part-time) if you enroll next term!
            </p>
          </div>
        )}
      </div>

      {/* FAQ 6 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(6)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">What if I miss the deadline?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 6 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 6 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Submit your application anyway! You might be eligible for a different discount. We'll help you find the best offer on your studies.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 7 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(7)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">What is the program duration?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 7 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 7 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Each level of INTERLINK's 6-level curriculum has two 5-week modules and lasts 10 weeks. Total time in the program depends on a student's prior knowledge of English and their English goals. A student's stay at INTERLINK may range from two to fifteen months.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 8 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(8)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">Is there homework?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 8 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 8 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              Yes. This is a serious program. You will have classwork and homework.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 9 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
        <button
          onClick={() => toggleFAQ(9)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
        >
          <span className="text-base font-semibold text-gray-900">What happens after I apply?</span>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === 9 ? 'rotate-180' : ''}`} />
        </button>
        {openFAQ === 9 && (
          <div className="px-4 pb-4">
            <p className="text-gray-700">
              We review your application. An advisor helps you with next steps and your placement test.
            </p>
          </div>
        )}
      </div>

    </div>

    <div className="text-center">
      <button
        onClick={scrollToApply}
        className="bg-[#dc5d33] text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Last Chance To Apply
      </button>
    </div>
  </div>
</section>


    </div>
  );
}

export default GreensboroPage;
