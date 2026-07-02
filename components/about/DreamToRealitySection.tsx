"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const team = [
  {
    name: "Laurent Maxhuni",
    role: "Full-stack developer",
    bio: "Laurent builds complete web products from interface to implementation, with a focus on clean UX, strong performance, and reliable end-to-end execution.",
    tags: ["Frontend + backend", "Performance", "Product-minded"],
  },
  {
    name: "Fatlum G\u00ebrxhaliu",
    role: "Full-stack developer",
    bio: "Fatlum builds full-stack web solutions with scalable structure, clean code, and dependable delivery across both the client and server side.",
    tags: ["Frontend + backend", "Scalable architecture", "Clean delivery"],
  },
];

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

export default function DreamToRealitySection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".dtr-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mark">From idea to launch</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
              Two developers, <br />
              <span className="text-red-active">one mission.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-7 text-white/55 lg:max-w-md">
            We build modern digital products from concept to launch, with the
            same focus on clean execution, performance, and long-term reliability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="dtr-card editorial-card p-7 lg:p-8 flex flex-col"
            >
              <span className="font-mono-meta text-red-active">
                Principle {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                {p.body}
              </p>
              <div className="mt-8 h-px w-12 bg-white/15" />
            </article>
          ))}
        </div>

        <div className="mt-24">
          <p className="label-mark">The people</p>
          <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the studio.
          </h3>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <article
                key={m.name}
                className="dtr-card editorial-card p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-meta text-red-active">
                    {String(i + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
                  </span>
                  <span className="font-mono-meta text-white/35">Studio</span>
                </div>
                <h4 className="mt-8 font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                  {m.name}
                </h4>
                <p className="mt-2 font-mono-meta text-white/45">{m.role}</p>
                <p className="mt-6 text-base leading-7 text-white/65">
                  {m.bio}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {m.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                    >
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
