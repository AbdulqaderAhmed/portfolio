import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TRAIL_LENGTH = 18;
const TRAIL_COLORS = [
  "#3b82f6", "#10b981", "#14b8a6", "#059669",
  "#06b6d4", "#f43f5e", "#f97316", "#eab308",
];

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const trailPositions = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
  const mousePos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const ctx = gsap.context(() => {});

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onEnterLink = (e) => {
      if (e.target.closest("a, button, [role='button']")) setIsHovering(true);
    };
    const onLeaveLink = (e) => {
      if (e.target.closest("a, button, [role='button']")) setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnterLink);
    document.addEventListener("mouseout", onLeaveLink);

    // Animate loop
    function loop() {
      const { x, y } = mousePos.current;

      ctx.add(() => {
        // Move main dot instantly
        if (cursorRef.current) {
          gsap.set(cursorRef.current, { x: x - 5, y: y - 5 });
        }

        // Lag ring behind
        if (ringRef.current) {
          gsap.to(ringRef.current, {
            x: x - 18,
            y: y - 18,
            duration: 0.12,
            ease: "power2.out",
          });
        }

        // Shift trail positions
        trailPositions.current.unshift({ x, y });
        trailPositions.current.length = TRAIL_LENGTH;

        // Update trail dots
        trailRefs.current.forEach((el, i) => {
          if (!el) return;
          const pos = trailPositions.current[i] || { x: -100, y: -100 };
          const scale = 1 - i / TRAIL_LENGTH;
          gsap.set(el, {
            x: pos.x - 5,
            y: pos.y - 5,
            scale,
            opacity: scale * 0.7,
          });
        });
      });

      rafRef.current = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      document.body.style.cursor = "";
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnterLink);
      document.removeEventListener("mouseout", onLeaveLink);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
          style={{
            width: 10,
            height: 10,
            background: TRAIL_COLORS[i % TRAIL_COLORS.length],
            boxShadow: `0 0 6px 2px ${TRAIL_COLORS[i % TRAIL_COLORS.length]}88`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 transition-all duration-150"
        style={{
          width: 36,
          height: 36,
          borderColor: isHovering ? "#06b6d4" : "#10b981",
          background: isHovering ? "rgba(6,182,212,0.08)" : "transparent",
          transform: isClicking ? "scale(0.8)" : isHovering ? "scale(1.4)" : "scale(1)",
          willChange: "transform",
        }}
      />

      {/* Core dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-100"
        style={{
          width: 10,
          height: 10,
          background: isHovering
            ? "radial-gradient(circle, #06b6d4, #10b981)"
            : "radial-gradient(circle, #fff, #10b981)",
          boxShadow: isHovering
            ? "0 0 12px 4px #06b6d488"
            : "0 0 8px 3px #10b98188",
          transform: isClicking ? "scale(0.6)" : "scale(1)",
          willChange: "transform",
        }}
      />
    </>
  );
}
