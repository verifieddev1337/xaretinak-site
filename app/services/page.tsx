import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Haretina Kukuri",
  description:
    "Commercial brokerage, geopolitical intelligence, and cross-border market navigation.",
};

const services = [
  {
    num: "01",
    title: "Commercial Brokerage",
    tagline: "Market access through relationships, structure, and timing.",
    description:
      "Specialising in cross-sector deal facilitation across emerging and frontier markets where the formal and informal intersect. This is not transactional brokerage — it is strategic intermediation, built on deep market relationships and a precise read of when and how to move.",
    deliverables: [
      "Deal identification and structuring",
      "Counterparty access and facilitation",
      "Cross-sector opportunity mapping",
      "Transaction advisory across jurisdictions",
    ],
  },
  {
    num: "02",
    title: "Geopolitical Intelligence",
    tagline: "Political risk advisory integrated into commercial strategy.",
    description:
      "Understanding how power moves, who holds leverage, and what changes before the consensus catches up. This service is designed for investors, executives, and institutions who need geopolitical context that is actionable — not academic. Coverage spans political transitions, regulatory shifts, and the informal dynamics that shape formal outcomes.",
    deliverables: [
      "Political risk briefings and scenario analysis",
      "Stakeholder and power-structure mapping",
      "Regulatory and policy environment assessment",
      "Ongoing intelligence retainer (advisory)",
    ],
  },
  {
    num: "03",
    title: "Cross-Border Navigation",
    tagline: "Structured entry into complex political economies.",
    description:
      "Market entry, regulatory orientation, and local ecosystem mapping for businesses and investors operating across jurisdictions. Moving into a new market requires more than a legal framework — it requires understanding the informal architecture: who matters, what is unsaid, and where the actual leverage sits.",
    deliverables: [
      "Market entry strategy and sequencing",
      "Regulatory orientation and compliance mapping",
      "Local partner identification and vetting",
      "Ecosystem and stakeholder navigation",
    ],
  },
  {
    num: "04",
    title: "Business Consulting",
    tagline: "Strategic clarity for leaders navigating uncertainty.",
    description:
      "Senior advisory for organisations at inflection points — whether entering new markets, managing complex stakeholder environments, or repositioning in response to political or economic shifts. Engagements are structured for impact, not process.",
    deliverables: [
      "Strategic reviews and repositioning",
      "Senior advisory and board-level counsel",
      "Stakeholder management strategy",
      "Organisational alignment for market complexity",
    ],
  },
];

export default function Services() {
  return (
    <>

      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">Services</p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight max-w-2xl mb-6">
          Four disciplines.<br />
          <em className="text-gold">One integrated mandate.</em>
        </h1>
        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
          Every engagement draws on all four practice areas. The boundaries between them
          exist for clarity, not compartmentalisation.
        </p>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="space-y-0 divide-y divide-white/10">
          {services.map((s) => (
            <div key={s.num} className="py-16 grid md:grid-cols-12 gap-10">
              <div className="md:col-span-1">
                <p className="text-[11px] tracking-label uppercase text-muted">{s.num}</p>
              </div>
              <div className="md:col-span-4">
                <h2 className="font-serif text-2xl md:text-3xl text-cream mb-3">{s.title}</h2>
                <p className="text-gold text-sm italic">{s.tagline}</p>
              </div>
              <div className="md:col-span-7">
                <p className="text-muted text-base leading-relaxed mb-8">{s.description}</p>
                <div>
                  <p className="text-[10px] tracking-label uppercase text-muted mb-4">
                    Typical deliverables
                  </p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-muted">
                        <span className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 md:py-28 bg-navy-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-8 h-px bg-gold" />
            <p className="text-[11px] tracking-label uppercase text-gold">Engagement</p>
            <span className="block w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8">
            How we work together
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mb-14">
            {[
              {
                step: "01",
                title: "Conversation",
                body: "Every engagement begins with an honest conversation about your situation, objectives, and where strategic intelligence can make the most difference.",
              },
              {
                step: "02",
                title: "Scope",
                body: "Engagements are structured around your specific context — project-based, retainer, or advisory. No standardised packages; every mandate is designed to fit.",
              },
              {
                step: "03",
                title: "Execution",
                body: "Work is done at the senior level throughout. You engage with Haretina directly, not with a team of analysts.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-white/10 p-6">
                <p className="text-[11px] tracking-label uppercase text-muted mb-4">{item.step}</p>
                <h3 className="font-serif text-lg text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block text-[11px] tracking-label uppercase px-10 py-4 bg-gold text-navy font-medium hover:bg-gold-light transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
