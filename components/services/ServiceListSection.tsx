"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const services = [
  {
    index: "01",
    title: "UI/UX Design",
    body: "Interfaces that feel intuitive and look sharp. We map user journeys, wireframe flows, and design high-fidelity mockups that communicate before a single line of code is written.",
    deliverables: ["User journey", "Wireframes", "High-fidelity mockups"],
  },
  {
    index: "02",
    title: "Web Development",
    body: "Performance-first, mobile-responsive websites and web apps built with modern frameworks. Every project ships fast, accessible, and SEO-ready out of the gate.",
    deliverables: ["Next.js / React", "Performance budgets", "Accessibility & SEO"],
  },
  {
    index: "03",
    title: "Mobile App Development",
    body: "Cross-platform mobile applications that deliver native-quality experiences. From prototype to launch, we handle the full mobile lifecycle.",
    deliverables: ["React Native / iOS / Android", "Push & auth", "App store launch"],
  },
  {
    index: "04",
    title: "Consulting",
    body: "Architecture reviews, technology strategy, and implementation guidance. Whether you are scaling a product or starting from scratch, we help you make the right call.",
    deliverables: ["Architecture review", "Stack & hiring", "Implementation guidance"],
  },
];

export default function ServiceListSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "expo.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card editorial-card group p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-meta text-red-active">
                  Service {s.index}
                </span>
                <span className="font-mono-meta text-white/35">Studio</span>
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                {s.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/65">
                {s.body}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-8 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-24 group-hover:bg-red-active" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
