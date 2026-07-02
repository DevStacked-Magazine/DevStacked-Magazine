"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import testimonialGIF from "@/public/icons/customer-review.gif";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We came in with a brief and a deadline. We left with a brand, a product surface, and a search footprint we actually own. The work is still paying for itself.",
    name: "Mara Holt",
    role: "Founder, Northgate Health",
  },
  {
    quote:
      "DevStacked took the messy early version of our product and turned it into something we are proud to send to investors. The handoff was the cleanest part.",
    name: "Eitan Reyes",
    role: "CEO, Atlas Notes",
  },
  {
    quote:
      "Performance, accessibility, brand, motion. They were not trade-offs, they were all just in there. That is rare.",
    name: "Priya Anand",
    role: "Design Lead, Lumen & Co.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (i: number) =>
    setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="label-mark">Voices</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1] tracking-[-0.035em] text-white">
              Said about us, not by us.
            </h2>

            <div className="mt-10 relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <svg
                    className="h-8 w-8 text-red-active"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M9.13 12.74H5.65c.05-2.4 1.34-4.5 4.62-6.4l-1.07-1.66C5.6 6.5 3.6 9.2 3.6 13.36v6.07h6.86v-6.7h-1.33zm10 0h-3.48c.05-2.4 1.34-4.5 4.62-6.4l-1.07-1.66c-3.6 1.82-5.6 4.52-5.6 8.68v6.07h6.86v-6.7h-1.33z" />
                  </svg>
                  <blockquote
                    className="font-display text-2xl leading-[1.25] tracking-[-0.02em] text-white sm:text-3xl"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                  />
                  <figcaption className="flex items-center gap-3 pt-2">
                    <span className="h-px w-8 bg-white/30" />
                    <span className="text-sm text-white/85">{t.name}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-sm text-white/50">{t.role}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <span className="ml-4 font-mono-meta text-white/40">
                {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:flex relative justify-center items-center size-120 hidden ml-12">
            <Image src={testimonialGIF} alt="Customer review" className="inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
