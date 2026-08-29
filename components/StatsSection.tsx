"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "People on every project. The same two, start to finish." },
  { value: 1, suffix: "", label: "Business day to a reply. We read everything personally." },
  { value: 100, suffix: "%", label: "Of the code handed over. Repository, assets, docs." },
  { value: 0, suffix: "", label: "Lock-in. No platform we hold over you." },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-board-raised py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <p className="font-display text-5xl font-bold leading-none tracking-[-0.02em] text-ink sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="max-w-[26ch] text-sm leading-6 text-ink-dim">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
