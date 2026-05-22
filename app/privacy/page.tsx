import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Haretina Kukuri",
  description: "How Haretina Kukuri handles your personal information.",
};

export default function Privacy() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">Legal</p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm">Last updated: May 2026</p>
      </section>

      <div className="border-t border-white/10" />

      <section className="px-6 py-16 max-w-3xl mx-auto space-y-10 text-sm text-muted leading-relaxed">

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">Who we are</h2>
          <p>
            This website is operated by Haretina Kukuri, a strategic consultant operating
            as a sole trader. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;Haretina Kukuri&rdquo; in this policy refer to her personally.
            You can contact her at{" "}
            <a href="mailto:xaretinak@gmail.com" className="text-gold hover:text-gold/70 transition-colors">
              xaretinak@gmail.com
            </a>.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">What data we collect</h2>
          <p>
            The only personal data we collect is what you voluntarily provide when you
            contact us via the form on this website. This includes your name, email
            address, and the content of your message.
          </p>
          <p className="mt-3">
            We do not use analytics tools, advertising trackers, or cookies. We do not
            operate a newsletter or mailing list. No personal data is collected passively
            from visitors to this site.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">How we use it</h2>
          <p>
            Information you send via the contact form is used solely to respond to your
            enquiry. It is received directly into a private email inbox and is not shared
            with, sold to, or processed by any third party.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">Legal basis</h2>
          <p>
            Processing is based on your consent — you choose to contact us — and on our
            legitimate interest in responding to business enquiries. This is in accordance
            with the UK GDPR and the Data Protection Act 2018.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">How long we keep it</h2>
          <p>
            Correspondence is retained only for as long as is necessary to handle your
            enquiry and any subsequent engagement. If no engagement proceeds, messages are
            deleted within 12 months.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul className="mt-3 space-y-2 ml-4">
            {[
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your data",
              "Object to or restrict processing",
              "Lodge a complaint with the ICO (ico.org.uk)",
            ].map((right) => (
              <li key={right} className="flex gap-3">
                <span className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                {right}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            To exercise any of these rights, contact{" "}
            <a href="mailto:xaretinak@gmail.com" className="text-gold hover:text-gold/70 transition-colors">
              xaretinak@gmail.com
            </a>.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">Third-party links</h2>
          <p>
            This site links to external platforms including YouTube, Substack, LinkedIn,
            Instagram, and X. We are not responsible for the privacy practices of those
            services. Please review their own privacy policies before engaging with them.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-cream text-xl mb-3">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of the page
            reflects when it was last revised.
          </p>
        </div>

      </section>
    </>
  );
}
