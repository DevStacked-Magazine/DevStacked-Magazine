"use client";

import { Globe, LayoutTemplate, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

const features = [
  {
    title: "SEO Foundation",
    description:
      "Clear structure, metadata, and content hierarchy so your site is easier to discover and understand.",
    icon: Search,
    accent: "Findable",
  },
  {
    title: "Conversion-Focused Design",
    description:
      "Pages are shaped around what visitors need to trust you, contact you, and take the next step.",
    icon: LayoutTemplate,
    accent: "Persuasive",
  },
  {
    title: "Performance That Holds Up",
    description:
      "Fast-loading screens, lean implementation, and UX decisions that do not collapse under growth.",
    icon: Globe,
    accent: "Fast",
  },
  {
    title: "Fully Yours",
    description:
      "No lock-in, no black box handoff, and no mystery builder. You get a site your business can actually own.",
    icon: ShieldCheck,
    accent: "Ownable",
  },
];

export default function OurProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <motion.div variants={variants.fadeInUp} className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.24em] text-red-active uppercase">
              Features
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              What every serious build should already come with.
            </h2>
          </motion.div>
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-xl text-sm leading-7 text-white/68 sm:text-base"
          >
            These are the foundations we build into every project, so you can focus on what makes your business unique while still getting a site that can grow with you.
          </motion.p>
        </div>

        <motion.div
          variants={variants.staggerContainer}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={variants.fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-[1.1rem] border border-red-active/40 bg-red-active/10 text-red-active">
                  <feature.icon className="h-5.5 w-5.5" />
                </div>
                <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-[0.7rem] font-semibold text-white/54 uppercase">
                  {feature.accent}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-sm leading-7 text-white/68 sm:text-base">
                {feature.description}
              </p>
              <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-active to-red-active/0 transition-all duration-300 group-hover:w-24" />
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
