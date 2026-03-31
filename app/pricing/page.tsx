import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Pricing — Plans That Pay for Themselves",
  description:
    "Simple, transparent pricing for AI-powered lead response automation. Start at $297/mo and turn missed leads into booked jobs. 30-day results guarantee.",
};

const tiers = [
  {
    name: "Starter",
    price: 297,
    description: "Solo operators ready to stop losing leads",
    features: ["1 business location", "Up to 200 leads/mo", "Instant SMS & email follow-up", "AI-powered lead qualification", "Basic reporting dashboard", "Standard onboarding", "Email support"],
    cta: "Start Closing More Leads",
    highlighted: false,
  },
  {
    name: "Growth",
    price: 497,
    description: "Small teams scaling their lead conversion",
    features: ["Up to 3 locations", "Up to 500 leads/mo", "Instant SMS, email & phone follow-up", "AI-powered lead qualification", "Advanced analytics & reporting", "Priority onboarding", "Custom follow-up sequences", "Priority support"],
    cta: "Grow Your Business",
    highlighted: true,
  },
  {
    name: "Pro",
    price: 797,
    description: "Multi-location businesses demanding peak performance",
    features: ["Unlimited locations", "Unlimited leads", "Instant SMS, email & phone follow-up", "AI-powered lead qualification", "Full analytics suite with ROI tracking", "White-glove setup & migration", "Custom integrations", "Dedicated account manager", "Phone & Slack support"],
    cta: "Go Pro",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-accent font-semibold text-sm mb-4">Simple Math, Serious Results</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-8">
            The Fastest Way to{" "}<span className="text-accent">Pay&nbsp;for&nbsp;Itself</span>
          </h1>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              If you book just{" "}<span className="text-slate-900 font-bold">1 extra job per week</span>{" "}at{" "}<span className="text-slate-900 font-bold">$500 average</span>, that&rsquo;s
            </p>
            <p className="text-5xl md:text-7xl font-extrabold text-accent mb-4">
              $26,000<span className="text-2xl md:text-3xl text-slate-400">/year</span>
            </p>
            <p className="text-lg text-slate-500">from leads you were <span className="text-orange font-semibold">already paying for</span>.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Choose Your Plan</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Every plan includes our core AI speed-to-lead engine. No contracts. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-transform hover:-translate-y-1 ${
                  tier.highlighted
                    ? "bg-white border-2 border-accent shadow-lg shadow-accent/10 scale-[1.02] md:scale-105 z-10"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{tier.name}</h3>
                  <p className="text-slate-500 text-sm">{tier.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900">${tier.price}</span>
                  <span className="text-slate-400 text-lg">/mo</span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-600">
                      <CheckIcon /><span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href="/book-demo" variant={tier.highlighted ? "primary" : "secondary"} className="w-full">
                  {tier.cta}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-16 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-light mb-8">
              <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">30-Day Results Guarantee</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
              If Your Lead Nest doesn&rsquo;t generate{" "}<span className="text-slate-900 font-bold">more conversations with your leads</span>{" "}within 30 days, we&rsquo;ll refund every penny.{" "}<span className="text-accent font-semibold">No questions asked.</span>
            </p>
            <p className="text-slate-400 text-sm">We track it, we prove it, and we stand behind it.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Stop Losing Leads.{" "}<span className="text-accent">Start&nbsp;Today.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            Every minute you wait, another lead goes cold. Pick a plan and start responding in under 60 seconds — backed by our 30-day guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book Your Free Demo</CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">See How It Works</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
