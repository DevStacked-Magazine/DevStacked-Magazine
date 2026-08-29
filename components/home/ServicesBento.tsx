const rows = [
  {
    title: "Findable",
    titleNote: "SEO foundation",
    body: "Clear structure, metadata, and content hierarchy, so search engines and AI assistants can actually read what you do.",
  },
  {
    title: "Persuasive",
    titleNote: "Conversion-focused design",
    body: "Pages shaped around what visitors need to trust you, contact you, and take the next step. No decoration without a job.",
  },
  {
    title: "Fast",
    titleNote: "Performance that holds up",
    body: "Built to a performance budget from the first commit. Lean screens that stay fast as the site grows.",
  },
  {
    title: "Yours",
    titleNote: "Full ownership",
    body: "No lock-in, no mystery builder. You get the repository, the assets, and a site your team can run.",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="h-display text-[clamp(2.1rem,4.2vw,3.8rem)] text-ink lg:col-span-7">
            What every build here
            <br />
            <span className="text-ink-dim">already comes with.</span>
          </h2>
          <p className="text-base leading-7 text-ink-dim lg:col-span-5 lg:max-w-md">
            Not add-ons, not tiers — the baseline. Each line below is checked
            before a project ships.
          </p>
        </div>

        <div className="mt-14">
          {rows.map((row) => (
            <article key={row.title} className="spec-row px-1 py-8 sm:px-4 lg:px-6">
              <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[16rem_1fr] lg:items-baseline">
                <div className="lg:order-none">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                    {row.title}
                  </h3>
                  <p className="meta-label mt-2 text-ink-faint">{row.titleNote}</p>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-ink-dim">
                  {row.body}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
