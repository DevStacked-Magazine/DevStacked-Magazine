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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center pt-5 px-5 pointer-events-none"
      >
        <div
          className={[
            "pointer-events-auto flex items-center justify-between gap-6",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "w-full max-w-5xl rounded-full border border-white/10 bg-background/70 backdrop-blur-xl px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "w-full max-w-7xl rounded-full border border-transparent bg-transparent px-2 py-3",
          ].join(" ")}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="DevStacked home">
            <Image
              src={Logo}
              alt="DevStacked"
              className={scrolled ? "h-6 w-auto" : "h-7 w-auto transition-all duration-500"}
              priority
            />
          </Link>

          <div className="hidden lg:block">
            <Navigation />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-white text-background text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get In Touch
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 bg-white/5 text-white"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-3 w-4">
                <span
                  className={[
                    "absolute left-0 right-0 h-px bg-white transition-all duration-300",
                    menuOpen ? "top-1.5 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 top-1.5 h-px bg-white transition-opacity duration-300",
                    menuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 h-px bg-white transition-all duration-300",
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

      <div className="h-24" aria-hidden />
    </>
  );
}
