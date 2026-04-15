import React, { useEffect, useRef, useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const MAX_RIPPLES = 15;
const WAVE_LAYERS = 4;

export default function WaterBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const ripplesRef = useRef([]);
  const timeRef = useRef(0);
  const isDarkRef = useRef(isDark);

  // Keep isDark in sync via ref to avoid re-creating the effect
  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  const addRipple = useCallback((x, y) => {
    const ripples = ripplesRef.current;
    if (ripples.length >= MAX_RIPPLES) {
      ripples.shift();
    }
    ripples.push({
      x,
      y,
      radius: 0,
      maxRadius: 120 + Math.random() * 80,
      opacity: 0.6,
      speed: 1.8 + Math.random() * 1.2,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let lastRippleTime = 0;
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const now = Date.now();
      if (now - lastRippleTime > 180) {
        addRipple(e.clientX, e.clientY);
        lastRippleTime = now;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const onClick = (e) => {
      // Bigger ripple on click
      const ripples = ripplesRef.current;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 220 + Math.random() * 100,
        opacity: 0.9,
        speed: 2.5,
      });
    };
    window.addEventListener("click", onClick);

    // --- Wave layer config ---
    const waveLayers = Array.from({ length: WAVE_LAYERS }, (_, i) => ({
      amplitude: 12 + i * 6,
      frequency: 0.003 - i * 0.0005,
      speed: 0.008 + i * 0.003,
      phase: (i * Math.PI) / 3,
      yOffset: 0.35 + i * 0.15,
    }));

    // --- Caustic blobs ---
    const causticCount = 18;
    const caustics = Array.from({ length: causticCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 40 + Math.random() * 80,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      timeRef.current += 1;
      const t = timeRef.current;
      const dark = isDarkRef.current;

      ctx.clearRect(0, 0, W, H);

      // --- 1. Draw gradient base water ---
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      if (dark) {
        grad.addColorStop(0, "rgba(8, 20, 50, 0.85)");
        grad.addColorStop(0.5, "rgba(10, 35, 75, 0.7)");
        grad.addColorStop(1, "rgba(5, 15, 40, 0.9)");
      } else {
        grad.addColorStop(0, "rgba(180, 225, 255, 0.45)");
        grad.addColorStop(0.5, "rgba(140, 210, 250, 0.35)");
        grad.addColorStop(1, "rgba(100, 195, 245, 0.5)");
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // --- 2. Draw caustic light blobs ---
      for (const c of caustics) {
        c.x += c.speedX;
        c.y += c.speedY;
        c.phase += 0.012;

        // Wrap around
        if (c.x < -c.size) c.x = W + c.size;
        if (c.x > W + c.size) c.x = -c.size;
        if (c.y < -c.size) c.y = H + c.size;
        if (c.y > H + c.size) c.y = -c.size;

        const pulse = 0.5 + 0.5 * Math.sin(c.phase);
        const size = c.size * (0.8 + pulse * 0.4);
        const alpha = dark
          ? 0.03 + pulse * 0.04
          : 0.05 + pulse * 0.06;

        const cGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, size);
        if (dark) {
          cGrad.addColorStop(0, `rgba(80, 160, 255, ${alpha})`);
          cGrad.addColorStop(1, "rgba(80, 160, 255, 0)");
        } else {
          cGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 1.5})`);
          cGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        }
        ctx.fillStyle = cGrad;
        ctx.fillRect(c.x - size, c.y - size, size * 2, size * 2);
      }

      // --- 3. Draw wave layers ---
      for (let li = 0; li < waveLayers.length; li++) {
        const layer = waveLayers[li];
        const baseY = H * layer.yOffset;

        ctx.beginPath();
        ctx.moveTo(0, H);

        for (let x = 0; x <= W; x += 3) {
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;

          // Base wave
          let y = baseY +
            Math.sin(x * layer.frequency + t * layer.speed + layer.phase) * layer.amplitude;

          // Secondary wave for organic feel
          y += Math.sin(x * layer.frequency * 2.3 + t * layer.speed * 0.7 + layer.phase * 1.5) *
            (layer.amplitude * 0.4);

          // Mouse distortion — water bulges near cursor
          const distToMouse = Math.abs(x - mx);
          if (distToMouse < 200) {
            const influence = 1 - distToMouse / 200;
            const mouseYDist = (baseY - my) * 0.15 * influence * influence;
            y += mouseYDist * Math.sin(t * 0.05 + x * 0.02);
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(W, H);
        ctx.closePath();

        const waveAlpha = dark
          ? 0.08 + li * 0.03
          : 0.06 + li * 0.025;
        const waveColor = dark
          ? [30 + li * 15, 80 + li * 20, 180 + li * 15]
          : [100 + li * 30, 190 + li * 15, 245 - li * 10];

        ctx.fillStyle = `rgba(${waveColor[0]}, ${waveColor[1]}, ${waveColor[2]}, ${waveAlpha})`;
        ctx.fill();
      }

      // --- 4. Draw ripples ---
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.opacity -= 0.008;

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Outer ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        const ringColor = dark
          ? `rgba(100, 180, 255, ${r.opacity * 0.5})`
          : `rgba(0, 150, 255, ${r.opacity * 0.4})`;
        ctx.strokeStyle = ringColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner glow ring
        if (r.radius > 5) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.7, 0, Math.PI * 2);
          ctx.strokeStyle = dark
            ? `rgba(140, 210, 255, ${r.opacity * 0.3})`
            : `rgba(80, 190, 255, ${r.opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Center glow
        if (r.radius < r.maxRadius * 0.5) {
          const glowGrad = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius * 0.4);
          const glowAlpha = r.opacity * 0.15;
          if (dark) {
            glowGrad.addColorStop(0, `rgba(120, 200, 255, ${glowAlpha})`);
            glowGrad.addColorStop(1, "rgba(120, 200, 255, 0)");
          } else {
            glowGrad.addColorStop(0, `rgba(0, 160, 255, ${glowAlpha})`);
            glowGrad.addColorStop(1, "rgba(0, 160, 255, 0)");
          }
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }
      }

      // --- 5. Mouse glow aura ---
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
        if (dark) {
          mouseGlow.addColorStop(0, "rgba(80, 180, 255, 0.08)");
          mouseGlow.addColorStop(0.5, "rgba(60, 140, 220, 0.03)");
          mouseGlow.addColorStop(1, "rgba(60, 140, 220, 0)");
        } else {
          mouseGlow.addColorStop(0, "rgba(0, 150, 255, 0.06)");
          mouseGlow.addColorStop(0.5, "rgba(0, 120, 220, 0.02)");
          mouseGlow.addColorStop(1, "rgba(0, 120, 220, 0)");
        }
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mx, my, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, [addRipple]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.7 : 0.5 }}
    />
  );
}
