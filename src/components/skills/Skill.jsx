import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { skillsData, categories, achievements, competencies } from "../../data/skills";
import SkillCard from "./SkillCard";
import SkillTabs from "./SkillTabs";
import StatsGrid from "./StatsGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { colors } = useTheme();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const getFilteredSkills = () => {
    if (activeCategory === "all") return Object.values(skillsData).flat();
    return skillsData[activeCategory] || [];
  };

  // Section header & stats animation
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
      achievements.forEach(({ cls, end }) => {
        const element = document.querySelector(`.${cls}`);
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

      gsap.from(".progress-bar", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
      });
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="py-12 px-4" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header text-center mb-12">
          <h2 id="skills-heading" className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Proficiency & Competence
            </span>
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            Proven proficiency in modern web technologies with hands-on experience
            building scalable applications and delivering enterprise-grade solutions
          </p>
        </div>

        {/* Category Tabs */}
        <SkillTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          colors={colors} 
        />

        {/* Skills Grid */}
        <div ref={gridRef} id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8" role="list">
          {getFilteredSkills().map((skill) => (
            <SkillCard key={skill.name} skill={skill} colors={colors} />
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

          <StatsGrid achievements={achievements} colors={colors} />

          {/* Core Competencies */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className={`${colors.card} rounded-xl p-8 border ${colors.border}`}>
              <h4 className={`text-xl font-bold ${colors.textPrimary} mb-6 text-center`}>Core Competencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competencies.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${item.color} rounded-full flex-shrink-0`} aria-hidden="true"></div>
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
