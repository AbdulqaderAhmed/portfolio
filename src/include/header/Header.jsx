import React, { useState, useEffect, useRef } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import CV from "../../assets/file/resume.pdf";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme, colors } = useTheme();
  const navRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".nav-logo", { x: -30, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.3 });
      gsap.from(".nav-item", { y: -20, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power2.out", delay: 0.4 });
      gsap.from(".nav-actions", { x: 30, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.5 });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
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
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${colors.card}/95 backdrop-blur-md shadow-lg ${colors.border} border-b`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="nav-logo flex-shrink-0">
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection("#home")}
            >
              Abdulqader
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-item ${colors.textSecondary} hover:${colors.textPrimary} px-3 py-2 text-sm font-medium transition-colors duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="nav-actions hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${colors.card} ${colors.cardHover} ${colors.textSecondary} hover:${colors.textPrimary} transition-all duration-300 transform hover:scale-110`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Resume Button */}
            <a
              href={CV}
              download="Abdulqader_Ahmed_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${colors.textSecondary} hover:${colors.textPrimary} ${colors.cardHover} transition-all duration-300`}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${colors.card}/95 backdrop-blur-md ${colors.border} border-t`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 ${colors.textSecondary} hover:${colors.textPrimary} ${colors.cardHover} rounded-md text-base font-medium transition-all duration-300`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center space-x-3 w-full px-3 py-2 ${colors.textSecondary} hover:${colors.textPrimary} ${colors.cardHover} rounded-md text-base font-medium transition-all duration-300`}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
              <span>Switch to {isDark ? "Light" : "Dark"} Mode</span>
            </button>

            {/* Mobile Resume Button */}
            <div className="pt-4 pb-2">
              <a
                href={CV}
                download="Abdulqader_Ahmed_Resume.pdf"
                className="block w-full text-center px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
