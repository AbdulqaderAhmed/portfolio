import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BURST_COLORS = ["#3b82f6", "#10b981", "#059669", "#06b6d4", "#f97316", "#eab308", "#14b8a6", "#f43f5e"];

export default function ClickBurst() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {});

    const onClick = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const count = 12;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("div");
        const color = BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)];
        const size = Math.random() * 8 + 4;
        const angle = (i / count) * Math.PI * 2;
        const dist = Math.random() * 60 + 30;

        dot.style.cssText = `
          position: fixed;
          left: ${e.clientX - size / 2}px;
          top: ${e.clientY - size / 2}px;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: ${color};
          box-shadow: 0 0 8px 2px ${color}88;
          pointer-events: none;
          z-index: 9997;
        `;
        container.appendChild(dot);

        ctx.add(() => {
          gsap.to(dot, {
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            opacity: 0,
            scale: 0,
            duration: 0.6 + Math.random() * 0.3,
            ease: "power2.out",
            onComplete: () => dot.remove(),
          });
        });
      }

      // Ring ripple
      const ring = document.createElement("div");
      ring.style.cssText = `
        position: fixed;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #10b981;
        pointer-events: none;
        z-index: 9997;
      `;
      container.appendChild(ring);
      ctx.add(() => {
        gsap.to(ring, {
          scale: 4,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => ring.remove(),
        });
      });
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9997]" />;
}
