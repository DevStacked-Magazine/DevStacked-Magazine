"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const practices = ["UI/UX Design", "Web Development", "Mobile App Development", "Consulting"];

export default function ServicesHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".services-line > span", { yPercent: 112, duration: 1.1, stagger: 0.07 })
        .from(".services-fade", { y: 14, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.6");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sheet-grid relative overflow-hidden pt-16 pb-16 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="h-display text-[clamp(2.5rem,5.4vw,5.2rem)] text-ink">
              <span className="services-line block overflow-hidden">
                <span className="block">Four practices,</span>
              </span>
              <span className="services-line block overflow-hidden">
                <span className="block">
                  one <span className="text-red-active">standard.</span>
                </span>
              </span>
            </h1>

            <p className="services-fade mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
              Design, build, ship, hand over. Sized to fit the project and
              priced to fit the scope — fixed price for defined work, custom
              quotes for the rest.
            </p>
          </div>

          <div className="services-fade lg:col-span-4">
            <ul className="border-t border-line">
              {practices.map((p) => (
                <li
                  key={p}
                  className="border-b border-line py-4"
                >
                  <span className="text-sm font-medium text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
