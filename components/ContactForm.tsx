"use client";

import { useState, useRef } from "react";

const MAX = { name: 100, email: 254, subject: 200, message: 5000 } as const;

// очистка: HTML-теги, JS-URI, обработчики событий
function cleanText(s: string, max: number): string {
  return s
    .replace(/<[^>]*>/g, "")
    .replace(/javascript\s*:/gi, "")
    .replace(/data\s*:/gi, "")
    .replace(/on[a-z]+\s*=/gi, "")
    .trim()
    .slice(0, max);
}

// защита от инъекции в заголовки email
function cleanEmail(s: string): string {
  return s
    .replace(/[\r\n\t<>()[\]\\,;"]/g, "")
    .trim()
    .slice(0, MAX.email);
}

function isValidEmail(s: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(s);
}

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClass =
  "w-full bg-navy-surface border border-white/20 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const honeypot = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // проверка ловушки для ботов
    if (honeypot.current?.value) return;

    const fd = new FormData(e.currentTarget);
    const name    = cleanText(fd.get("name")    as string ?? "", MAX.name);
    const email   = cleanEmail(fd.get("email")  as string ?? "");
    const subject = cleanText(fd.get("subject") as string ?? "", MAX.subject);
    const message = cleanText(fd.get("message") as string ?? "", MAX.message);

    const errs: FieldErrors = {};
    if (!name)              errs.name    = "Name is required.";
    if (!isValidEmail(email)) errs.email = "A valid email address is required.";
    if (!message)           errs.message = "Message is required.";

    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          subject,
          message,
        }).toString(),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="w-10 h-px bg-gold mx-auto mb-6" />
        <p className="font-serif text-cream text-2xl mb-3">Message received.</p>
        <p className="text-muted text-sm">You&rsquo;ll hear back within 48 hours.</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* обязательно для Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />

      {/* ловушка для ботов */}
      <div hidden aria-hidden="true">
        <label>
          Leave this empty:
          <input
            ref={honeypot}
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label className="block text-[11px] tracking-label uppercase text-muted mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          maxLength={MAX.name}
          className={inputClass}
          placeholder="Your name"
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-[11px] text-red-400">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-[11px] tracking-label uppercase text-muted mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          maxLength={MAX.email}
          className={inputClass}
          placeholder="your@email.com"
        />
        {fieldErrors.email && (
          <p className="mt-1.5 text-[11px] text-red-400">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-[11px] tracking-label uppercase text-muted mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          maxLength={MAX.subject}
          className={inputClass}
          placeholder="Brief subject"
        />
      </div>

      <div>
        <label className="block text-[11px] tracking-label uppercase text-muted mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={MAX.message}
          className={`${inputClass} resize-none`}
          placeholder="Describe your situation or what you have in mind..."
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-[11px] text-red-400">{fieldErrors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-[11px] text-red-400">
          Something went wrong. Please try again or email{" "}
          <a href="mailto:xaretinak@gmail.com" className="underline">
            xaretinak@gmail.com
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full text-[11px] tracking-label uppercase px-8 py-4 bg-gold text-navy font-medium hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
