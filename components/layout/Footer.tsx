"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logos/devstacked-horizontally.svg";

const services = [
  { label: "UI/UX Design", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Consulting", href: "/services" },
];

const sheets = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/devstackedmagazine/" },
  { label: "TikTok", href: "https://www.tiktok.com/@devstackedmagazine" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="h-display text-[clamp(2.4rem,5.4vw,4.6rem)] text-ink">
              Have a project in mind?
              <br />
              <span className="text-red-active">Let&apos;s build it.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink-dim">
              Send the brief. We read everything personally and reply within one
              business day with a clear next step.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-ink">
                Start a project
              </Link>
              <a href="mailto:devstackedmagazine@gmail.com" className="btn-line">
                devstackedmagazine@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-5">
            <div>
              <p className="meta-label mb-5 text-ink-faint">Services</p>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-ink-dim transition-colors hover:text-ink">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta-label mb-5 text-ink-faint">Explore</p>
              <ul className="flex flex-col gap-3">
                {sheets.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-ink-dim transition-colors hover:text-ink">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Image src={Logo} alt="DevStacked" className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink-faint">
              DevStacked Magazine. Modern websites and practical tech content
              from a two-person studio.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="meta-label text-ink-faint">Follow</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-dim transition-colors hover:text-red-active"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevStacked Magazine. All rights reserved.</p>
          <p className="meta-label">Vushtrri, Kosova — Remote worldwide</p>
        </div>

      </div>
    </footer>
  );
}
