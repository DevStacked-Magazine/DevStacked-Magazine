"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Yes. You get the repository and every asset the day the project wraps. Nothing sits behind a login only we hold.",
  },
  {
    value: "item-4",
    trigger: "Will my site be mobile-friendly?",
    content:
      "Yes, by default. We design for phones first, then adapt up to tablet and desktop, and we test on real devices before launch.",
  },
  {
    value: "item-5",
    trigger: "Do you provide ongoing maintenance and support?",
    content:
      "Yes. Retainers cover hosting, security updates, and small improvements month to month. You can also just call us when something breaks.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-display text-[clamp(2rem,3.6vw,3.4rem)] text-ink">
              Questions,
              <br />
              <span className="text-ink-dim">answered straight.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-ink-dim">
              The questions we hear most often, with the short honest answers.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="multiple"
              defaultValue={["item-1"]}
              className="w-full border-t border-line"
            >
              {items.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-line"
                >
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
