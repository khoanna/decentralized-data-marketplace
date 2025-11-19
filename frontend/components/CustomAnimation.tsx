"use client";

import { useEffect } from "react";
import { createIcons, icons } from "lucide";

export default function CustomAnimations() {
  useEffect(() => {
    createIcons({ icons });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const heroVisual = document.querySelector(".animate-float") as HTMLElement | null;

    const handleMove = (e: MouseEvent) => {
      if (!heroVisual) return;

      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
}
