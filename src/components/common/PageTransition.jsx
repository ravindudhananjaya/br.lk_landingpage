import React, { useEffect, useState } from "react";

const PageTransition = ({ children, duration = 600, offset = 8, className = "" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 0);
    return () => clearTimeout(id);
  }, []);

  const base = `transition-all ease-out transform-gpu will-change-transform will-change-opacity`;
  // Use static classes to ensure Tailwind generates them
  const hidden = `opacity-0 translate-y-3`;
  const visible = `opacity-100 translate-y-0`;

  return (
    <div
      className={`${base} ${show ? visible : hidden} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
