"use client";

import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

const channels = [
  {
    label: "Email",
    value: "devstackedmagazine@gmail.com",
    href: "mailto:devstackedmagazine@gmail.com",
  },
  {
    label: "Instagram",
    value: "@devstackedmagazine",
    href: "https://www.instagram.com/devstackedmagazine/",
  },
  {
    label: "TikTok",
    value: "@devstackedmagazine",
    href: "https://www.tiktok.com/@devstackedmagazine",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <Suspense fallback={<div className="pt-32 text-center text-ink">Loading contact…</div>}>
        <ContactHero />

        <section className="relative pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <article className="lg:col-span-5">
                <h2 className="h-display text-3xl text-ink sm:text-4xl">
                  Or reach us directly.
                </h2>
                <p className="mt-4 max-w-md text-base leading-7 text-ink-dim">
                  The form is the fastest path to a quote, but we are also on
                  the channels below. Pick whatever feels natural.
                </p>
                <ul className="mt-10 flex flex-col">
                  {channels.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-4 first:border-t"
                    >
                      <span className="meta-label text-ink-faint">{c.label}</span>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-ink transition-colors hover:text-red-active"
                      >
                        {c.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="lg:col-span-7">
                <div className="sheet relative p-6 sm:p-8 lg:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
}
