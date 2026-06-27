"use client";

import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-10 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="mx-auto max-w-7xl text-center"
      >
        <motion.p
          variants={variants.fadeInUp}
          className="text-xs font-semibold tracking-[0.24em] text-red-active uppercase"
        >
          Services
        </motion.p>
        <motion.h1
          variants={variants.fadeInUp}
          className="mt-4 text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
        >
          What We Build
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base"
        >
          From landing pages to full-stack applications, we craft digital
          experiences that are fast, accessible, and built to grow with you.
        </motion.p>
      </motion.div>
    </section>
  );
}
