import React, { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const PARTICLE_COUNT = 72;
const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4", "#a78bfa", "#f472b6"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Build particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(1.5, 4),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: randomBetween(-0.35, 0.35),
      vy: randomBetween(-0.35, 0.35),
      alpha: randomBetween(0.25, 0.7),
      pulse: randomBetween(0, Math.PI * 2), // phase offset for pulsing
    }));

    const CONNECTION_DIST = 130;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update + draw particles
      for (const p of particles) {
        p.pulse += 0.018;
        const pulsedR = p.r + Math.sin(p.pulse) * 0.8;

        // Gentle mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Draw glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 3);
        grd.addColorStop(0, p.color + "cc");
        grd.addColorStop(1, p.color + "00");
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Draw core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const opacity = (1 - d / CONNECTION_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDark
              ? `rgba(139,92,246,${opacity})`
              : `rgba(59,130,246,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.55 : 0.35 }}
    />
  );
}
