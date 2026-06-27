"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

const items = [
  {
    value: "item-1",
    trigger: "What is the typical timeline for a project?",
    content:
      "Most landing pages and marketing sites take 2-4 weeks. Full-stack applications and SaaS platforms typically range from 6-12 weeks depending on scope and features.",
  },
  {
    value: "item-2",
    trigger: "How do you determine project pricing?",
    content:
      "We offer fixed-price packages for clearly defined projects and custom quotes for more complex builds. Every engagement starts with a discovery conversation so you always know what you're paying for and why.",
  },
  {
    value: "item-3",
    trigger: "Do I own the source code once the project is finished?",
    content:
      "Absolutely. Unlike website builder platforms that lock you in, you receive full ownership of the repository and all assets the moment the project is complete.",
  },
  {
    value: "item-4",
    trigger: "Will my site be mobile-friendly?",
    content:
      "Every site we build is mobile-first by default, meaning it looks and performs perfectly on everything from a smartphone to a widescreen monitor.",
  },
  {
    value: "item-5",
    trigger: "Do you provide ongoing maintenance and support?",
    content:
      "Yes. We offer maintenance retainers that cover hosting management, security updates, and minor improvements so you can stay focused on running your business.",
  },
];

export default function FaqSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants.staggerContainer}
      className="my-30"
    >
      <motion.div
        variants={variants.fadeInUp}
        className="mx-auto mb-8 max-w-5xl text-center"
      >
        <p className="text-xs font-semibold tracking-[0.24em] text-red-active uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <Accordion
        type="multiple"
        defaultValue={["item-1"]}
        className="mx-auto w-full max-w-5xl"
      >
        {items.map((item) => (
          <motion.div
            key={item.value}
            variants={variants.fadeInUp}
            className="border-b border-white/15 last:border-b-0"
          >
            <AccordionItem value={item.value} className="border-0">
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
}
