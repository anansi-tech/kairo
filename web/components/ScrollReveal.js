"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    let observer;
    let frameId;

    const init = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
    };

    frameId = window.requestAnimationFrame(init);
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, []);

  return null;
}
