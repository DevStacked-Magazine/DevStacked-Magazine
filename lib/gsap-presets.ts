import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "expo.out", duration: 1 });
}

export { gsap, ScrollTrigger };

export const ease = {
  elegant: "expo.out",
  smooth: "power3.out",
  snappy: "back.out(1.2)",
  linear: "none",
} as const;

export const dur = {
  fast: 0.25,
  medium: 0.6,
  slow: 1,
  epic: 1.4,
} as const;

export const mq = {
  isMobile: () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches,
  isReduced: () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

export function splitChars(node: HTMLElement | null) {
  if (!node) return [];
  const text = node.textContent ?? "";
  node.setAttribute("data-split", "true");
  node.textContent = "";
  return [...text].map((ch) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    span.textContent = ch === " " ? "\u00A0" : ch;
    node.appendChild(span);
    return span;
  });
}
