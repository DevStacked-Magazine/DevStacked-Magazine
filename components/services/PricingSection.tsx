"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";
import Button from "@/components/ui/Button";

export default function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 text-center shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-12 lg:p-16"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <motion.p
          variants={variants.fadeInUp}
          className="text-xs font-semibold tracking-[0.24em] text-red-active uppercase"
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={variants.fadeInUp}
          className="mt-4 text-3xl font-semibold text-white sm:text-4xl"
        >
          Custom Quotes for Every Project
        </motion.h2>
        <motion.p
          variants={variants.fadeInUp}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base"
        >
          Every project is unique. We offer fixed-price packages for clearly
          defined scopes and custom quotes for more complex builds. You always
          know what you&apos;re paying for and why.
        </motion.p>
        <motion.div variants={variants.fadeInUp} className="mt-8">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
