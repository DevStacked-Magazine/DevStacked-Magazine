"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-background-elevated px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(199,14,26,0.18),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(199,14,26,0.10),transparent_55%)]"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mark">The next step</p>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,6.2vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
                Got a project? <br />
                <span className="text-red-active">Let&apos;s build it.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                Drop us a note. We read everything personally and respond within
                one business day with a clear next step.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-base font-medium text-background hover:bg-white/90 transition-colors"
              >
                Start a project
              </Link>
              <Link
                href="/project"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-base font-medium text-white/85 hover:border-white/40 hover:text-white transition-colors"
              >
                Or take the 2-min brief
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
