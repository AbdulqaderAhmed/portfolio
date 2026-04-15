import React from "react";

const SkillTabs = ({ categories, activeCategory, setActiveCategory, colors }) => {
  return (
    <div className="skills-tabs flex flex-wrap justify-center gap-4 mb-8" role="tablist" aria-label="Skill categories">
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={activeCategory === category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category.id
              ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg"
              : `${colors.card} ${colors.textSecondary} ${colors.cardHover} hover:text-white`
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default SkillTabs;
