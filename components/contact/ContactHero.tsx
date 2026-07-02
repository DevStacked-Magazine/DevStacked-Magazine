"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

export default function ContactHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".contact-eyebrow", { y: 20, opacity: 0, duration: 0.9 })
        .from(".contact-line > span", {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          stagger: 0.06,
        }, "-=0.6")
        .from(".contact-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".contact-meta > *", { y: 14, opacity: 0, duration: 0.7, stagger: 0.05 }, "-=0.6");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative pt-32 pb-16 overflow-hidden">
      <div aria-hidden className="ambient-canvas" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="contact-eyebrow label-mark">Reach the studio</p>

            <h1 className="mt-8 font-display text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              <span className="contact-line block overflow-hidden">
                <span className="inline-block">Got an idea?</span>
              </span>
              <span className="contact-line block overflow-hidden">
                <span className="inline-block">
                  <span className="text-white/55">Let&apos;s </span>
                  <span className="text-red-active">make it real.</span>
                </span>
              </span>
            </h1>

            <p className="contact-sub mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Send a short note about your project. We read everything personally
              and respond within one business day with a clear next step.
            </p>
          </div>

          <div className="contact-meta lg:col-span-4 flex flex-col gap-6 border-t border-white/10 pt-6 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
            <div>
              <p className="font-mono-meta text-white/40">Studio hours</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                Mon - Fri <br /> <span className="text-white/50">9:00 - 18:00 CT</span>
              </p>
            </div>
            <div>
              <p className="font-mono-meta text-white/40">Response time</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                Under <span className="text-red-active">24h</span> <br /> <span className="text-white/50">on business days</span>
              </p>
            </div>
            <div>
              <p className="font-mono-meta text-white/40">Direct line</p>
              <a
                href="mailto:devstackedmagazine@gmail.com"
                className="mt-2 inline-block font-display text-xl text-white hover:text-red-active transition-colors"
              >
                devstackedmagazine@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
