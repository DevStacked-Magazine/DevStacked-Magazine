"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Logo from "@/public/logos/devstacked-horizontally.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-line bg-board"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-12 lg:px-20">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="DevStacked home">
            <Image src={Logo} alt="DevStacked" className="h-6 w-auto" priority />
          </Link>

          <div className="hidden lg:block">
            <Navigation />
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/project"
              className="hidden h-9 items-center rounded-full bg-ink px-4 text-sm font-semibold text-board transition-colors hover:bg-red-active hover:text-white md:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-3 w-4">
                <span
                  className={[
                    "absolute left-0 right-0 h-px bg-ink transition-all duration-300",
                    menuOpen ? "top-1.5 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 top-1.5 h-px bg-ink transition-opacity duration-300",
                    menuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 h-px bg-ink transition-all duration-300",
                    menuOpen ? "top-1.5 -rotate-45" : "top-3",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>

      <div className="h-16" aria-hidden />
    </>
  );
}
