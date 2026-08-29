import Link from "next/link";

const tiers = [
  {
    name: "Landing",
    body: "A focused marketing site or product page. Two to four weeks.",
    points: ["Up to 5 pages", "Editorial design system", "Performance + SEO baseline"],
  },
  {
    name: "Site",
    body: "A real, multi-section site with a content model your team can run.",
    points: ["Up to 12 pages", "CMS-ready content model", "Search & analytics wired in"],
  },
  {
    name: "Product",
    body: "A web app with auth, data, and a real backend. Six to twelve weeks.",
    points: ["Auth + database", "Custom UI components", "Handover & documentation"],
  },
];

export default function PricingSection() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="h-display text-[clamp(2.1rem,4.2vw,3.8rem)] text-ink lg:col-span-7">
            Three shapes,
            <br />
            <span className="text-ink-dim">scoped to the work.</span>
          </h2>
          <p className="text-base leading-7 text-ink-dim lg:col-span-5 lg:max-w-md">
            Fixed price for clearly defined work, custom quotes for more complex
            builds. You always know what you are paying for and why.
          </p>
        </div>

        <div className="mt-14">
          {tiers.map((t) => (
            <article key={t.name} className="spec-row px-1 py-8 sm:px-4 lg:px-6">
              <div className="grid grid-cols-1 items-start gap-x-6 gap-y-4 lg:grid-cols-[14rem_1fr_12rem] lg:items-baseline">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                  {t.name}
                </h3>
                <div className="max-w-2xl">
                  <p className="text-sm leading-7 text-ink-dim">{t.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.points.map((p) => (
                      <li key={p} className="chip">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:justify-self-end">
                  <Link href="/contact" className="btn-line h-11 px-5 text-sm">
                    Get a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
