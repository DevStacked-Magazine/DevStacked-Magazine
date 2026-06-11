"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- Desktop Navigation --- */}
      <nav className={`hidden lg:flex items-center gap-8 ${className}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link text-md font-light transition-colors ${
              pathname === item.href
                ? "text-red-active nav-link-active"
                : "text-gray-300 hover:text-red-active"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* --- Mobile Hamburger Button --- */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)} // Close menu when link is clicked
            className={`text-2xl font-light ${
              pathname === item.href ? "text-red-active" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="!block sm:!hidden">
          <Button>Get In Touch</Button>
        </Link>
      </div>
    </>
  );
}