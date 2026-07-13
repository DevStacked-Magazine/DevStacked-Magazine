"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
      "We offer fixed-price packages for clearly defined projects and custom quotes for more complex builds. Every engagement starts with a discovery conversation so you always know what you are paying for and why.",
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
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="relative section-pad"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mark">Questions</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
              Frequently <br />
              <span className="text-white/55">asked.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-white/55">
              The questions we hear most often, with the short honest answers.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="multiple"
              defaultValue={["item-1"]}
              className="w-full border-t border-white/10"
            >
              {items.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
