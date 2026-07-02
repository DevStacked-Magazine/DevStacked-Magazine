"use client";

const items = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "Figma",
  "Postgres",
  "Stripe",
  "Vercel",
  "Node",
  "GraphQL",
  "Framer",
  "Vite",
];

export default function TrustedMarquee() {
  const row = [...items, ...items];

  return (
    <section
      aria-label="Stack and partners"
      className="relative border-y border-white/8 bg-background-elevated/40 py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20 mb-8 flex flex-wrap items-end justify-between gap-4">
        <p className="label-mark">Stack & partners</p>
        <p className="text-sm text-white/45 max-w-sm">
          Tools and partners we ship with. No logo wall, no endorsements, just the work.
        </p>
      </div>

      <div className="marquee-pause relative">
        <div className="marquee-track flex w-max items-center gap-16 pr-16 will-change-transform">
          {row.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-4 font-display text-3xl font-bold tracking-tight text-white/45 sm:text-5xl"
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-red-active" />
              {label}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </section>
  );
}
