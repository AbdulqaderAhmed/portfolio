import Html from "../assets/image/html.svg";
import Css from "../assets/image/css.svg";
import JavaScript from "../assets/image/js.svg";
import Db from "../assets/image/pgsql.svg";
import Docker from "../assets/image/docker.svg";
import Git from "../assets/image/git.svg";
import GitHub from "../assets/image/github.svg";
import Laravel from "../assets/image/laravel.svg";
import Material from "../assets/image/material-ui.svg";
import Mysql from "../assets/image/mysql.svg";
import Php from "../assets/image/php.svg";
import ReactJs from "../assets/image/reactjs.svg";
import Tailwind from "../assets/image/tailwindcss.svg";

export const skillsData = {
  frontend: [
    { name: "HTML5", icon: Html, level: 95, color: "from-orange-500 to-red-500", description: "Semantic markup & accessibility" },
    { name: "CSS3", icon: Css, level: 90, color: "from-blue-500 to-cyan-500", description: "Advanced layouts & animations" },
    { name: "JavaScript", icon: JavaScript, level: 88, color: "from-yellow-400 to-yellow-600", description: "ES6+ & modern frameworks" },
    { name: "React", icon: ReactJs, level: 85, color: "from-cyan-400 to-blue-500", description: "Hooks, Context & performance" },
    { name: "Tailwind CSS", icon: Tailwind, level: 92, color: "from-teal-400 to-blue-500", description: "Utility-first design systems" },
    { name: "Material UI", icon: Material, level: 80, color: "from-blue-600 to-emerald-600", description: "Component libraries & theming" },
  ],
  backend: [
    { name: "PHP", icon: Php, level: 88, color: "from-emerald-600 to-indigo-600", description: "OOP, MVC & modern practices" },
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

export const categories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend Development" },
  { id: "backend", name: "Backend & Database" },
  { id: "tools", name: "DevOps & Tools" },
];

export const achievements = [
  { cls: "stat-years", end: 3, suffix: "+", label: "Years of Professional", sub: "Development Experience", color: "text-blue-400", border: "hover:border-blue-500" },
  { cls: "stat-tech", end: Object.values(skillsData).flat().length, suffix: "", label: "Modern Technologies", sub: "& Frameworks Mastered", color: "text-emerald-400", border: "hover:border-emerald-500" },
  { cls: "stat-projects", end: 50, suffix: "+", label: "Production Applications", sub: "Successfully Delivered", color: "text-green-400", border: "hover:border-green-500" },
  { cls: "stat-satisfaction", end: 99, suffix: "%", label: "Client Satisfaction", sub: "& Project Success Rate", color: "text-pink-400", border: "hover:border-pink-500" },
];

export const competencies = [
  { color: "bg-blue-400", text: "Full-Stack Web Development" },
  { color: "bg-pink-400", text: "Responsive UI/UX Implementation" },
  { color: "bg-green-400", text: "RESTful API Design & Integration" },
  { color: "bg-yellow-400", text: "Version Control & Collaboration" },
  { color: "bg-emerald-400", text: "Database Architecture & Optimization" },
  { color: "bg-cyan-400", text: "Performance Optimization" },
];
