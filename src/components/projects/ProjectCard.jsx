import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useInteractive } from "../../hooks/useInteractive";

const ProjectCard = ({ project, index, colors, isDark }) => {
  const { handleTiltMove, resetTilt } = useInteractive();

  return (
    <div
      className="project-card-stack group/card transition-all duration-700 relative shrink-0"
      style={{ 
        marginLeft: index === 0 ? 0 : "-220px", // Adjusted for better horizontal density
        zIndex: index + 10 
      }}
      onMouseMove={(e) => handleTiltMove(e, e.currentTarget.querySelector(".stack-inner"))}
      onMouseLeave={(e) => {
        resetTilt(e.currentTarget.querySelector(".stack-inner"));
      }}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Folder Tab Visual */}
      <div className="flex items-end ml-12 relative z-[11]">
        <div 
          className={`h-12 w-56 rounded-t-3xl ${colors.card} border-t border-l border-r ${colors.border} flex items-center justify-center transition-transform duration-500 group-hover/card:-translate-y-2 shadow-[-5px_-5px_15px_rgba(0,0,0,0.1)]`}
          aria-hidden="true"
        >
          <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] font-bold">
            PROJECT_FILE_0{index + 1}
          </span>
        </div>
      </div>

      {/* Card Inner with Physical Depth */}
      <div className={`stack-inner relative w-[480px] h-[580px] overflow-hidden ${colors.card} border ${colors.border} rounded-[3rem] shadow-[-10px_-10px_40px_rgba(0,0,0,0.2),20px_20px_80px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover/card:translate-x-32 group-hover/card:shadow-[-40px_40px_100px_rgba(0,0,0,0.6)] group-hover/card:border-emerald-500/50 group-hover/card:z-[100]`}>
        
        {/* Decorative Background Number - Anchored to Card */}
        <div 
          className="absolute right-4 bottom-0 pointer-events-none select-none text-[18rem] font-black text-emerald-500/5 z-0 transition-opacity duration-500 group-hover/card:opacity-0" 
          aria-hidden="true"
        >
          0{index + 1}
        </div>

        <div className="relative h-full p-12 flex flex-col justify-between z-10">
          {/* Top Bar */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 id={`project-title-${project.id}`} className={`text-3xl lg:text-4xl font-black ${colors.textPrimary} tracking-tight group-hover/card:text-emerald-400 transition-colors duration-500`}>
                {project.title}
              </h3>
              <div className="w-16 h-1 bg-emerald-500 rounded-full group-hover/card:w-32 transition-all duration-700"></div>
            </div>
            <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg border border-white/20 transform group-hover/card:rotate-12 transition-transform duration-500" aria-hidden="true">
              <FaCode className="text-white" size={24} />
            </div>
          </div>

          {/* Middle Info */}
          <div className="max-w-3xl space-y-6">
            <p className={`${colors.textSecondary} text-sm lg:text-base font-light leading-relaxed line-clamp-4 group-hover/card:line-clamp-none transition-all duration-500`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
              {project.technologies.map(tech => (
                <span key={tech} className={`px-3 py-1 rounded-full border ${colors.border} bg-emerald-500/5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 group-hover/card:bg-emerald-500 group-hover/card:text-white transition-all duration-500`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-black flex items-center gap-2 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <FaGithub size={16} /> VIEW SOURCE
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-xl border-2 border-emerald-500 text-emerald-500 text-xs font-black flex items-center gap-2 transition-all hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95`}
                aria-label={`View live demo of ${project.title}`}
              >
                <FaExternalLinkAlt size={14} /> LIVE DEMO
              </a>
            )}
          </div>
        </div>

        {/* Physical Card Shine */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
      </div>
    </div>
  );
};

export default ProjectCard;
