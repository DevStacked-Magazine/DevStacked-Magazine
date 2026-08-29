const groups = [
  {
    title: "Build",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Node"],
  },
  {
    title: "Design",
    items: ["Figma", "Motion", "Type systems"],
  },
  {
    title: "Ship",
    items: ["Vercel", "Postgres", "Stripe", "GraphQL", "Vite"],
  },
];

export default function TrustedMarquee() {
  return (
    <section aria-label="Stack" className="border-y border-line bg-board-raised">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={[
                "flex flex-col gap-4 py-8",
                i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-8" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <p className="meta-label text-ink-dim">{g.title}</p>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {g.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
