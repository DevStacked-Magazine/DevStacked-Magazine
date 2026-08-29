"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="sheet-grid relative flex min-h-screen items-center justify-center px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sheet relative w-full max-w-2xl p-8 text-left sm:p-12"
      >
        <p className="stamp self-start">Received</p>
        <h1 className="h-display mt-6 text-4xl text-ink sm:text-6xl">
          Message logged.
          <br />
          <span className="text-ink-dim">We are on it.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-ink-dim">
          We got your message. Expect a reply within one business day — from
          one of the two people who will actually build the work.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/" className="btn-ink">
            Back home
          </Link>
          <Link href="/about" className="btn-line">
            Meet the studio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
