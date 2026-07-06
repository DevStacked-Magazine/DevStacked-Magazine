"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const items = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/services", label: "Services", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
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
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 bg-background"
    >
      <div className="flex h-full flex-col justify-between px-8 pt-28 pb-12">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
          className="flex flex-col gap-3"
        >
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <motion.li
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                onClick={onClose}
                className="border-b border-white/10"
              >
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between py-5"
                >
                  <span className="font-display text-5xl tracking-tight">
                    <span className={active ? "text-red-active" : "text-white"}>{item.label}</span>
                  </span>
                  <span className="font-mono-meta text-white/40">{item.index}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <p className="font-mono-meta text-white/40">Reach us</p>
          <ul className="flex flex-col gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-2xl text-white/90 hover:text-red-active transition-colors"
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
