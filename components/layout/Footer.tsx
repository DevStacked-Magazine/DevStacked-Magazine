"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/public/logos/devstacked-horizontally.svg";

const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Consulting",
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/devstackedmagazine/" },
  { label: "TikTok", href: "https://www.tiktok.com/@devstackedmagazine" },
  { label: "Discord", href: "#" },
];

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.06 },
  }),
};

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={variants}
              custom={0}
              className="font-mono-meta text-white/40"
            >
              Get in touch
            </motion.p>
            <motion.h2
              variants={variants}
              custom={1}
              className="font-display mt-6 text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            >
              Have a project <br className="hidden sm:block" />
              in mind? <span className="text-red-active">Let&apos;s build it.</span>
            </motion.h2>
            <motion.div variants={variants} custom={2} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-background hover:bg-white/90 transition-colors"
              >
                Start a project
              </Link>
              <a
                href="mailto:devstackedmagazine@gmail.com"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-sm font-medium text-white/85 hover:border-white/40 hover:text-white transition-colors"
              >
                devstackedmagazine@gmail.com
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-10"
          >
            <motion.div variants={variants} custom={0}>
              <p className="font-mono-meta text-white/40 mb-5">Services</p>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="text-white/80 hover:text-white transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={variants} custom={1}>
              <p className="font-mono-meta text-white/40 mb-5">Company</p>
              <ul className="flex flex-col gap-3">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-white/80 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 border-t border-white/8 pt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={Logo} alt="DevStacked" className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              DevStacked Magazine. Modern websites, product experiences, and tech writing for teams that want their work to actually be found.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <p className="font-mono-meta text-white/40">Follow</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-white/70 hover:text-red-active transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/35">
          <p>© {new Date().getFullYear()} DevStacked Magazine. All rights reserved.</p>
          <p className="font-mono-meta">St. Charles, MO. Remote worldwide.</p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(8rem,28vw,24rem)] font-bold leading-none tracking-[-0.05em] text-white/[0.025]"
      >
        DEVSTACKED
      </div>
    </footer>
  );
}
