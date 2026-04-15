import React, { forwardRef } from "react";

const FloatingPreview = forwardRef(({ activeProject }, ref) => {
  return (
    <div 
      ref={ref}
      className={`fixed pointer-events-none z-[100] w-[400px] h-[260px] rounded-3xl overflow-hidden border-4 border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-opacity duration-500 ${activeProject ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      style={{ 
        left: 0, 
        top: 0, 
        transform: 'translate(-50%, -110%)',
        willChange: 'transform'
      }}
      aria-hidden="true"
    >
      {activeProject && (
        <img 
          src={activeProject.image} 
          alt="Preview" 
          className="w-full h-full object-cover animate-reveal-liquid"
        />
      )}
    </div>
  );
});

FloatingPreview.displayName = "FloatingPreview";

export default FloatingPreview;
