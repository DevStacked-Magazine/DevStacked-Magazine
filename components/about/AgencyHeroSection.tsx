"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";
import Mascot from "@/public/images/home/heroImage.png";

export default function AgencyHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".about-eyebrow", { y: 20, opacity: 0, duration: 0.9 })
        .from(".about-line > span", {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          stagger: 0.06,
        }, "-=0.6")
        .from(".about-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".about-pill-image", { scale: 0.4, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "-=0.8");
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative min-h-[80vh] overflow-hidden pt-20 pb-16"
    >
      <div aria-hidden className="ambient-canvas" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20 pt-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="about-eyebrow label-mark">The studio</p>

            <h1 className="mt-8 font-display text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              <span className="about-line block overflow-hidden">
                <span className="inline-block">We shape</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="inline-flex items-center gap-3 sm:gap-5">
                  <span className="inline-block">digital</span>
                  <span className="about-pill-image relative inline-block h-[0.85em] w-[0.85em] sm:h-[0.8em] sm:w-[0.8em] overflow-hidden rounded-full border border-white/20 align-middle">
                    <Image
                      src={Mascot}
                      alt="DevStacked mascot"
                      fill
                      priority
                      sizes="120px"
                      className="object-contain"
                    />
                  </span>
                  <span className="inline-block text-white/90">products</span>
                </span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="inline-block text-white/55">that work for a living.</span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Founded</p>
              <p className="mt-2 font-display text-3xl text-white">2025</p>
            </div>
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Based</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                Vushtrri, Kosova <br /> <span className="text-white/50">Remote worldwide</span>
              </p>
            </div>
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Practice</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                Two full-stack <br /> <span className="text-white/50">developers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
