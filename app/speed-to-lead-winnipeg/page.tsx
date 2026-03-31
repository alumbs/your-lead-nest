import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Speed to Lead Winnipeg — Respond to Leads in Under 60 Seconds",
  description:
    "Winnipeg's #1 speed to lead automation service. Automatically follow up with every new lead in under 60 seconds via SMS, email, and phone. Built for local service businesses.",
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
            What Is Speed to Lead?
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              <strong className="text-slate-800">Speed to lead</strong> is the time between when a potential customer submits an inquiry
              and when your business responds. It&apos;s the single most important factor in converting leads into paying customers.
            </p>
            <p>
              According to a Harvard Business Review study, businesses that respond within 5 minutes are <strong className="text-slate-800">21 times more
              likely</strong> to qualify a lead compared to those that wait 30 minutes. After just 10 minutes, the odds of making
              contact drop by <strong className="text-slate-800">400%</strong>.
            </p>
            <p>
              For Winnipeg service businesses — HVAC contractors, dental clinics, real estate agents, plumbers, auto shops,
              and more — this means every minute counts. If a homeowner submits a quote request on your website at 8 PM
              on a Tuesday, and you don&apos;t respond until 9 AM Wednesday, they&apos;ve already booked with your competitor.
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
              { step: "1", title: "Connect", desc: "We plug into your website forms, Facebook Ads, Google Ads, and CRM. One-time 15-minute setup." },
              { step: "2", title: "Respond", desc: "Every new lead gets an instant SMS, email, and voicemail drop within 60 seconds. AI-written, human-sounding." },
              { step: "3", title: "Convert", desc: "The lead is warm and engaged. You step in and close the deal, or let the AI book the appointment for you." },
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
                  text: "Speed to lead is the time between when a potential customer submits an inquiry and when your business responds. Research shows that responding within 5 minutes makes you 21x more likely to qualify the lead.",
                },
              },
              {
                "@type": "Question",
                name: "How fast does Your Lead Nest respond to leads in Winnipeg?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your Lead Nest responds to every new lead in under 60 seconds, 24/7 — including nights, weekends, and holidays. Our average response time across Winnipeg businesses is under 45 seconds.",
                },
              },
              {
                "@type": "Question",
                name: "What Winnipeg industries benefit from speed to lead automation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any service-based business benefits, including HVAC, plumbing, dental clinics, real estate agents, roofing contractors, landscaping companies, auto services, legal firms, and fitness studios.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
