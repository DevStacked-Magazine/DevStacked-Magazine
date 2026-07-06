"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const projects = [
  {
    name: "Brutalist Studio",
    kind: "Editorial site",
    year: "2025",
    note: "Type-first, motion-second, image-rarely.",
  },
  {
    name: "Lumen & Co.",
    kind: "E-commerce rebuild",
    year: "2025",
    note: "Cut checkout to three steps, lifted conversion 24%.",
  },
  {
    name: "Northgate Health",
    kind: "Patient portal",
    year: "2024",
    note: "A11y-first redesign, Lighthouse 99 across the board.",
  },
  {
    name: "Atlas Notes",
    kind: "Product launch",
    year: "2024",
    note: "Static-first, edge-cached, sub-200ms TTFB worldwide.",
  },
  {
    name: "Ironclad Fitness",
    kind: "Subscription funnel",
    year: "2024",
    note: "Five landing variants, one positioning. It held up.",
  },
];

export default function ShowcaseHorizontal() {
  const root = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = track.scrollWidth - window.innerWidth + 80;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".showcase-card").forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.94, opacity: 0.4 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "left 85%",
                end: "right 15%",
                scrub: 0.6,
              },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-background-elevated/40 border-y border-white/8"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20 pt-24 pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mark">Selected work</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
              Quiet interfaces, <br />
              <span className="text-white/55">measured outcomes.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-7 text-white/55 lg:max-w-md">
            A short, recent cross-section. The right place to see how we think about
            brand, motion, and the boring details that actually move conversion.
          </p>
        </div>
      </div>

      <div className="hidden lg:block pb-24">
        <div
          ref={trackRef}
          className="flex gap-6 pl-[max(5rem,calc((100vw-1280px)/2+5rem))] pr-20 will-change-transform"
        >
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="showcase-card relative flex h-[60vh] w-[70vw] max-w-[820px] shrink-0 flex-col justify-between rounded-[1.25rem] border border-white/10 bg-background-card p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-meta text-red-active">{p.kind}</span>
                <span className="font-mono-meta text-white/45">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                  {p.name}
                </h3>
                <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                  <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
                    {p.note}
                  </p>
                  <p className="font-mono-meta text-white/40">{p.year}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="lg:hidden pb-24">
        <div className="flex flex-col gap-5 px-5 sm:px-12">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="relative flex aspect-[4/3] w-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-background-card p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-meta text-red-active">{p.kind}</span>
                <span className="font-mono-meta text-white/45">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
