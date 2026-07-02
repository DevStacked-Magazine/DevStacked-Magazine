"use client";

import Link from "next/link";

const tiers = [
  {
    index: "01",
    name: "Landing",
    body: "A focused marketing site or product page. Two to four weeks.",
    points: ["Up to 5 pages", "Editorial design system", "Performance + SEO baseline"],
  },
  {
    index: "02",
    name: "Site",
    body: "A real, multi-section site with a content model your team can run.",
    points: ["Up to 12 pages", "CMS-ready content model", "Search & analytics wired in"],
  },
  {
    index: "03",
    name: "Product",
    body: "A web app with auth, data, and a real backend. Six to twelve weeks.",
    points: ["Auth + database", "Custom UI components", "Handover & documentation"],
  },
];

export default function PricingSection() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mark">Pricing</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1] tracking-[-0.035em] text-white">
              Three shapes, <br />
              <span className="text-white/55">scoped to the work.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-7 text-white/55 lg:max-w-md">
            Fixed-price for clearly defined work, custom quotes for more complex
            builds. You always know what you are paying for and why.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className="editorial-card group flex flex-col p-7 lg:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-meta text-red-active">Tier {t.index}</span>
                <span className="font-mono-meta text-white/35">Engagement</span>
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-white">
                {t.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                {t.body}
              </p>
              <ul className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-active" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background hover:bg-white/90 transition-colors"
                >
                  Get a quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
