"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/devstackedmagazine/" },
  { label: "TikTok", href: "https://www.tiktok.com/@devstackedmagazine" },
  { label: "Email", href: "mailto:devstackedmagazine@gmail.com" },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="sheet-grid fixed inset-0 z-40 bg-board"
    >
      <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24 sm:px-10">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
          }}
          className="flex flex-col"
        >
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <motion.li
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
                onClick={onClose}
                className="border-b border-line"
              >
                <Link href={item.href} className="group flex items-baseline py-5">
                  <span
                    className={[
                      "font-display text-4xl font-bold tracking-[-0.02em] transition-colors sm:text-5xl",
                      active ? "text-red-active" : "text-ink group-hover:text-red-active",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <p className="meta-label text-ink-faint">Reach the studio</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-base text-ink-dim transition-colors hover:text-red-active"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
