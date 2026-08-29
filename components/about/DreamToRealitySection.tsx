"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap-presets";

const principles = [
  {
    title: "Design with intent",
    body: "Every screen earns its place. We design against real content, not placeholders, and we say no to decoration.",
  },
  {
    title: "Build for growth",
    body: "Structures that scale with traffic, content, and team. No rewrites at the end of year one.",
  },
  {
    title: "Own the outcome",
    body: "You receive code, content, and control. No platform lock-in, no mystery builder, no black box.",
  },
];

const team = [
  {
    name: "Laurent Maxhuni",
    role: "Full-stack developer",
    bio: "Laurent builds complete web products, from the interface down to the database. His main concern is that it works well and stays fast under real traffic.",
    portfolio: {
      label: "View portfolio",
      href: "https://laurentmaxhuni.vercel.app/",
    },
    tags: ["Frontend + backend", "Performance", "Product-minded"],
  },
  {
    name: "Fatlum G\u00ebrxhaliu",
    role: "Full-stack developer",
    bio: "Fatlum builds web apps with structure that can scale. He works across client and server and leaves behind a codebase the next developer can pick up.",
    portfolio: {
      label: "View work",
      href: "https://github.com/FatlumG",
    },
    tags: ["Frontend + backend", "Scalable architecture", "Clean delivery"],
  },
];

export default function DreamToRealitySection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".about-h2", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: ".about-h2", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <h2 className="about-h2 h-display max-w-3xl text-[clamp(2.1rem,4.2vw,3.8rem)] text-ink">
          Two developers, one standard:{" "}
          <span className="text-ink-dim">if it ships, it holds up.</span>
        </h2>

        {/* Principles as a ruled spec list */}
        <div className="mt-14">
          {principles.map((p) => (
            <article key={p.title} className="spec-row px-1 py-7 sm:px-4 lg:px-6">
              <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[14rem_1fr] lg:items-baseline">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-ink sm:text-2xl">
                  {p.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-ink-dim">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Personnel schedule */}
        <div className="mt-24">
          <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            The people on your project.
          </h3>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {team.map((m) => (
              <article key={m.name} className="sheet relative flex flex-col p-8 lg:p-10">
                <h4 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
                  {m.name}
                </h4>
                <p className="meta-label mt-3 text-ink-dim">{m.role}</p>
                <p className="mt-6 text-base leading-7 text-ink-dim">{m.bio}</p>
                <a
                  href={m.portfolio.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-red-active hover:bg-red-active hover:text-white"
                  aria-label={`${m.name}: ${m.portfolio.label}`}
                >
                  {m.portfolio.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                  {m.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
