"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const facts = [
  { label: "Founded", value: "2025" },
  { label: "Based", value: "Vushtrri, Kosova — remote worldwide" },
  { label: "Practice", value: "Two full-stack developers" },
];

export default function AgencyHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".about-line > span", {
        yPercent: 112,
        duration: 1.1,
        stagger: 0.07,
      })
        .from(".about-fade", { y: 14, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.6");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sheet-grid relative overflow-hidden pt-16 pb-16 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="h-display text-[clamp(2.5rem,5.4vw,5.2rem)] text-ink">
              <span className="about-line block overflow-hidden">
                <span className="block">We shape digital</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="block">products</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="block text-ink-dim">that work for a living.</span>
              </span>
            </h1>

            <p className="about-fade mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
              Two developers, one drawing board. We take products from first
              sketch to launch and stay responsible for how they run after.
            </p>
          </div>

          <div className="about-fade flex flex-col lg:col-span-4">
            <dl className="border-t border-line">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="meta-label text-ink-faint">{f.label}</dt>
                  <dd className="text-sm font-medium text-ink sm:text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
