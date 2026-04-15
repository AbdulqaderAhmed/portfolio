import { gsap } from "gsap";

export function useInteractive() {
  /**
   * Magnetic effect for buttons/links
   */
  const handleMagneticMove = (e, target, strength = 0.45) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(target, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const resetMagnetic = (target) => {
    gsap.to(target, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
  };

  /**
   * 3D Tilt effect for cards
   */
  const handleTiltMove = (e, target, config = { rotate: 10, scale: 1.02 }) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / config.rotate;
    const tiltY = (centerX - x) / (config.rotate * 1.5);

    gsap.to(target, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: config.scale,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const resetTilt = (target) => {
    gsap.to(target, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    });
  };

  return {
    handleMagneticMove,
    resetMagnetic,
    handleTiltMove,
    resetTilt
  };
}
