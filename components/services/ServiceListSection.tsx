"use client";

import { Code, Palette, Smartphone, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Interfaces that feel intuitive and look sharp. We map user journeys, wireframe flows, and design high-fidelity mockups that communicate before a single line of code is written.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description:
      "Performance-first, mobile-responsive websites and web apps built with modern frameworks. Every project ships fast, accessible, and SEO-ready out of the gate.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that deliver native-quality experiences. From prototype to launch, we handle the full mobile lifecycle.",
    icon: Smartphone,
  },
  {
    title: "Consulting",
    description:
      "Architecture reviews, technology strategy, and implementation guidance. Whether you are scaling a product or starting from scratch, we help you make the right call.",
    icon: Lightbulb,
  },
];

export default function ServiceListSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={variants.fadeInUp}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex h-13 w-13 items-center justify-center rounded-[1.1rem] border border-red-active/40 bg-red-active/10 text-red-active">
              <service.icon className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 max-w-[40ch] text-sm leading-7 text-white/68 sm:text-base">
              {service.description}
            </p>
            <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-active to-red-active/0 transition-all duration-300 group-hover:w-24" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
