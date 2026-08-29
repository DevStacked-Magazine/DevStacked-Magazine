"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const facts = [
  { label: "Studio hours", value: "Mon–Fri, 9:00–18:00" },
  { label: "Response time", value: "Under 24h, business days" },
  { label: "Direct line", value: "devstackedmagazine@gmail.com", href: "mailto:devstackedmagazine@gmail.com" },
];

export default function ContactHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".contact-line > span", { yPercent: 112, duration: 1.1, stagger: 0.07 })
        .from(".contact-fade", { y: 14, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.6");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sheet-grid relative overflow-hidden pt-16 pb-14 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="h-display text-[clamp(2.5rem,5.4vw,5.2rem)] text-ink">
              <span className="contact-line block overflow-hidden">
                <span className="block">Got an idea?</span>
              </span>
              <span className="contact-line block overflow-hidden">
                <span className="block">
                  Let&apos;s <span className="text-red-active">make it real.</span>
                </span>
              </span>
            </h1>

            <p className="contact-fade mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
              Send a short note about your project. We read everything
              personally and respond within one business day with a clear next
              step.
            </p>
          </div>

          <div className="contact-fade lg:col-span-4">
            <dl className="border-t border-line">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="meta-label text-ink-faint">{f.label}</dt>
                  <dd className="text-sm font-medium text-ink sm:text-right sm:text-xs sm:uppercase sm:tracking-wide">
                    {f.href ? (
                      <a href={f.href} className="normal-case transition-colors hover:text-red-active">
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
