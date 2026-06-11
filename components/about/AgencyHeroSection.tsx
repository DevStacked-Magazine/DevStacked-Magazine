"use client";

import Image from "next/image";
import redDots from "@/public/styles/red-dots.svg";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function AgencyHeroSection() {
  return (
    <section className="relative min-h-[380px] mt-2 grid place-items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="w-full grid place-items-center"
      >
        <motion.div variants={variants.scaleUp} className="absolute w-[50px] h-auto right-[72px] top-[32px] max-[980px]:right-[42px] max-[980px]:top-[22px] max-[680px]:w-[38px] max-[680px]:right-[24px] max-[680px]:top-[14px]">
          <Image src={redDots} alt="" aria-hidden className="w-full h-full" />
        </motion.div>
        <motion.span 
          variants={variants.fadeInDown}
          className="pointer-events-none absolute inset-x-0 text-[24vw] font-semibold leading-none text-white/6 sm:text-[16vw] lg:text-[15rem] left-1/2 -translate-x-1/2 top-[20%] z-0"
        >
          About
        </motion.span>
        <div className="relative text-center z-10">
          <motion.h1 variants={variants.fadeInUp} className="m-0 text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.06]">
            Two Developers.
            <br />
            One <span className="text-[#db1323] border-b border-[rgba(219,19,35,0.7)]">Mission.</span>
          </motion.h1>
        </div>
        <motion.div variants={variants.scaleUp} className="absolute w-[52px] h-auto left-[120px] bottom-[54px] max-[980px]:left-[60px] max-[980px]:bottom-[34px] max-[680px]:w-[40px] max-[680px]:left-[24px] max-[680px]:bottom-[20px]">
          <Image
            src={redDots}
            alt=""
            aria-hidden
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
