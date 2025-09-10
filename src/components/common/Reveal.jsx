import React, { useEffect, useRef, useState } from "react";

const variantClasses = {
  "fade-up": {
    initial: "opacity-0 translate-y-6",
    show: "opacity-100 translate-y-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-6",
    show: "opacity-100 translate-x-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-6",
    show: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-95",
    show: "opacity-100 scale-100",
  },
};

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  variant = "fade-up",
  threshold = 0.01,
  rootMargin = "0px 0px -10% 0px",
  duration = 700,
  delay = 0,
  once = true,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShow(true);
      return;
    }

    // Pre-check on mount: reveal if element is already well within viewport
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      setShow(true);
      if (once) return; // still set up observer if not once
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShow(false);
          }
        });
      },
      { threshold, rootMargin }
    );

  io.observe(el);
  return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  const v = variantClasses[variant] || variantClasses["fade-up"];

  return (
    <Tag
      ref={ref}
      className={`transform transition-all ease-out ${show ? v.show : v.initial} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
