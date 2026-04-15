import React, { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const FISH_COUNT = 8;
const BUBBLE_COUNT = 14;
const FISH_EMOJIS = ["🐟", "🐠", "🐡", "🦈", "🐙", "🦑", "🐳", "🐬"];

export default function UnderwaterFun() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999 });
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

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

    const onMouseMove = (e) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- Fish entities ---
    const fish = Array.from({ length: FISH_COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 0.8,
      emoji: FISH_EMOJIS[i % FISH_EMOJIS.length],
      size: 20 + Math.random() * 16,
      wobblePhase: Math.random() * Math.PI * 2,
      scared: 0, // 0-1 fear factor
      scaredAngle: 0,
      flipped: false,
    }));

    // --- Bubbles ---
    const bubbles = Array.from({ length: BUBBLE_COUNT }, () => ({
      x: Math.random() * W,
      y: H + Math.random() * 100,
      radius: 2 + Math.random() * 6,
      speed: 0.3 + Math.random() * 0.8,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleAmp: 0.5 + Math.random() * 1.5,
      opacity: 0.15 + Math.random() * 0.3,
    }));

    // --- Mouse trail bubbles ---
    const trailBubbles = [];

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const dark = isDarkRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseSpeed = Math.sqrt(
        (mx - mouseRef.current.prevX) ** 2 +
        (my - mouseRef.current.prevY) ** 2
      );

      // --- Spawn trail bubbles when mouse moves fast ---
      if (mouseSpeed > 5 && mx > 0 && my > 0 && trailBubbles.length < 30) {
        const count = Math.min(Math.floor(mouseSpeed / 15), 3);
        for (let i = 0; i < count; i++) {
          trailBubbles.push({
            x: mx + (Math.random() - 0.5) * 20,
            y: my + (Math.random() - 0.5) * 20,
            radius: 2 + Math.random() * 5,
            vy: -(0.5 + Math.random() * 1.5),
            vx: (Math.random() - 0.5) * 0.8,
            opacity: 0.5 + Math.random() * 0.3,
            life: 60 + Math.random() * 40,
          });
        }
      }

      // --- Update & draw ambient bubbles ---
      for (const b of bubbles) {
        b.wobblePhase += 0.02;
        b.y -= b.speed;
        b.x += Math.sin(b.wobblePhase) * b.wobbleAmp;

        // Reset at top
        if (b.y < -b.radius * 2) {
          b.y = H + b.radius * 2;
          b.x = Math.random() * W;
        }

        // Mouse push
        const bdx = b.x - mx;
        const bdy = b.y - my;
        const bDist = Math.sqrt(bdx * bdx + bdy * bdy);
        if (bDist < 80 && bDist > 0) {
          const push = (80 - bDist) / 80;
          b.x += (bdx / bDist) * push * 3;
          b.y += (bdy / bDist) * push * 2;
        }

        drawBubble(ctx, b.x, b.y, b.radius, b.opacity, dark);
      }

      // --- Update & draw trail bubbles ---
      for (let i = trailBubbles.length - 1; i >= 0; i--) {
        const tb = trailBubbles[i];
        tb.x += tb.vx;
        tb.y += tb.vy;
        tb.vy *= 0.98;
        tb.life--;
        tb.opacity -= 0.01;

        if (tb.life <= 0 || tb.opacity <= 0) {
          trailBubbles.splice(i, 1);
          continue;
        }

        drawBubble(ctx, tb.x, tb.y, tb.radius, tb.opacity, dark);
      }

      // --- Update & draw fish ---
      for (const f of fish) {
        f.wobblePhase += 0.04;

        // Natural wander
        f.vx += (Math.random() - 0.5) * 0.05;
        f.vy += (Math.random() - 0.5) * 0.03;

        // Gentle deceleration
        f.vx *= 0.995;
        f.vy *= 0.995;

        // Clamp speed
        const maxSpeed = f.scared > 0.3 ? 5 : 1.5;
        const speed = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
        if (speed > maxSpeed) {
          f.vx = (f.vx / speed) * maxSpeed;
          f.vy = (f.vy / speed) * maxSpeed;
        }

        // Mouse fear — fish flee from cursor
        const fdx = f.x - mx;
        const fdy = f.y - my;
        const fDist = Math.sqrt(fdx * fdx + fdy * fdy);
        const FEAR_RADIUS = 150;

        if (fDist < FEAR_RADIUS && fDist > 0) {
          const fear = ((FEAR_RADIUS - fDist) / FEAR_RADIUS);
          f.scared = Math.min(1, f.scared + fear * 0.2);
          f.scaredAngle = Math.atan2(fdy, fdx);

          // Flee! 
          f.vx += (fdx / fDist) * fear * 2.5;
          f.vy += (fdy / fDist) * fear * 1.5;
        } else {
          f.scared *= 0.96;
        }

        f.x += f.vx;
        f.y += f.vy;

        // Wrap edges with padding
        const pad = 40;
        if (f.x < -pad) f.x = W + pad;
        if (f.x > W + pad) f.x = -pad;
        if (f.y < -pad) f.y = H + pad;
        if (f.y > H + pad) f.y = -pad;

        // Direction for flipping
        f.flipped = f.vx < 0;

        // Wobble for swimming motion
        const wobbleY = Math.sin(f.wobblePhase) * 3;

        // Draw fish emoji
        ctx.save();
        ctx.translate(f.x, f.y + wobbleY);

        // Scale flip if moving left
        if (f.flipped) {
          ctx.scale(-1, 1);
        }

        // Slight rotation based on vertical movement
        const tiltAngle = Math.atan2(f.vy, Math.abs(f.vx)) * 0.3;
        ctx.rotate(f.flipped ? -tiltAngle : tiltAngle);

        // Fear: shake effect
        if (f.scared > 0.3) {
          const shake = f.scared * 2;
          ctx.translate(
            (Math.random() - 0.5) * shake,
            (Math.random() - 0.5) * shake
          );
        }

        ctx.font = `${f.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Subtle shadow under fish
        ctx.shadowColor = dark ? "rgba(0, 100, 200, 0.3)" : "rgba(0, 80, 160, 0.15)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        ctx.fillText(f.emoji, 0, 0);

        // Scared expression bubble ("!!!")
        if (f.scared > 0.5) {
          ctx.shadowColor = "transparent";
          ctx.font = `${10 + f.scared * 4}px sans-serif`;
          ctx.fillStyle = dark ? "rgba(255, 200, 80, 0.9)" : "rgba(255, 120, 50, 0.8)";
          ctx.fillText("!!", f.flipped ? -f.size * 0.5 : f.size * 0.5, -f.size * 0.4);
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
}

function drawBubble(ctx, x, y, radius, opacity, dark) {
  // Outer bubble
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = dark
    ? `rgba(150, 220, 255, ${opacity * 0.6})`
    : `rgba(80, 180, 255, ${opacity * 0.5})`;
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // Inner fill
  const grad = ctx.createRadialGradient(
    x - radius * 0.3,
    y - radius * 0.3,
    0,
    x,
    y,
    radius
  );
  if (dark) {
    grad.addColorStop(0, `rgba(180, 230, 255, ${opacity * 0.25})`);
    grad.addColorStop(1, `rgba(80, 150, 220, ${opacity * 0.05})`);
  } else {
    grad.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
    grad.addColorStop(1, `rgba(180, 230, 255, ${opacity * 0.1})`);
  }
  ctx.fillStyle = grad;
  ctx.fill();

  // Highlight
  ctx.beginPath();
  ctx.arc(x - radius * 0.25, y - radius * 0.25, radius * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = dark
    ? `rgba(220, 245, 255, ${opacity * 0.4})`
    : `rgba(255, 255, 255, ${opacity * 0.6})`;
  ctx.fill();
}
