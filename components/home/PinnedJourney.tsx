"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-presets";

const steps = [
  {
    index: "01",
    title: "Discovery",
    body: "Goals, audience, brand, content, constraints. We come out of it with a brief and a clear shape for the project.",
  },
  {
    index: "02",
    title: "Architecture & Design",
    body: "Information design, type, motion, and visuals are sketched against real content. Screens, not mood boards.",
  },
  {
    index: "03",
    title: "Build & Iterate",
    body: "We build in the open, on a real URL, on a real stack. Feedback rounds are short and the work is always reachable.",
  },
  {
    index: "04",
    title: "Ship & Handover",
    body: "Lighthouse, accessibility, search, analytics, ownership. A site your team can run, not a black box.",
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
          start: "top top+=80",
          end: "bottom bottom",
          pin: pinEl,
          pinSpacing: false,
          pinReparent: true,
          anticipatePin: 1,
        });

        const cards = gsap.utils.toArray<HTMLElement>(".journey-item");
        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: () =>
              gsap.to(card, { scale: 1.04, opacity: 1, duration: 0.6, ease: "expo.out", overwrite: "auto" }),
            onLeave: () =>
              gsap.to(card, { scale: 0.92, opacity: 0.45, duration: 0.6, ease: "expo.out", overwrite: "auto" }),
            onEnterBack: () =>
              gsap.to(card, { scale: 1.04, opacity: 1, duration: 0.6, ease: "expo.out", overwrite: "auto" }),
            onLeaveBack: () =>
              gsap.to(card, { scale: 0.92, opacity: 0.45, duration: 0.6, ease: "expo.out", overwrite: "auto" }),
          });

          gsap.set(card, { scale: 0.92, opacity: 0.45 });
        });

        ScrollTrigger.refresh();
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="journey-pin lg:col-span-5 flex flex-col justify-center">
            <p className="label-mark">Process</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
              The way we <br />
              <span className="text-red-active">actually work.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/55">
              Four steps. No mystery process, no twelve-week discovery phase. The
              brief is the brief and the build is the build.
            </p>
            <div className="mt-10 hidden lg:flex items-center gap-3 font-mono-meta text-white/40">
              <span className="h-px w-12 bg-white/20" />
              <span>Scroll to advance</span>
            </div>
          </div>

          <div ref={trackRef} className="lg:col-span-7 flex flex-col gap-8 lg:gap-12">
            {steps.map((s) => (
              <article
                key={s.index}
                className="journey-item editorial-card p-7 lg:p-9 will-change-transform"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-bold text-red-active leading-none sm:text-5xl">
                    {s.index}
                  </span>
                  <span className="font-mono-meta text-white/40">Step</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  {s.body}
                </p>
                <div className="mt-8 h-px w-12 bg-white/15" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
