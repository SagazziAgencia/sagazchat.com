"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "li" | "ul";
  once?: boolean;
  from?: "bottom" | "left" | "right" | "scale";
}

function getHiddenTransform(from: "bottom" | "left" | "right" | "scale", isMobile: boolean): string {
  // On mobile, horizontal animations cause overflow — fall back to vertical
  if (isMobile && (from === "left" || from === "right")) {
    return "translateY(24px)";
  }
  switch (from) {
    case "bottom": return "translateY(24px)";
    case "left":   return "translateX(-24px)";
    case "right":  return "translateX(24px)";
    case "scale":  return "scale(0.95)";
  }
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  duration = 600,
  as: Tag = "div",
  once = true,
  from = "bottom",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0,0,0) scale(1)" : getHiddenTransform(from, isMobile),
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
