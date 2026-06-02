"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "What you learn", href: "#what-you-learn" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-kairo-cream/90 border-b border-kairo-black/10" : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center" aria-label="Kairo — home">
          <Image
            src="/brand/wordmark/wordmark-full-color-light.png"
            alt="Kairo"
            width={210}
            height={30}
            priority
            className="h-[26px] md:h-[30px] w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] tracking-[0.1em] uppercase text-kairo-black/85 hover:text-kairo-red transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-[12px] tracking-[0.1em] uppercase font-semibold px-5 py-2.5
                       bg-kairo-red text-kairo-cream rounded-sm
                       hover:bg-kairo-black transition-colors"
          >
            Get notified
          </a>
        </nav>

        <button
          className="md:hidden text-kairo-black text-xl p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-kairo-cream/98 backdrop-blur-xl px-6 py-6 space-y-4 border-t border-kairo-black/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm uppercase tracking-widest text-kairo-black/75"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="block text-center text-sm uppercase tracking-widest py-3 rounded-sm
                       bg-kairo-red text-kairo-cream"
          >
            Get notified
          </a>
        </div>
      )}
    </header>
  );
}
