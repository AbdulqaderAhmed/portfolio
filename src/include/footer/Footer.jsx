import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <AiFillGithub size={24} />,
      url: "https://github.com/AbdulqaderAhmed",
      label: "GitHub",
    },
    {
      icon: <AiFillLinkedin size={24} />,
      url: "https://www.linkedin.com/in/abdulqader-ahmed-a1a18a239/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillTwitterCircle size={24} />,
      url: "https://twitter.com/Abdulqa67633591",
      label: "Twitter",
    },
    {
      icon: <AiOutlineMail size={24} />,
      url: "mailto:abdulqaderahmed32@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`${colors.secondary} border-t ${colors.border}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Abdulqader Ahmed
            </h3>
            <p
              className={`${colors.textSecondary} mb-6 leading-relaxed max-w-md`}
            >
              Full-stack developer passionate about creating innovative web
              solutions. Specializing in React, Laravel, and modern web
              technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 ${colors.tertiary} hover:bg-slate-600 ${colors.textSecondary} hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold ${colors.textPrimary} mb-4`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`${colors.textSecondary} hover:text-blue-400 transition-colors duration-300 text-sm`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold ${colors.textPrimary} mb-4`}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className={`${colors.textSecondary} text-sm`}>
                <span className="text-blue-400">Email:</span>
                <br />
                abdulqaderahmed32@gmail.com
              </p>
              <p className={`${colors.textSecondary} text-sm`}>
                <span className="text-blue-400">Phone:</span>
                <br />
                +251 932 494 626
              </p>
              <p className={`${colors.textSecondary} text-sm`}>
                <span className="text-blue-400">Location:</span>
                <br />
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${colors.border} mt-8 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className={`flex items-center space-x-2 ${colors.textSecondary} text-sm mb-4 md:mb-0`}
            >
              <span>© {currentYear} Abdulqader Ahmed. Made with</span>
              <AiOutlineHeart className="text-red-500 animate-pulse" />
              <span>in Ethiopia</span>
            </div>

            <button
              onClick={scrollToTop}
              className={`flex items-center space-x-2 px-4 py-2 ${colors.tertiary} hover:bg-slate-600 ${colors.textSecondary} hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105`}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
