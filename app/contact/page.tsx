import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Haretina Kukuri",
  description: "Get in touch to discuss an engagement.",
};

export default function Contact() {
  return (
    <>

      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">Contact</p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6 max-w-xl">
          Start a<br />
          <em className="text-gold">Conversation.</em>
        </h1>
        <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
          Whether you have a specific mandate in mind or are exploring how strategic
          intelligence might apply to your situation — get in touch.
        </p>
      </section>

      <div className="border-t border-white/10" />


      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <p className="text-[11px] tracking-label uppercase text-muted mb-8">Send a message</p>
          <ContactForm />
        </div>


        <div className="space-y-12">
          <div>
            <p className="text-[11px] tracking-label uppercase text-muted mb-6">
              What to expect
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Response time",
                  body: "All enquiries are reviewed personally. Expect a response within 48 hours.",
                },
                {
                  title: "Initial call",
                  body: "Most engagements begin with a 30-minute call to understand your context and assess fit.",
                },
                {
                  title: "Confidentiality",
                  body: "All conversations are treated as confidential. NDAs are standard for substantive engagements.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-cream text-sm mb-1">{item.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <p className="text-[11px] tracking-label uppercase text-muted mb-4">
              Schedule a call
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Prefer to book a time directly? Use the calendar below.
            </p>
            <a
              href="https://calendly.com/xaretinak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-label uppercase px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all"
            >
              Book a Call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
