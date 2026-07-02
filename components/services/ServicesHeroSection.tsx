"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";
import Mascot from "@/public/images/home/heroImage.png";

export default function ServicesHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".services-eyebrow", { y: 20, opacity: 0, duration: 0.9 })
        .from(".services-line > span", {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          stagger: 0.06,
        }, "-=0.6")
        .from(".services-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".services-meta > *", { y: 14, opacity: 0, duration: 0.7, stagger: 0.05 }, "-=0.6")
        .from(".services-mascot", { scale: 0.92, opacity: 0, duration: 1.2 }, "-=1");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative pt-32 pb-20 overflow-hidden">
      <div aria-hidden className="ambient-canvas" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="services-eyebrow label-mark">What we do</p>
            <h1 className="mt-8 font-display text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              <span className="services-line block overflow-hidden">
                <span className="inline-block">Four services,</span>
              </span>
              <span className="services-line block overflow-hidden">
                <span className="inline-block">
                  <span className="text-white/55">one </span>
                  <span className="text-red-active">studio.</span>
                </span>
              </span>
            </h1>
            <p className="services-sub mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Design, build, ship, and hand over. Four practices that work as one
              team, sized to fit the project and priced to fit the scope.
            </p>
          </div>

          <div className="services-mascot lg:col-span-4 relative aspect-square w-full max-w-sm mx-auto lg:mx-0">
            <Image
              src={Mascot}
              alt="DevStacked mascot"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
