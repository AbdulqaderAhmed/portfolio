import React, { useState } from "react";
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

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { colors } = useTheme();

  const skillsData = {
    frontend: [
      {
        name: "HTML5",
        icon: Html,
        level: 95,
        color: "from-orange-500 to-red-500",
        description: "Semantic markup & accessibility",
      },
      {
        name: "CSS3",
        icon: Css,
        level: 90,
        color: "from-blue-500 to-cyan-500",
        description: "Advanced layouts & animations",
      },
      {
        name: "JavaScript",
        icon: JavaScript,
        level: 88,
        color: "from-yellow-400 to-yellow-600",
        description: "ES6+ & modern frameworks",
      },
      {
        name: "React",
        icon: ReactJs,
        level: 85,
        color: "from-cyan-400 to-blue-500",
        description: "Hooks, Context & performance",
      },
      {
        name: "Tailwind CSS",
        icon: Tailwind,
        level: 92,
        color: "from-teal-400 to-blue-500",
        description: "Utility-first design systems",
      },
      {
        name: "Material UI",
        icon: Material,
        level: 80,
        color: "from-blue-600 to-purple-600",
        description: "Component libraries & theming",
      },
    ],
    backend: [
      {
        name: "PHP",
        icon: Php,
        level: 88,
        color: "from-purple-600 to-indigo-600",
        description: "OOP, MVC & modern practices",
      },
      {
        name: "Laravel",
        icon: Laravel,
        level: 85,
        color: "from-red-500 to-pink-500",
        description: "Eloquent, APIs & authentication",
      },
      {
        name: "MySQL",
        icon: Mysql,
        level: 82,
        color: "from-blue-600 to-cyan-600",
        description: "Query optimization & indexing",
      },
      {
        name: "PostgreSQL",
        icon: Db,
        level: 78,
        color: "from-blue-700 to-indigo-700",
        description: "Advanced features & JSON ops",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: Git,
        level: 90,
        color: "from-orange-500 to-red-600",
        description: "Branching strategies & workflows",
      },
      {
        name: "GitHub",
        icon: GitHub,
        level: 88,
        color: "from-gray-700 to-gray-900",
        description: "CI/CD, Actions & collaboration",
      },
      {
        name: "Docker",
        icon: Docker,
        level: 75,
        color: "from-blue-500 to-cyan-500",
        description: "Containerization & deployment",
      },
    ],
  };

  const categories = [
    {
      id: "all",
      name: "All Technologies",
      count: Object.values(skillsData).flat().length,
    },
    { id: "frontend", name: "Frontend Development", count: skillsData.frontend.length },
    { id: "backend", name: "Backend & Database", count: skillsData.backend.length },
    { id: "tools", name: "DevOps & Tools", count: skillsData.tools.length },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
          >
            Proven proficiency in modern web technologies with hands-on experience 
            building scalable applications and delivering enterprise-grade solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={skill.name}
              className={`group ${colors.card} rounded-xl p-6 border ${colors.border} hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className={`relative w-16 h-16 rounded-full p-2 ${colors.tertiary} group-hover:bg-slate-600 transition-colors duration-300`}
                  />
                </div>
              </div>

              {/* Skill Name */}
              <h3
                className={`text-lg font-semibold text-center mb-2 ${colors.textPrimary} group-hover:text-blue-400 transition-colors duration-300`}
              >
                {skill.name}
              </h3>
              
              {/* Skill Description */}
              <p className={`text-xs ${colors.textMuted} text-center mb-4 leading-relaxed`}>
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={colors.textMuted}>Proficiency</span>
                  <span className="text-blue-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`w-full ${colors.tertiary} rounded-full h-2 overflow-hidden`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: `${skill.level}%`,
                      transform:
                        activeCategory === "all" ||
                        skillsData[activeCategory]?.includes(skill)
                          ? "scaleX(1)"
                          : "scaleX(0)",
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Professional Achievements */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-4`}>
              Professional Achievements
            </h3>
            <p className={`${colors.textSecondary} max-w-2xl mx-auto`}>
              Measurable impact and continuous growth in software development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div
              className={`${colors.card} rounded-xl p-6 border ${colors.border} text-center hover:border-blue-500 transition-all duration-300`}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className={`${colors.textSecondary} text-sm`}>Years of Professional</div>
              <div className={`${colors.textSecondary} text-sm`}>Development Experience</div>
            </div>
            <div
              className={`${colors.card} rounded-xl p-6 border ${colors.border} text-center hover:border-purple-500 transition-all duration-300`}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {Object.values(skillsData).flat().length}
              </div>
              <div className={`${colors.textSecondary} text-sm`}>Modern Technologies</div>
              <div className={`${colors.textSecondary} text-sm`}>& Frameworks Mastered</div>
            </div>
            <div
              className={`${colors.card} rounded-xl p-6 border ${colors.border} text-center hover:border-green-500 transition-all duration-300`}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className={`${colors.textSecondary} text-sm`}>Production Applications</div>
              <div className={`${colors.textSecondary} text-sm`}>Successfully Delivered</div>
            </div>
            <div
              className={`${colors.card} rounded-xl p-6 border ${colors.border} text-center hover:border-pink-500 transition-all duration-300`}
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">99%</div>
              <div className={`${colors.textSecondary} text-sm`}>Client Satisfaction</div>
              <div className={`${colors.textSecondary} text-sm`}>& Project Success Rate</div>
            </div>
          </div>
          
          {/* Key Competencies */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className={`${colors.card} rounded-xl p-8 border ${colors.border}`}>
              <h4 className={`text-xl font-bold ${colors.textPrimary} mb-6 text-center`}>
                Core Competencies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className={colors.textSecondary}>Full-Stack Web Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className={colors.textSecondary}>RESTful API Design & Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className={colors.textSecondary}>Database Architecture & Optimization</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className={colors.textSecondary}>Responsive UI/UX Implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className={colors.textSecondary}>Version Control & Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className={colors.textSecondary}>Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
