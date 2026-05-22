import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Haretina Kukuri",
  description:
    "Strategic consultant at the intersection of financial markets and geopolitical reality.",
};

export default function About() {
  return (
    <>

      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">About</p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight max-w-2xl">
          Haretina<br />
          <em className="text-gold">Kukuri</em>
        </h1>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 md:py-28 bg-navy-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-label uppercase text-muted mb-8">Background</p>
            <p className="text-cream text-lg md:text-xl leading-relaxed font-serif mb-6">
              Haretina Kukuri is a strategic consultant operating at the intersection of
              commercial brokerage, geopolitical intelligence, and cross-border market navigation.
            </p>
            <p className="text-muted text-base leading-relaxed mb-6">
              Her practice is built on the understanding that the most consequential business
              decisions are never made in a vacuum. Markets respond to politics. Politics responds
              to power. And power rarely announces itself in advance.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Working across emerging and frontier markets, Haretina advises clients who need
              more than analysis — they need actionable intelligence integrated directly into
              their decision cycle.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-gold pl-6">
              <blockquote className="font-serif text-xl text-cream italic leading-relaxed">
                &ldquo;The world does not operate on theory. It operates on access, timing,
                and the intelligence to read both.&rdquo;
              </blockquote>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-[11px] tracking-label uppercase text-muted mb-4">Specialisations</p>
              <ul className="space-y-3">
                {[
                  "Commercial Brokerage",
                  "Geopolitical Intelligence & Risk",
                  "Cross-Border Market Navigation",
                  "Business Consulting",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">Philosophy</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Access over analysis",
              body: "Information is commoditised. What moves decisions is proximity to the right people, at the right time, with the right read of the situation.",
            },
            {
              title: "Intelligence before markets",
              body: "The most valuable insight is the one that precedes the market. This practice is built for clients who want to be positioned before consensus forms.",
            },
            {
              title: "Structure over reaction",
              body: "Complex environments reward those with a framework. Strategic structure — not reactive improvisation — is what converts intelligence into commercial outcomes.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg text-cream mb-4">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 bg-navy-surface text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 max-w-lg mx-auto">
          Interested in working together?
        </h2>
        <p className="text-muted text-base max-w-sm mx-auto mb-10">
          Every engagement starts with a conversation.
        </p>
        <Link
          href="/contact"
          className="inline-block text-[11px] tracking-label uppercase px-8 py-4 bg-gold text-navy font-medium hover:bg-gold-light transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
