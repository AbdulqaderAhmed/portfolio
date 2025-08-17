import React from "react";
import { TypeAnimation } from "react-type-animation";
import Abdu from "../../assets/image/abdu3.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import CV from "../../assets/file/resume.pdf";
import { useTheme } from "../../contexts/ThemeContext";

export default function About() {
  const { colors } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-16 mt-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Hi, I'm <span className="block">Abdulqader</span>
              </h1>

              <div
                className={`text-2xl lg:text-3xl ${colors.textSecondary} font-light`}
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "React Specialist",
                    2000,
                    "Laravel Expert",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-blue-400"
                />
              </div>
            </div>

            <p
              className={`text-lg lg:text-xl ${colors.textSecondary} leading-relaxed max-w-2xl`}
            >
              Creating exceptional digital experiences through clean code and
              innovative solutions. I build powerful web applications that make
              a difference.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {["React", "Laravel", "JavaScript", "PHP", "MySQL", "Docker"].map(
                (skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 ${colors.card} border ${colors.border} rounded-full text-sm font-medium hover:border-blue-500 transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={CV}
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/AbdulqaderAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.textMuted} hover:${colors.textPrimary} text-2xl transition-all duration-300 transform hover:scale-110`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulqader-ahmed-a1a18a239/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.textMuted} hover:text-blue-400 text-2xl transition-all duration-300 transform hover:scale-110`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/Abdulqa67633591"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.textMuted} hover:text-blue-400 text-2xl transition-all duration-300 transform hover:scale-110`}
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Bottom half-circle light effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 lg:w-96 lg:h-48 bg-gradient-to-t from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-xl opacity-60"></div>

              <img
                src={Abdu}
                alt="Abdulqader Ahmed"
                className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 ${colors.border} hover:border-blue-500 transition-all duration-500 transform hover:scale-105 z-10`}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className={`w-6 h-10 border-2 ${colors.border} rounded-full flex justify-center`}
          >
            <div
              className={`w-1 h-3 ${colors.textMuted} rounded-full mt-2 animate-pulse`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
