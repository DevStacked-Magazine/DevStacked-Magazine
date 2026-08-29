"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-presets";

const steps = [
  {
    title: "Discovery",
    body: "Goals, audience, brand, content, constraints. We come out of it with a brief and a clear shape for the project.",
  },
  {
    title: "Drawing & design",
    body: "Information design, type, motion, and visuals sketched against real content. Screens, not mood boards.",
  },
  {
    title: "Build & iterate",
    body: "We build in the open, on a real URL, on a real stack. Feedback rounds are short and the work is always reachable.",
  },
  {
    title: "Ship & handover",
    body: "Performance, accessibility, search, analytics, ownership. A site your team can run, not a black box.",
  },
];

export default function PinnedJourney() {
  const root = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinEl = root.current?.querySelector<HTMLElement>(".journey-pin");
        if (!pinEl) return;

        ScrollTrigger.create({
          trigger: track,
          start: "top top+=64",
          end: "bottom bottom",
          pin: pinEl,
          pinSpacing: false,
          anticipatePin: 1,
        });

        const rows = gsap.utils.toArray<HTMLElement>(".journey-item");
        rows.forEach((row) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top 65%",
            end: "bottom 40%",
            onToggle: (self) => {
              gsap.to(row, {
                opacity: self.isActive ? 1 : 0.45,
                duration: 0.5,
                ease: "expo.out",
                overwrite: "auto",
              });
              gsap.to(row.querySelector(".journey-edge"), {
                scaleY: self.isActive ? 1 : 0,
                transformOrigin: "top",
                duration: 0.5,
                ease: "expo.out",
                overwrite: "auto",
              });
            },
          });
        });

        gsap.set(rows, { opacity: 0.45 });
        ScrollTrigger.refresh();
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="journey-pin flex flex-col justify-center lg:col-span-5">
            <h2 className="h-display text-[clamp(2rem,4vw,3.4rem)] text-ink">
              The way we
              <br />
              <span className="text-red-active">actually work.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink-dim">
              Four phases. No mystery process, no twelve-week discovery phase.
              The brief is the brief and the build is the build.
            </p>
          </div>

          <div ref={trackRef} className="flex flex-col lg:col-span-7">
            {steps.map((s) => (
              <article
                key={s.title}
                className="journey-item relative border-b border-line py-9 will-change-transform"
              >
                <span
                  aria-hidden
                  className="journey-edge absolute top-0 bottom-0 left-0 w-[2px] bg-red-active"
                  style={{ transform: "scaleY(0)" }}
                />
                <h3 className="pl-6 font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl pl-6 text-sm leading-7 text-ink-dim sm:text-base">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
