"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";
import Link from "next/link";

/**
 * The honest showcase. devstackedmagazine is a young studio: instead of invented
 * case studies, this sheet annotates the one project every visitor can
 * verify — the site they are reading.
 */

const plates = [
  {
    name: "This website",
    kind: "Marketing site",
    year: "2025",
    lines: [
      ["Platform", "Next.js, statically exported"],
      ["Interface", "Tailwind CSS v4, Radix primitives"],
      ["Motion", "GSAP + Framer Motion, on a budget"],
      ["Principle", "Every screen earns its place"],
    ],
  },
  {
    name: "The method",
    kind: "How a build runs",
    year: "Ongoing",
    lines: [
      ["Drawn first", "Screens against real content, not mood boards"],
      ["Built in the open", "A real URL from week one"],
      ["Measured", "Performance budget checked per release"],
      ["Handed over", "Repository, assets, documentation"],
    ],
  },
  {
    name: "Your project",
    kind: "The next project",
    year: "Unwritten",
    lines: [
      ["Input", "A short brief and a deadline"],
      ["Process", "The same discipline you are reading now"],
      ["Output", "A site you own outright"],
      ["First step", "The two-minute work order"],
    ],
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
      });
    },
    { scope: root }
  );

  const renderPlate = (p: (typeof plates)[number]) => (
    <article
      className="sheet flex h-[58vh] w-[80vw] max-w-[860px] shrink-0 flex-col justify-between p-8 lg:p-12"
      key={p.name}
    >
      <div className="flex items-start justify-between">
        <span className="meta-label text-ink-faint">{p.kind}</span>
      </div>

      <div>
        <h3 className="h-display text-4xl text-ink sm:text-5xl lg:text-6xl">{p.name}</h3>
        <dl className="mt-8 border-t border-line">
          {p.lines.map(([k, v]) => (
            <div
              key={k}
              className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <dt className="meta-label shrink-0 text-ink-faint">{k}</dt>
              <dd className="text-sm leading-6 text-ink-dim sm:text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="meta-label text-ink-faint">{p.year}</p>
    </article>
  );

  return (
    <section
      ref={root}
      className="sheet-grid relative overflow-hidden border-y border-line bg-board-raised"
    >
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="h-display text-[clamp(2.1rem,4.2vw,3.8rem)] text-ink lg:col-span-7">
            The proof you can check.
          </h2>
          <p className="text-base leading-7 text-ink-dim lg:col-span-5 lg:max-w-md">
            We are a young studio, so we will not invent clients. This collection
            shows the one project you can verify from where you sit: this site,
            and the way it was built.
          </p>
        </div>
      </div>

      <div className="hidden pb-24 lg:block">
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-6 pl-[max(5rem,calc((100vw-1280px)/2+5rem))] pr-20 will-change-transform"
        >
          {plates.map(renderPlate)}
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 pb-20 sm:px-12 lg:hidden">
        {plates.map((p) => (
          <div key={p.name}>{renderPlate(p)}</div>
        ))}
      </div>

      <div className="mx-auto hidden max-w-7xl px-5 pb-16 sm:px-12 lg:block lg:px-20">
        <Link href="/contact" className="btn-line">
          Ask us anything on this sheet
        </Link>
      </div>
    </section>
  );
}
