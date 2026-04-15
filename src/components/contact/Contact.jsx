import React, { useState, useEffect, useRef } from "react";
import {
  AiFillGithub, AiFillLinkedin, AiFillTwitterCircle,
  AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment,
} from "react-icons/ai";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { colors } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-header", start: "top 85%" },
      });
      gsap.from(".contact-form-panel", {
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-panel", start: "top 85%" },
      });
      gsap.from(".contact-info-panel", {
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-info-panel", start: "top 85%" },
      });
      gsap.from(".contact-info-item", {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-info-panel", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    { icon: <AiOutlineMail className="text-green-400" size={24} />, title: "Professional Email", value: "abdulqaderahmed32@gmail.com", link: "mailto:abdulqaderahmed32@gmail.com", description: "Quick response guaranteed within 24 hours" },
    { icon: <AiOutlinePhone className="text-blue-400" size={24} />, title: "Direct Line", value: "+251932494626", link: "tel:+251932494626", description: "Available for consultations Mon-Fri, 9AM-6PM EAT" },
    { icon: <AiOutlineEnvironment className="text-teal-400" size={24} />, title: "Base Location", value: "Addis Ababa, Ethiopia", link: null, description: "Remote-first • Global collaboration ready" },
  ];

  const socialLinks = [
    { icon: <AiFillGithub size={24} />, name: "GitHub", url: "https://github.com/AbdulqaderAhmed", color: "hover:text-gray-400", followers: "50+ production-ready repositories" },
    { icon: <AiFillLinkedin size={24} />, name: "LinkedIn", url: "https://www.linkedin.com/in/abdulqader-ahmed-a1a18a239/", color: "hover:text-blue-400", followers: "Professional network & recommendations" },
    { icon: <AiFillTwitterCircle size={24} />, name: "Twitter", url: "https://twitter.com/Abdulqa67633591", color: "hover:text-blue-400", followers: "Industry insights & tech discussions" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-12 px-4" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="contact-header text-center mb-12">
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Let's Build Something Exceptional
            </span>
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            Ready to transform your ideas into powerful digital solutions? I specialize in creating
            scalable web applications and delivering results that exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={`contact-form-panel ${colors.card} rounded-xl p-8 border ${colors.border}`}>
            <h3 className={`text-2xl font-bold mb-6 ${colors.textPrimary}`}>Start a Conversation</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                <BsCheckCircleFill className="text-green-400" size={20} />
                <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} aria-hidden="true" />
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required
                    className={`w-full pl-10 pr-4 py-3 ${colors.tertiary} border ${colors.border} rounded-lg ${colors.textPrimary} placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`} />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Professional Email</label>
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} aria-hidden="true" />
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Professional Email *" required
                    className={`w-full pl-10 pr-4 py-3 ${colors.tertiary} border ${colors.border} rounded-lg ${colors.textPrimary} placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`} />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Type or Inquiry Subject *" required
                  className={`w-full px-4 py-3 ${colors.tertiary} border ${colors.border} rounded-lg ${colors.textPrimary} placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`} />
              </div>
              <div className="relative">
                <label htmlFor="message" className="sr-only">Message</label>
                <FaComment className="absolute left-3 top-4 text-gray-400" size={16} aria-hidden="true" />
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project, timeline, and specific requirements..." rows={6} required
                  className={`w-full pl-10 pr-4 py-3 ${colors.tertiary} border ${colors.border} rounded-lg ${colors.textPrimary} placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>Sending...</>
                ) : (
                  <><FaPaperPlane size={16} />Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-panel space-y-6">
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6`}>Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className={`contact-info-item ${colors.card} rounded-xl p-6 border ${colors.border} hover:border-blue-500 transition-all duration-300 group`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colors.tertiary} rounded-lg group-hover:bg-slate-600 transition-colors duration-300`}>{info.icon}</div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${colors.textPrimary} mb-1`}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">{info.value}</a>
                      ) : (
                        <p className={`${colors.textSecondary} font-medium`}>{info.value}</p>
                      )}
                      <p className={`${colors.textMuted} text-sm mt-1`}>{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`contact-info-item ${colors.card} rounded-xl p-6 border ${colors.border}`}>
              <h4 className={`text-xl font-bold ${colors.textPrimary} mb-6`}>Follow me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 ${colors.tertiary} hover:bg-slate-600 rounded-lg transition-all duration-300 transform hover:scale-105 group`}>
                    <div className={`text-gray-300 ${social.color} transition-colors duration-300`}>{social.icon}</div>
                    <div className="flex-1">
                      <h5 className={`${colors.textPrimary} font-semibold group-hover:text-blue-400 transition-colors duration-300`}>{social.name}</h5>
                      <p className={`${colors.textMuted} text-sm`}>{social.followers}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-info-item bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className={`text-lg font-semibold ${colors.textPrimary}`}>Currently Available</h4>
              </div>
              <p className={`${colors.textSecondary} text-sm leading-relaxed mb-3`}>
                Accepting new projects and collaborations. Specializing in full-stack development, system architecture, and technical consulting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">Remote Ready</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium">Full-time</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium">Contract</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
