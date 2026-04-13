import React, { useState, useEffect, useRef } from "react";
import Html from "../../assets/image/html.svg";
import Css from "../../assets/image/css.svg";
import JavaScript from "../../assets/image/js.svg";
import Db from "../../assets/image/pgsql.svg";
import Docker from "../../assets/image/docker.svg";
import Git from "../../assets/image/git.svg";
import GitHub from "../../assets/image/github.svg";
import Laravel from "../../assets/image/laravel.svg";
import Material from "../../assets/image/material-ui.svg";
import Mysql from "../../assets/image/mysql.svg";
import Php from "../../assets/image/php.svg";
import ReactJs from "../../assets/image/reactjs.svg";
import Tailwind from "../../assets/image/tailwindcss.svg";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { colors } = useTheme();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const skillsData = {
    frontend: [
      { name: "HTML5", icon: Html, level: 95, color: "from-orange-500 to-red-500", description: "Semantic markup & accessibility" },
      { name: "CSS3", icon: Css, level: 90, color: "from-blue-500 to-cyan-500", description: "Advanced layouts & animations" },
      { name: "JavaScript", icon: JavaScript, level: 88, color: "from-yellow-400 to-yellow-600", description: "ES6+ & modern frameworks" },
      { name: "React", icon: ReactJs, level: 85, color: "from-cyan-400 to-blue-500", description: "Hooks, Context & performance" },
      { name: "Tailwind CSS", icon: Tailwind, level: 92, color: "from-teal-400 to-blue-500", description: "Utility-first design systems" },
      { name: "Material UI", icon: Material, level: 80, color: "from-blue-600 to-purple-600", description: "Component libraries & theming" },
    ],
    backend: [
      { name: "PHP", icon: Php, level: 88, color: "from-purple-600 to-indigo-600", description: "OOP, MVC & modern practices" },
      { name: "Laravel", icon: Laravel, level: 85, color: "from-red-500 to-pink-500", description: "Eloquent, APIs & authentication" },
      { name: "MySQL", icon: Mysql, level: 82, color: "from-blue-600 to-cyan-600", description: "Query optimization & indexing" },
      { name: "PostgreSQL", icon: Db, level: 78, color: "from-blue-700 to-indigo-700", description: "Advanced features & JSON ops" },
    ],
    tools: [
      { name: "Git", icon: Git, level: 90, color: "from-orange-500 to-red-600", description: "Branching strategies & workflows" },
      { name: "GitHub", icon: GitHub, level: 88, color: "from-gray-700 to-gray-900", description: "CI/CD, Actions & collaboration" },
      { name: "Docker", icon: Docker, level: 75, color: "from-blue-500 to-cyan-500", description: "Containerization & deployment" },
    ],
  };

  const categories = [
    { id: "all", name: "All Technologies", count: Object.values(skillsData).flat().length },
    { id: "frontend", name: "Frontend Development", count: skillsData.frontend.length },
    { id: "backend", name: "Backend & Database", count: skillsData.backend.length },
    { id: "tools", name: "DevOps & Tools", count: skillsData.tools.length },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") return Object.values(skillsData).flat();
    return skillsData[activeCategory] || [];
  };

  // Section header animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-header", start: "top 85%" },
      });
      gsap.from(".skills-tabs button", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".skills-tabs", start: "top 85%" },
      });
      // Stats counters
      const stats = [
        { el: ".stat-years", end: 3 },
        { el: ".stat-tech", end: Object.values(skillsData).flat().length },
        { el: ".stat-projects", end: 50 },
        { el: ".stat-satisfaction", end: 99 },
      ];
      stats.forEach(({ el, end }) => {
        const element = document.querySelector(el);
        if (!element) return;
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          onEnter: () => {
            gsap.to(obj, {
              val: end,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                element.textContent = Math.round(obj.val) + (element.dataset.suffix || "");
              },
            });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Re-animate grid when category changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        scale: 0.92,
        stagger: 0.07,
        duration: 0.55,
        ease: "back.out(1.4)",
      });
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  // Progress bar animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".progress-bar", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      });
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            Proven proficiency in modern web technologies with hands-on experience
            building scalable applications and delivering enterprise-grade solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : `${colors.card} ${colors.textSecondary} ${colors.cardHover} hover:text-white`
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {getFilteredSkills().map((skill) => (
            <div
              key={skill.name}
              className={`skill-card group relative ${colors.card} rounded-xl p-6 border ${colors.border} hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
            >
              {/* Skill Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className={`relative w-16 h-16 rounded-full p-2 ${colors.tertiary} group-hover:bg-slate-600 transition-colors duration-300`}
                  />
                </div>
              </div>

              <h3 className={`text-lg font-semibold text-center mb-2 ${colors.textPrimary} group-hover:text-blue-400 transition-colors duration-300`}>
                {skill.name}
              </h3>
              <p className={`text-xs ${colors.textMuted} text-center mb-4 leading-relaxed`}>
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={colors.textMuted}>Proficiency</span>
                  <span className="text-blue-400 font-medium">{skill.level}%</span>
                </div>
                <div className={`w-full ${colors.tertiary} rounded-full h-2 overflow-hidden`}>
                  <div
                    className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-4`}>Professional Achievements</h3>
            <p className={`${colors.textSecondary} max-w-2xl mx-auto`}>
              Measurable impact and continuous growth in software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { cls: "stat-years", suffix: "+", label: "Years of Professional", sub: "Development Experience", color: "text-blue-400", border: "hover:border-blue-500" },
              { cls: "stat-tech", suffix: "", label: "Modern Technologies", sub: "& Frameworks Mastered", color: "text-purple-400", border: "hover:border-purple-500" },
              { cls: "stat-projects", suffix: "+", label: "Production Applications", sub: "Successfully Delivered", color: "text-green-400", border: "hover:border-green-500" },
              { cls: "stat-satisfaction", suffix: "%", label: "Client Satisfaction", sub: "& Project Success Rate", color: "text-pink-400", border: "hover:border-pink-500" },
            ].map((stat) => (
              <div key={stat.cls} className={`${colors.card} rounded-xl p-6 border ${colors.border} ${stat.border} text-center transition-all duration-300 hover:scale-105`}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  <span className={stat.cls} data-suffix={stat.suffix}>0{stat.suffix}</span>
                </div>
                <div className={`${colors.textSecondary} text-sm`}>{stat.label}</div>
                <div className={`${colors.textSecondary} text-sm`}>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className={`${colors.card} rounded-xl p-8 border ${colors.border}`}>
              <h4 className={`text-xl font-bold ${colors.textPrimary} mb-6 text-center`}>Core Competencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { color: "bg-blue-400", text: "Full-Stack Web Development" },
                  { color: "bg-pink-400", text: "Responsive UI/UX Implementation" },
                  { color: "bg-green-400", text: "RESTful API Design & Integration" },
                  { color: "bg-yellow-400", text: "Version Control & Collaboration" },
                  { color: "bg-purple-400", text: "Database Architecture & Optimization" },
                  { color: "bg-cyan-400", text: "Performance Optimization" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${item.color} rounded-full flex-shrink-0`}></div>
                    <span className={colors.textSecondary}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
