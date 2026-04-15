import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { projects, categories } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Project() {
  const [filter, setFilter] = useState("all");
  const { colors, isDark } = useTheme();
  
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // --- Advanced GSAP Effects ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Entrance
      const titleSpans = document.querySelectorAll(".projects-title span");
      gsap.from(titleSpans, {
        y: 80,
        opacity: 0,
        rotateX: -90,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
        },
      });

      // 2. Parallax Background Text
      gsap.to(".bg-parallax-text", {
        x: -200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 px-4 overflow-hidden perspective-1000" aria-labelledby="projects-heading">
      {/* Parallax Background Text */}
      <div className="bg-parallax-text absolute top-20 left-10 pointer-events-none select-none text-[20rem] font-black text-emerald-500/5 whitespace-nowrap z-0" aria-hidden="true">
        SELECTED WORK SELECTED WORK
      </div>

      <div className="relative z-10 max-w-[100vw] mx-auto overflow-hidden">
        {/* Section Header */}
        <div className="projects-header text-center mb-20 px-4">
          <h2 id="projects-heading" className="projects-title text-6xl lg:text-8xl font-black mb-6 tracking-tighter overflow-hidden flex flex-wrap justify-center items-center gap-x-4">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent italic">
              Featured 
            </span>
            <span className={`inline-block ${isDark ? "text-white" : "text-slate-900"}`}>Showcase</span>
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-2xl mx-auto font-light leading-relaxed opacity-80 reveal-text`}>
            A curated selection of digital experiences where engineering meets extreme aesthetics.
          </p>
        </div>

        {/* Category Filter */}
        <ProjectFilters 
          categories={categories} 
          filter={filter} 
          setFilter={setFilter} 
          colors={colors} 
        />

        {/* Projects Horizontal Stack */}
        <div 
          ref={scrollContainerRef}
          id="projects-grid" 
          className="mt-20 flex flex-row overflow-x-auto pb-32 pt-10 px-[10vw] no-scrollbar gap-0 items-center snap-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingRight: '50vw' // Significant right padding to ensure last card can be pulled out fully
          }}
        >
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="snap-center">
              <ProjectCard 
                project={project}
                index={index}
                colors={colors}
                isDark={isDark}
              />
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/AbdulqaderAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-flex items-center gap-3 px-12 py-6 rounded-2xl font-black text-2xl transition-all duration-500 ${isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"} hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]`}
            aria-label="Explore more projects on my GitHub archive"
          >
            <FaGithub size={32} aria-hidden="true" />
            Explore Full Archive
            <span className="absolute inset-0 border-2 border-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
