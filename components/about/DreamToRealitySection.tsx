"use client";

import type { LucideIcon } from "lucide-react";
import { Code2, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  strengths: string[];
  icon: LucideIcon;
  accent: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Laurent Maxhuni",
    role: "Full-stack developer",
    bio: "Laurent builds complete web products from interface to implementation, with a focus on clean UX, strong performance, and reliable end-to-end execution.",
    strengths: ["Frontend + backend", "Performance-focused builds", "Product-minded execution"],
    icon: Code2,
    accent: "End-to-end builds",
  },
  {
    id: 2,
    name: "Fatlum G\u00ebrxhaliu",
    role: "Full-stack developer",
    bio: "Fatlum builds full-stack web solutions with scalable structure, clean code, and dependable delivery across both the client and server side.",
    strengths: ["Frontend + backend", "Scalable architecture", "Clean technical delivery"],
    icon: Rocket,
    accent: "End-to-end builds",
  },
];

const teamPillars = [
  {
    title: "Design with intent",
    icon: Layers3,
  },
  {
    title: "Build for growth",
    icon: Rocket,
  },
];

export default function DreamToRealitySection() {
  return (
    <section className="mt-[5.5rem] max-[680px]:mt-[4.4rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              variants={variants.fadeInUp}
              className="text-xs font-semibold tracking-[0.24em] text-red-active uppercase"
            >
              About the team
            </motion.div>
            <motion.h2
              variants={variants.fadeInUp}
              className="mt-3 text-[clamp(2rem,3.8vw,3.4rem)] font-medium tracking-[0.01em]"
            >
              From an Idea to Your Digital Presence
            </motion.h2>
          </div>
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-[36rem] text-sm leading-7 text-white/72 sm:text-base"
          >
            Two full-stack developers building modern digital products from
            concept to launch, with the same focus on clean execution,
            performance, and long-term reliability.
          </motion.p>
        </div>

        <motion.div
          variants={variants.fadeInUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          {teamPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/72 backdrop-blur-md"
            >
              <pillar.icon className="h-4 w-4 text-red-active" />
              {pillar.title}
            </div>
          ))}
        </motion.div>

        <motion.h3
          variants={variants.fadeInUp}
          className="mt-[2.3rem] text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium tracking-[0.01em]"
        >
          Meet the Team
        </motion.h3>

        <motion.div
          variants={variants.staggerContainer}
          className="mt-[1.4rem] grid gap-[1.2rem] md:grid-cols-2"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.article
              variants={variants.fadeInUp}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/18 bg-[linear-gradient(160deg,rgba(255,255,255,0.11),rgba(255,255,255,0.03))] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              key={member.id}
            >
              <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-red-active/14 blur-[75px]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-red-active/35 bg-red-active/10 text-red-active">
                    <member.icon size={20} strokeWidth={2} />
                  </div>
                  <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-[0.68rem] font-semibold text-white/58 uppercase">
                    {member.accent}
                  </span>
                </div>

                <h4 className="mt-8 text-[1.7rem] font-semibold">{member.name}</h4>
                <p className="mt-2 text-sm font-medium text-red-active uppercase">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">
                  {member.bio}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {member.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/68"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
