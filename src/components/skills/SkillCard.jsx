import React from "react";

const SkillCard = ({ skill, colors }) => {
  return (
    <div
      className={`skill-card group relative ${colors.card} rounded-xl p-6 border ${colors.border} hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
      role="listitem"
    >
      {/* Skill Icon */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className={`relative w-16 h-16 rounded-full p-2 ${colors.tertiary} group-hover:bg-slate-600 transition-colors duration-300`}
            aria-hidden="true"
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
      <div className="space-y-2" aria-label={`Proficiency level: ${skill.level}%`}>
        <div className="flex justify-between text-sm">
          <span className={colors.textMuted}>Proficiency</span>
          <span className="text-blue-400 font-medium">{skill.level}%</span>
        </div>
        <div className={`w-full ${colors.tertiary} rounded-full h-2 overflow-hidden`}>
          <div
            className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full`}
            style={{ width: `${skill.level}%` }}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
    </div>
  );
};

export default SkillCard;
