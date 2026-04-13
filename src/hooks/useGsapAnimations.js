import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + slide up on scroll
 */
export function useFadeInUp(selector, options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector || "[data-fade-up]", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: options.stagger ?? 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        ...options,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return ref;
}

/**
 * Stagger children on scroll
 */
export function useStaggerReveal(childSelector, options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(childSelector, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ...options,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return ref;
}

/**
 * Horizontal slide in
 */
export function useSlideIn(direction = "left", options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        x: direction === "left" ? -80 : 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        ...options,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return ref;
}

/**
 * Counter number animation
 */
export function useCountUp(endValue, duration = 1.5) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          val: endValue,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + (el.dataset.suffix || "");
          },
        });
      },
    });
    return () => trigger.kill();
  }, [endValue, duration]);
  return ref;
}
