"use client";

import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.png";
import EmailInput from "@/components/ui/EmailInput";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function Page() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants.staggerContainer}
      className="w-full h-[380px] md:h-[400px] flex my-12 p-4 lg:p-10 relative border-2 border-white/20 bg-white/5 rounded-4xl"
    >
      <div className="flex flex-col items-center justify-evenly lg:items-start gap-7">
        <motion.h2 variants={variants.fadeInUp} className="relative text-4xl sm:text-5xl lg:text-6xl text-white w-auto text-wrap text-center lg:text-left z-10">
          Let&apos;s Build Something That Gets{" "}
          <span className="block text-red-active">You Noticed</span>
        </motion.h2>
        <motion.p variants={variants.fadeInUp} className="text-gray-300 text-sm sm:w-[60%] text-center text-wrap lg:text-left">
          Got a project in mind? Drop your email and we&apos;ll get back to you within 24 hours.
        </motion.p>
        <motion.div variants={variants.fadeInUp} className="w-full sm:3/4 flex justify-center lg:justify-start">
          <EmailInput className="w-full rounded-full" />
        </motion.div>
      </div>
      <motion.div variants={variants.scaleUp} className="hidden lg:block h-[550px] absolute right-0 bottom-7">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="h-full w-auto select-none"
        />
      </motion.div>
    </motion.div>
  );
}
