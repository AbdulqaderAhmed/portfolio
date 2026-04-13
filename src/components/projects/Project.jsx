import React, { useState, useEffect, useRef } from "react";
import Blog from "../../assets/image/blog.png";
import Chat from "../../assets/image/chat.png";
import Ecom from "../../assets/image/e-commerce.png";
import Employee from "../../assets/image/Employee_Management.png";
import Movie3 from "../../assets/image/movie3.png";
import Nile from "../../assets/image/Nile.png";
import Resturant from "../../assets/image/resturant.png";
import Tenawo from "../../assets/image/Tenawo.png";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiLaravel, SiReact, SiPhp, SiMysql, SiTailwindcss, SiMui } from "react-icons/si";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const { colors } = useTheme();
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  const projects = [
    { id: 1, title: "Life Hack Blog", description: "A comprehensive blogging platform built with Laravel framework, featuring user authentication, content management, and responsive design for optimal reading experience.", image: Blog, category: "fullstack", technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"], github: "https://github.com/AbdulqaderAhmed/life-hack-blog", live: null, features: ["User Authentication", "Content Management", "Responsive Design", "SEO Optimized"] },
    { id: 2, title: "Let's Chat", description: "Real-time chat application with social media authentication, enabling seamless communication between users with modern UI/UX design.", image: Chat, category: "fullstack", technologies: ["Laravel", "PHP", "WebSocket", "MySQL"], github: "https://github.com/AbdulqaderAhmed/laravel-chat-2", live: null, features: ["Real-time Messaging", "Social Auth", "User Presence", "File Sharing"] },
    { id: 3, title: "E-Commerce Platform", description: "Full-featured e-commerce solution with admin dashboard, inventory management, payment integration, and customer portal.", image: Ecom, category: "fullstack", technologies: ["Laravel", "PHP", "MySQL", "Stripe API"], github: "https://github.com/AbdulqaderAhmed/laravel-ecommerce", live: null, features: ["Admin Dashboard", "Payment Gateway", "Inventory Management", "Order Tracking"] },
    { id: 4, title: "Employee Management System", description: "Comprehensive HR management system with employee tracking, payroll management, and performance analytics built with Laravel API and React frontend.", image: Employee, category: "fullstack", technologies: ["Laravel", "React", "MySQL", "REST API"], github: "https://github.com/AbdulqaderAhmed/employee-laravel", live: null, features: ["Employee Tracking", "Payroll System", "Performance Analytics", "Role Management"] },
    { id: 5, title: "Ocean Of Movies", description: "Entertainment hub for discovering latest movies, TV series, and shows. Built with React and Redux, integrated with TMDB API for real-time data.", image: Movie3, category: "frontend", technologies: ["React", "Redux", "TMDB API", "CSS3"], github: "https://github.com/AbdulqaderAhmed/Ocean-of-movies-react", live: null, features: ["Movie Discovery", "Search & Filter", "Watchlist", "Responsive Design"] },
    { id: 6, title: "Nile Insurance System", description: "Car insurance price calculation system with dynamic pricing algorithms, policy management, and customer portal.", image: Nile, category: "fullstack", technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"], github: "https://github.com/AbdulqaderAhmed/nile-insurance-laravel", live: null, features: ["Price Calculator", "Policy Management", "Customer Portal", "Claims Processing"] },
    { id: 7, title: "Side-hustle Restaurant", description: "Modern restaurant website with online ordering system, menu management, and reservation booking built with React and Material-UI.", image: Resturant, category: "frontend", technologies: ["React", "Material-UI", "JavaScript", "CSS3"], github: "https://github.com/AbdulqaderAhmed/SideHustle-Restaurant", live: null, features: ["Online Ordering", "Menu Management", "Reservation System", "Mobile Responsive"] },
    { id: 8, title: "Tenawo - Location Services", description: "Location-based service finder helping users discover nearby pharmacies and medical services within 500 meters radius using geolocation APIs.", image: Tenawo, category: "frontend", technologies: ["React", "Geolocation API", "Maps API", "Tailwind CSS"], github: "https://github.com/AbdulqaderAhmed/Tenawo", live: null, features: ["Location Services", "Radius Search", "Maps Integration", "Service Directory"] },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "fullstack", name: "Full Stack", count: projects.filter((p) => p.category === "fullstack").length },
    { id: "frontend", name: "Frontend", count: projects.filter((p) => p.category === "frontend").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getTechIcon = (tech) => {
    const icons = {
      Laravel: <SiLaravel className="text-red-500" />,
      React: <SiReact className="text-blue-400" />,
      PHP: <SiPhp className="text-purple-500" />,
      MySQL: <SiMysql className="text-blue-600" />,
      "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
      "Material-UI": <SiMui className="text-blue-500" />,
    };
    return icons[tech] || <FaCode className="text-gray-400" />;
  };

  // Header animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 85%" },
      });
      gsap.from(".projects-filters button", {
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ".projects-filters", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Re-animate list on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }, listRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="projects-header text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            A showcase of my recent work, demonstrating expertise in full-stack
            development, modern frameworks, and user-centered design principles.
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filters flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : `${colors.card} ${colors.textSecondary} ${colors.cardHover} hover:text-white`
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div ref={listRef} className="flex flex-col space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-item relative group w-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ zIndex: filteredProjects.length - index }}
            >
              {/* Project Card */}
              <div className={`relative w-full ${colors.card} border ${colors.border} rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:border-blue-500 transition-all duration-500 hover:shadow-2xl cursor-pointer`}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex-1">
                    <h3 className={`text-2xl lg:text-3xl font-bold ${colors.textPrimary} group-hover:text-blue-400 transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p className={`${colors.textSecondary} mt-2 text-sm lg:text-base opacity-80`}>
                      {project.category === "fullstack" ? "Full Stack Development" : "Frontend Development"}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={`inline-flex items-center gap-1 px-3 py-1 ${colors.tertiary} text-xs font-medium rounded-full ${colors.textSecondary}`}>
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 ml-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 ${colors.card} border ${colors.border} hover:border-blue-500 rounded-full ${colors.textSecondary} hover:text-blue-400 transition-all duration-300 transform hover:scale-110`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Image Tooltip */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4 w-64 lg:w-80 transition-all duration-500 ${
                  hoveredProject === project.id
                    ? "opacity-100 scale-100 pointer-events-auto -translate-y-full"
                    : "opacity-0 scale-95 pointer-events-none"
                } z-50`}
              >
                <div className={`${colors.card} border ${colors.border} rounded-xl overflow-hidden shadow-2xl`}>
                  <img src={project.image} alt={project.title} className="w-full h-40 lg:h-48 object-cover" />
                </div>
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 ${colors.card} border-r ${colors.border} border-b rotate-45`}></div>
              </div>

              {/* Description below card */}
              <div className="mt-4 px-4">
                <p className={`${colors.textSecondary} text-base lg:text-lg leading-relaxed mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`inline-flex items-center gap-1 px-3 py-1 ${colors.tertiary} text-sm font-medium rounded-full ${colors.textSecondary}`}>
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <h5 className={`text-sm font-semibold ${colors.textMuted} mb-3`}>Key Features:</h5>
                  <ul className={`text-sm ${colors.textMuted} grid grid-cols-1 md:grid-cols-2 gap-2`}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className={`${colors.textSecondary} mb-6`}>Interested in seeing more of my work?</p>
          <a
            href="https://github.com/AbdulqaderAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
