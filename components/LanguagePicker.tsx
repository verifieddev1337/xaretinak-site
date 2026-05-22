"use client";

import { useState } from "react";

const LANGUAGES = [
  { code: "ar", label: "العربية" },
  { code: "zh-CN", label: "中文" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
  { code: "tr", label: "Türkçe" },
];

export default function LanguagePicker() {
  const [open, setOpen] = useState(false);

  function translate(code: string) {
    const url = `https://translate.google.com/translate?sl=auto&tl=${code}&u=${encodeURIComponent(window.location.href)}`;
    // программный клик по ссылке — не блокируется браузером
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Translate page"
        title="Translate"
        className="text-muted hover:text-gold transition-colors p-1.5"
      >
        {/* Feather-style globe: circle + equator + longitude curve */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[90]" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-[100] bg-navy-surface border border-white/15 min-w-[148px] py-1 shadow-xl">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => translate(l.code)}
                className="w-full text-left px-4 py-2.5 text-[11px] text-muted hover:text-cream hover:bg-white/5 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
