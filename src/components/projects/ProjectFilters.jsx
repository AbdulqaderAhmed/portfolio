import React from "react";

const ProjectFilters = ({ categories, filter, setFilter, colors }) => {
  return (
    <div className="projects-filters flex flex-wrap justify-center gap-3 mb-16" role="tablist" aria-label="Project categories">
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={filter === category.id}
          aria-controls="projects-grid"
          onClick={() => setFilter(category.id)}
          className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 relative border ${
            filter === category.id
              ? "bg-white text-slate-900 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              : `${colors.card} ${colors.textSecondary} ${colors.border} hover:border-blue-400`
          }`}
        >
          {category.name}
          {filter === category.id && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-500" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
