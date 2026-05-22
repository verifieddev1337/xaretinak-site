"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguagePicker from "@/components/LanguagePicker";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      {/* глобус: абсолютно позиционирован у правого края экрана */}
      <div className="absolute top-0 right-3 h-16 hidden md:flex items-center z-10">
        <LanguagePicker />
      </div>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/assets/logo-carrd-transparent.png"
            alt="Haretina Kukuri"
            width={48}
            height={48}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-serif text-sm tracking-brand text-cream uppercase group-hover:text-gold transition-colors">
            Haretina
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] tracking-label uppercase transition-colors ${
                  pathname === l.href ? "text-cream" : "text-muted hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[11px] tracking-label uppercase px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all"
            >
              Engage
            </Link>
          </nav>


          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-cream transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-cream transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-surface border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-label uppercase text-muted hover:text-cream transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[11px] tracking-label uppercase px-5 py-2.5 border border-gold text-gold text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Engage
          </Link>
        </div>
      )}
    </header>
  );
}
