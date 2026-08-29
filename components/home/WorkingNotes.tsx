"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Working notes — the studio's own voice, labeled as ours.
 * No fabricated testimonials: every quote below is written by
 * DevStacked, about how they work, and signed as such.
 */

const notes = [
  {
    text: "We annotate everything. If a screen can't explain why it looks the way it does, it goes back to the board.",
    context: "From a build review, week two",
  },
  {
    text: "Handover is the deliverable. A site you cannot run yourself is a subscription, not a product.",
    context: "From the studio handbook",
  },
  {
    text: "Fast is a design decision, not a hosting plan. Budgets are set before the first component exists.",
    context: "From a performance review",
  },
];

export default function WorkingNotes() {
  const [index, setIndex] = useState(0);
  const note = notes[index];

  const go = (i: number) => setIndex((i + notes.length) % notes.length);

  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="min-h-[220px] sm:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="h-display text-2xl leading-[1.2] text-ink sm:text-4xl">
                    &ldquo;{note.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-baseline gap-4">
                    <span className="text-sm text-ink-faint">{note.context}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-ink hover:text-board"
                aria-label="Previous note"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-ink hover:text-board"
                aria-label="Next note"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <div className="ml-4 flex items-center gap-1.5" aria-hidden="true">
                {notes.map((_, noteIndex) => (
                  <span
                    key={noteIndex}
                    className={`h-1.5 w-1.5 rounded-full ${noteIndex === index ? "bg-red-active" : "bg-ink-faint/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
            <h2 className="h-display text-3xl text-ink sm:text-4xl">
              Working notes,
              <br />
              <span className="text-ink-dim">signed by us.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-ink-dim">
              No invented client quotes here — we are a young studio and we
              will not fabricate praise. These are our own working notes: how
              we actually think, on the record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
