import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Speed to Lead Winnipeg | Automated Lead Response — Your Lead Nest",
  description:
    "Most Winnipeg businesses lose leads in the first 5 minutes. Your Lead Nest responds in under 60 seconds — 24/7. Setup this week. No contracts.",
  keywords: [
    "speed to lead Winnipeg",
    "lead response time Winnipeg",
    "fastest lead follow up Winnipeg",
    "automated lead response Manitoba",
    "lead automation Winnipeg small business",
    "missed call text back Winnipeg",
  ],
  alternates: {
    canonical: "https://yourleadnest.com/speed-to-lead-winnipeg",
  },
};

export default function SpeedToLeadWinnipegPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Speed to Lead in Winnipeg
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Winnipeg Businesses: Respond to Every Lead in{" "}
            <span className="text-accent">Under 60 Seconds</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Research shows that <strong className="text-slate-900">78% of customers buy from the first business to respond</strong>.
            Most Winnipeg businesses take over 5 hours. Your Lead Nest responds in under a minute — automatically,
            24/7, even during Winnipeg&apos;s busiest summer season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">Book Your Free Demo</CTAButton>
            <CTAButton href="/results" variant="secondary">See Winnipeg Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* What is Speed to Lead */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
            Speed to Lead for Winnipeg Businesses &mdash; Every Lead. Responded To. Every Time.
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Speed to lead is the single biggest factor in closing sales &mdash; and most Winnipeg businesses are failing at it.
              We set up an automated response system that engages your leads in under 60 seconds &mdash; 24 hours a day,
              7 days a week.
            </p>
            <p>
              When a lead calls and you can&apos;t answer, <strong className="text-slate-800">missed call text back</strong> fires
              instantly so you never lose the conversation. No missed calls. No lost weekends.
              No &ldquo;I&apos;ll follow up Monday.&rdquo;
            </p>
            <p>
              Your leads get a real, professional response immediately. You get a qualified conversation waiting when you&apos;re ready.
              For Winnipeg service businesses &mdash; HVAC contractors, dental clinics, real estate agents, plumbers, auto shops,
              and more &mdash; this means every minute counts.
            </p>
          </div>
        </div>
      </section>

      {/* Why Winnipeg Businesses Need This */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Why Winnipeg Businesses Need Speed to Lead Automation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Short Busy Season",
                desc: "Winnipeg's peak season for many service businesses runs May through September. Every lead during this window is worth significantly more. Missing one could mean thousands in lost revenue during the months that matter most.",
              },
              {
                title: "After-Hours Inquiries",
                desc: "Many Winnipeg customers search for services in the evening or on weekends. Without automation, these leads sit unanswered overnight. Your Lead Nest responds instantly, 24/7 — including holidays and Winnipeg's long winter evenings.",
              },
              {
                title: "Local Competition Is Growing",
                desc: "Competitors like DigiBenders, AlphaPixels, and Social Traffic are actively targeting Winnipeg businesses with automation services. Businesses that don't automate their lead response will fall behind.",
              },
              {
                title: "Ad Spend ROI",
                desc: "If you're running Facebook or Google Ads in the Winnipeg market, slow follow-up is burning your ad budget. Instant response turns more clicks into conversations and more conversations into booked jobs.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            How Your Lead Nest Delivers Speed to Lead in Winnipeg
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-14">
            We connect to your existing lead sources and respond instantly — no new tools to learn, no manual work.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              { step: "1", title: "Connect", desc: "We plug into your website forms, Facebook Ads, Google Ads, and CRM. One-time setup — live this week." },
              { step: "2", title: "Respond", desc: "Every new lead gets instant missed call text back within 60 seconds. Automated follow-up sequences run on your behalf." },
              { step: "3", title: "Convert", desc: "The lead is warm and engaged. You step in and close the deal, or let appointment booking happen without the back-and-forth." },
            ].map((item) => (
              <div key={item.step} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="bg-accent-light py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">50+</p>
              <p className="text-slate-700 font-medium">Winnipeg businesses served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">&lt;45s</p>
              <p className="text-slate-700 font-medium">Average response time</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">3.2x</p>
              <p className="text-slate-700 font-medium">Average conversion lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Industries We Serve in Winnipeg
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HVAC & Plumbing",
              "Dental & Healthcare",
              "Real Estate",
              "Roofing & Exteriors",
              "Landscaping",
              "Auto Services",
              "Legal Services",
              "Fitness & Wellness",
              "Home Cleaning",
            ].map((industry) => (
              <div key={industry} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Ready to Be the Fastest Responder in Winnipeg?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a free 15-minute demo and see how Your Lead Nest can transform your lead follow-up — starting today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book Your Free Demo</CTAButton>
            <CTAButton href="/pricing" variant="secondary">See Pricing</CTAButton>
          </div>
          <p className="text-slate-400 text-sm mt-6">No contracts. 30-day guarantee. Cancel anytime.</p>
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
                name: "What is speed to lead?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Speed to lead is how fast a business responds to a new inquiry. Research shows that leads contacted within 5 minutes are 100x more likely to convert than leads contacted after 30 minutes. For Winnipeg businesses, speed to lead is often the difference between booking a job and losing it to a faster competitor.",
                },
              },
              {
                "@type": "Question",
                name: "What is missed call text back?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Missed call text back is an automated system that sends a text message to any caller you miss — instantly. Instead of a missed call going to voicemail and going cold, the caller receives a message within seconds and stays in the conversation.",
                },
              },
              {
                "@type": "Question",
                name: "How fast does Your Lead Nest respond to leads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your Lead Nest responds to inbound leads in under 60 seconds, 24 hours a day, 7 days a week.",
                },
              },
              {
                "@type": "Question",
                name: "How much does speed to lead automation cost in Winnipeg?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Speed to Lead starts at $497/month per location, with a one-time setup fee of $997 for a 1-person team or $2,500 for up to 3 people.",
                },
              },
              {
                "@type": "Question",
                name: "Does speed to lead automation work for all types of businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Speed to lead works for any Winnipeg business that receives inbound inquiries — trades, real estate, home services, professional services, and more.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
