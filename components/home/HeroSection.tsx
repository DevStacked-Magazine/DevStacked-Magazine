"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Mascot from "@/public/images/home/heroImage.png";
import { gsap } from "@/lib/gsap-presets";
import { useGSAP } from "@gsap/react";

const specs = [
  { label: "Studio", value: "Two developers" },
  { label: "Reply", value: "One business day" },
  { label: "Handover", value: "Code you own" },
];

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // One authored moment: the interface settles into place.
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-line > span", {
        yPercent: 112,
        duration: 1.1,
        stagger: 0.07,
      })
        .from(
          ".hero-draw",
          { scaleX: 0, transformOrigin: "left center", duration: 1, stagger: 0.12 },
          "-=0.6"
        )
        .from(".hero-fade", { y: 14, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.7")
        .from(".hero-fig", { opacity: 0, y: 16, duration: 1 }, "-=0.7");

      gsap.to(".hero-fig", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sheet-grid relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-14 sm:px-12 lg:px-20 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="h-display text-[clamp(2.7rem,5.6vw,5.4rem)] text-ink">
              <span className="hero-line block overflow-hidden">
                <span className="block">Good work deserves</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="block">
                  a better <span className="text-red-active">front door.</span>
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
              DevStacked Magazine draws, builds, and ships fast websites for
              founders and small teams — then hands you the code. Practical tech
              content on the side, because that is how we think.
            </p>

            <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
              <Link href="/project" className="btn-ink">
                Start a project
              </Link>
              <Link href="/services" className="btn-line">
                See what we build
              </Link>
            </div>

            <div className="hero-draw mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="meta-label text-ink-faint">{s.label}</p>
                  <p className="mt-2 text-sm font-medium text-ink">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-4">
            <figure className="hero-fig relative w-full max-w-[340px]">
              <Image
                src={Mascot}
                alt="The DevStacked studio mascot"
                width={680}
                height={680}
                priority
                sizes="(max-width: 1024px) 60vw, 340px"
                className="h-auto w-full object-contain"
              />
            </figure>
          </div>
        </div>

      </div>

    </section>
  );
}
