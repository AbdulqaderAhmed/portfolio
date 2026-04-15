import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MouseFish() {
  const fishRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const fishPos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsMoving(true);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Initial position
    fishPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const ctx = gsap.context(() => {
      // 1. Ticker for smooth organic following
      gsap.ticker.add(() => {
        // Lerp factor for organic lag
        const lerp = 0.08;
        fishPos.current.x += (mousePos.current.x - fishPos.current.x) * lerp;
        fishPos.current.y += (mousePos.current.y - fishPos.current.y) * lerp;

        if (fishRef.current) {
          // Calculate movement delta for rotation and flip
          const dx = mousePos.current.x - lastMousePos.current.x;
          const dy = mousePos.current.y - lastMousePos.current.y;
          
          // Only update rotation/flip if there's significant movement
          if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            const isFlipped = dx < 0;

            gsap.set(fishRef.current, {
              x: fishPos.current.x,
              y: fishPos.current.y,
              rotation: isFlipped ? angle + 180 : angle,
              scaleX: isFlipped ? -1 : 1,
            });
          } else {
            // Idle hover effect
            gsap.set(fishRef.current, {
              x: fishPos.current.x,
              y: fishPos.current.y,
            });
          }
          
          lastMousePos.current = { ...mousePos.current };
        }
      });

      // 2. Continuous tail wag animation
      gsap.to(".fish-tail", {
        rotation: 20,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3. Fin wiggle
      gsap.to(".fish-fin", {
        rotation: 15,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={fishRef}
      className="fixed pointer-events-none z-[9999] transition-opacity duration-1000"
      style={{ 
        opacity: isMoving ? 1 : 0,
        transformOrigin: "center center"
      }}
    >
      <div className="relative w-16 h-10">
        {/* Fish Body */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-lg border border-white/20 overflow-hidden">
          {/* Eye */}
          <div className="absolute right-3 top-2 w-2 h-2 bg-white rounded-full">
            <div className="absolute right-0.5 top-0.5 w-1 h-1 bg-slate-900 rounded-full"></div>
          </div>
          {/* Scales pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:4px_4px]"></div>
        </div>

        {/* Tail Fin */}
        <div className="fish-tail absolute -left-4 top-1 w-6 h-8 bg-emerald-500/80 rounded-l-full origin-right" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}></div>

        {/* Side Fin */}
        <div className="fish-fin absolute left-6 top-6 w-4 h-3 bg-teal-400/60 rounded-full origin-top-left"></div>
        
        {/* Dorsal Fin */}
        <div className="absolute left-4 -top-3 w-6 h-4 bg-emerald-400/60 rounded-t-full" style={{ clipPath: 'polygon(20% 100%, 80% 100%, 50% 0)' }}></div>
      </div>
    </div>
  );
}
