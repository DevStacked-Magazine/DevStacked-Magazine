"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Mascot from "@/public/images/home/heroImage.png";
import { gsap } from "@/lib/gsap-presets";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.9, delay: 0.1 })
        .from(".hero-line > span", {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          stagger: 0.05,
        }, "-=0.6")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.7")
        .from(".hero-meta > *", { y: 12, opacity: 0, duration: 0.7, stagger: 0.06 }, "-=0.6")
        .from(".hero-stage", { scale: 0.94, opacity: 0, duration: 1.3 }, "-=1.1")
        .from(".hero-mascot", { y: 24, opacity: 0, duration: 1.1, ease: "expo.out" }, "-=1");

      gsap.to(".hero-mascot", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-title-shift", {
        xPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative min-h-[calc(100vh-7rem)] overflow-hidden"
    >
      <div aria-hidden className="ambient-canvas" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="hero-eyebrow label-mark">DEVSTACKED</p>

            <h1 className="hero-title-shift mt-8 font-display text-[clamp(2.6rem,5.2vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              <span className="hero-line block overflow-hidden">
                <span className="inline-block">Websites That Work</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="inline-block text-white/90">
                  as Hard as <span className="text-red-active">You Do</span>
                </span>
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              We build fast, modern, and SEO-optimized websites that help your
              business get found — by search engines and AI alike.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/project"
                className="hero-cta inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-background hover:bg-white/90 transition-colors"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="hero-cta inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-sm font-medium text-white/85 hover:border-white/40 hover:text-white transition-colors"
              >
                See our work
                <svg
                  aria-hidden
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hero-meta mt-16 grid grid-cols-2 gap-6 max-w-md border-t border-white/8 pt-6 sm:grid-cols-4">
              <div>
                <p className="font-display text-2xl text-white">20+</p>
                <p className="mt-1 text-xs text-white/45">Projects Goal for Year One</p>
              </div>
              <div>
                <p className="font-display text-2xl text-white">98<span className="text-red-active">%</span></p>
                <p className="mt-1 text-xs text-white/45">Client Satisfaction Target</p>
              </div>
              <div>
                <p className="font-display text-2xl text-white">10+</p>
                <p className="mt-1 text-xs text-white/45">Technologies We Work With</p>
              </div>
              <div>
                <p className="font-display text-2xl text-white">24<span className="text-white/50">/7</span></p>
                <p className="mt-1 text-xs text-white/45">Support Available</p>
              </div>
            </div>
          </div>

          <div className="hero-stage relative h-150 w-150 items-center lg:h-130 lg:w-130 justify-center flex">
            <Image
              src={Mascot}
              alt="DevStacked mascot waving"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="hero-mascot object-contain p-2 will-change-transform"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35"
      >
        <span className="font-mono-meta">Scroll</span>
        <span className="block h-10 w-px bg-white/20 overflow-hidden">
          <span className="block h-1/2 w-full bg-white/60 animate-[hero-line_1.6s_ease-in-out_infinite]" />
        </span>
      </div>

      <style jsx>{`
        @keyframes hero-line {
          0%   { transform: translateY(-100%); }
          50%  { transform: translateY(0%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
