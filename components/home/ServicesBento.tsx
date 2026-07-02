"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";
import Mascot from "@/public/images/home/heroImage.png";

const features = [
  {
    title: "SEO Foundation",
    body: "Clear structure, metadata, and content hierarchy so your site is easier to discover and understand.",
    accent: "Findable",
    keyword: "Findable",
  },
  {
    title: "Conversion-Focused Design",
    body: "Pages are shaped around what visitors need to trust you, contact you, and take the next step.",
    accent: "Persuasive",
    keyword: "Persuasive",
  },
  {
    title: "Performance That Holds Up",
    body: "Fast-loading screens, lean implementation, and UX decisions that do not collapse under growth.",
    accent: "Fast",
    keyword: "Fast",
  },
  {
    title: "Fully Yours",
    body: "No lock-in, no black box handoff, and no mystery builder. You get a site your business can actually own.",
    accent: "Ownable",
    keyword: "Ownable",
  },
] as const;

const leadFeature = features[0];

export default function ServicesBento() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".bento-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "expo.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".bento-image img", {
        scale: 0.92,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".bento-image",
          start: "top 85%",
          end: "bottom 30%",
          scrub: 0.6,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative section-pad overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mark">Features</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[1] tracking-[-0.035em] text-white">
              What every serious build <br className="hidden sm:block" />
              <span className="text-white/55">should already come with.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-7 text-white/55 lg:max-w-md">
            These are the foundations we build into every project, so you can
            focus on what makes your business unique while still getting a site
            that can grow with you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-flow-dense"
          style={{ gridAutoRows: "minmax(0, 1fr)" }}
        >
          {/* Card 1: large image-led, col-span-7 row-span-2 */}
          <article
            className="bento-card editorial-card group md:col-span-7 md:row-span-2 relative overflow-hidden flex flex-col"
          >
            <div
              className="bento-image relative aspect-[16/10] w-full overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(199,14,26,0.18) 0%, rgba(199,14,26,0) 65%), var(--background-elevated)",
              }}
            >
              <Image
                src={Mascot}
                alt="DevStacked mascot waving"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="pointer-events-none absolute left-5 top-5 font-mono-meta text-white/65">
                Plate {leadFeature.accent}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-end p-7 lg:p-9">
              <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {leadFeature.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                {leadFeature.body}
              </p>
            </div>
          </article>

          {/* Card 2: text only, col-span-5 row-span-1 */}
          <article className="bento-card editorial-card group md:col-span-5 md:row-span-1 p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-red-active">Plate {features[1].accent}</span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {features[1].title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                {features[1].body}
              </p>
            </div>
            <div className="mt-6 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-24 group-hover:bg-red-active" />
          </article>

          {/* Card 3: text only, col-span-5 row-span-1 */}
          <article className="bento-card editorial-card group md:col-span-5 md:row-span-1 p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-red-active">Plate {features[2].accent}</span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {features[2].title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                {features[2].body}
              </p>
            </div>
            <div className="mt-6 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-24 group-hover:bg-red-active" />
          </article>
        </div>
      </div>
    </section>
  );
}
