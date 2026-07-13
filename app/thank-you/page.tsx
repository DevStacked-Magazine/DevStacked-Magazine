"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 text-white">
      <div className="pointer-events-none absolute -inset-20">
        <div className="absolute -left-28 top-8 h-90 w-90 rounded-full bg-red-active/30 blur-[120px]" />
        <div className="absolute right-[8%] top-[20%] h-80 w-[320px] rounded-full bg-red-active/24 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-8%] h-100 w-100 rounded-full bg-red-active/26 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={variants.fadeInUp}>
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
              Thank You!
            </h1>
          </motion.div>

          <motion.p
            variants={variants.fadeInUp}
            className="text-lg text-white/80 max-w-[50ch] mx-auto"
          >
            We&apos;ve received your message and appreciate you reaching out.
            Our team will get back to you as soon as possible.
          </motion.p>

          <motion.p
            variants={variants.fadeInUp}
            className="text-base text-white/65"
          >
            In the meantime, feel free to check out our work or explore more
            about what we do.
          </motion.p>

          <motion.div
            variants={variants.fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-red-active text-white font-semibold transition-colors hover:bg-red-active-hover"
            >
              Back to Home
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-red-active text-red-active font-semibold transition-colors hover:bg-red-active/10"
            >
              Learn About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
