"use client";

const services = [
  {
    title: "UI/UX Design",
    body: "We map user journeys, wireframe the flows, and design high-fidelity mockups. The build starts with the decisions already made.",
    deliverables: ["User journey", "Wireframes", "High-fidelity mockups"],
  },
  {
    title: "Web Development",
    body: "Websites and web apps built to a performance budget from the start. Every build ships accessible and ready for search.",
    deliverables: ["Next.js / React", "Performance budgets", "Accessibility & SEO"],
  },
  {
    title: "Mobile App Development",
    body: "Cross-platform mobile apps that behave like native ones. We handle everything from prototype to app store launch.",
    deliverables: ["React Native / iOS / Android", "Push & auth", "App store launch"],
  },
  {
    title: "Consulting",
    body: "Architecture reviews, technology strategy, and implementation guidance. Whether you are scaling a product or starting from scratch, we help you make the right call.",
    deliverables: ["Architecture review", "Stack & hiring", "Implementation guidance"],
  },
];

export default function ServiceListSection() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <h2 className="h-display text-[clamp(2.1rem,4.2vw,3.8rem)] text-ink">
          The practice,{" "}
          <span className="text-ink-dim">line by line.</span>
        </h2>

        <div className="mt-14">
          {services.map((s) => (
            <article key={s.title} className="spec-row px-1 py-8 sm:px-4 lg:px-6">
              <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[18rem_1fr] lg:items-baseline">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <div className="max-w-2xl">
                  <p className="text-sm leading-7 text-ink-dim">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="chip">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
