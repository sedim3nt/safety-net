"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Tier 1", href: "#tier-1" },
    { label: "Tier 2", href: "#tier-2" },
    { label: "Tier 3", href: "#tier-3" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1923]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-[family-name:var(--font-syne)] text-lg font-extrabold tracking-wider text-[#F5F0EB] hover:text-[#3182BD] transition-colors"
        >
          THE SAFETY NET
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#F5F0EB]/70 hover:text-[#3182BD] transition-colors font-[family-name:var(--font-syne)] font-bold"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F5F0EB]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0F1923]/95 backdrop-blur-lg border-b border-white/5 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[#F5F0EB]/70 hover:text-[#3182BD] transition-colors font-[family-name:var(--font-syne)] font-bold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
