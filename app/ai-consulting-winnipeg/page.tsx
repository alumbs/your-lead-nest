import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import AIConsulting from "@/components/AIConsulting";

export const metadata: Metadata = {
  title:
    "AI Consulting Winnipeg | Hands-On AI Training for Your Team — Your Lead Nest",
  description:
    "Winnipeg AI consulting that gives your team real skills, not slide decks. Full-day sessions, custom to your workflow. $3,500/person. Book a discovery call.",
  keywords: [
    "AI consulting Winnipeg",
    "AI training Winnipeg",
    "AI transformation small business",
    "AI workshop Winnipeg",
    "business AI consulting Manitoba",
  ],
  alternates: {
    canonical: "https://yourleadnest.com/ai-consulting-winnipeg",
  },
};

export default function AIConsultingWinnipegPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            AI Consulting
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            AI Consulting for Winnipeg Businesses &mdash;{" "}
            <span className="text-accent">
              Your Team. With AI. Doing&nbsp;More.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            We offer AI consulting for Winnipeg businesses that want to go
            beyond automation and build real AI capability into their team. In a
            single full-day session, we assess your workflows, identify
            high-leverage AI opportunities, and train your people to actually use
            them. No hype. No vague roadmaps. You leave with a clear plan and
            hands-on skills.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">
              Book a Discovery Call
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary">
              See Pricing
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Interactive Pricing / ROI Section */}
      <AIConsulting />

      {/* What's Included */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            What a Full-Day AI Consulting Session Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Workflow Audit",
                desc: "We map your team's current processes and identify where AI can save the most time and money — specific to your industry and tools.",
              },
              {
                title: "Hands-On AI Training",
                desc: "Your team learns by doing. We work through real tasks from your business using AI tools they'll actually use after we leave.",
              },
              {
                title: "Custom Action Plan",
                desc: "You leave with a clear, prioritized plan for what to implement starting the following week — not a 50-page deck that sits in a drawer.",
              },
              {
                title: "Follow-Up Support",
                desc: "Implementation support is available after the session. We don't just train and disappear — we help you get results.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Is AI Consulting Right for Your Business?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            AI consulting is especially valuable for small Winnipeg businesses
            where every hour counts. One full-day session can recover hundreds of
            hours per year per employee.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Professional Services",
              "Real Estate",
              "Healthcare & Dental",
              "Construction & Trades",
              "Marketing Agencies",
              "Accounting & Legal",
            ].map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4"
              >
                <svg
                  className="w-5 h-5 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Ready to Work Smarter?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Not sure if this is right for you? Let&apos;s talk for 20 minutes.
            No pitch, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book a Discovery Call</CTAButton>
            <CTAButton href="/speed-to-lead-winnipeg" variant="secondary">
              Explore Speed to Lead
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is AI consulting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI consulting is a service where specialists assess your business workflows, identify where AI can save time or generate revenue, and train your staff to use those tools. Your Lead Nest delivers hands-on AI consulting for Winnipeg businesses — not theory, but practical implementation.",
                },
              },
              {
                "@type": "Question",
                name: "How much does AI consulting cost in Winnipeg?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your Lead Nest charges $3,500 per person for a full-day AI consulting session, capped at $15,000 per engagement. Custom pricing is available for teams of 5 or more.",
                },
              },
              {
                "@type": "Question",
                name: "What does a full-day AI consulting session include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The session includes a workflow audit, identification of high-leverage AI opportunities, hands-on training with tools your team will actually use, and a clear action plan to implement starting the following week.",
                },
              },
              {
                "@type": "Question",
                name: "Is AI consulting right for small businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. AI consulting is especially valuable for small Winnipeg businesses where every hour counts. One full-day session can recover hundreds of hours per year per employee.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer ongoing AI consulting support after the session?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Follow-up implementation support is available after the initial session.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
