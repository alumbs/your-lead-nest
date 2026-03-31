import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Pricing — Plans That Pay for Themselves",
  description:
    "Simple, transparent pricing for lead recovery automation and AI consulting. $497/mo for Speed to Lead. $3,500/employee for AI transformation (max $15K). Winnipeg businesses only.",
};

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
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-accent font-semibold text-sm mb-4">Simple, Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Two Services. <span className="text-accent">Clear&nbsp;ROI.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you need to recover missed leads or transform how your team works with AI &mdash; the math works in your favour.
          </p>
        </div>
      </section>

      {/* Two-Tier Pricing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Speed to Lead */}
            <div className="relative flex flex-col rounded-2xl bg-white border-2 border-accent shadow-lg shadow-accent/10 p-8 md:p-10">
              <span className="absolute -top-4 left-6 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Recurring Revenue
              </span>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-800">Speed to Lead</h3>
                <p className="text-slate-500 mt-1">Instant lead recovery, 24/7</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">$497</span>
                <span className="text-slate-400 text-lg">/mo per location</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Instant SMS & email follow-up",
                  "AI-powered lead qualification",
                  "24/7 automated response",
                  "Custom follow-up sequences",
                  "All lead source integrations",
                  "Analytics & reporting dashboard",
                  "Dedicated onboarding support",
                  "30-day results guarantee",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600">
                    <CheckIcon /><span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 mb-6">
                <p className="text-sm font-semibold text-slate-700 mb-2">One-time setup fee</p>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="rounded-lg bg-white border border-slate-200 p-2">
                    <span className="block text-xs text-slate-500">1 person</span>
                    <span className="block font-bold text-slate-800">$997</span>
                  </div>
                  <div className="rounded-lg bg-accent-light border border-accent/20 p-2">
                    <span className="block text-xs text-accent">3 person</span>
                    <span className="block font-bold text-accent">$2,500</span>
                  </div>
                  <div className="rounded-lg bg-white border border-slate-200 p-2">
                    <span className="block text-xs text-slate-500">Larger</span>
                    <span className="block font-bold text-slate-800">Contact</span>
                  </div>
                </div>
              </div>

              <CTAButton href="/book-demo" variant="primary" className="w-full text-center">
                Start Recovering Lost Revenue
              </CTAButton>
            </div>

            {/* AI Consulting */}
            <div className="relative flex flex-col rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10">
              <span className="absolute -top-4 left-6 bg-slate-800 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                High-Impact Engagement
              </span>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-800">AI Consulting</h3>
                <p className="text-slate-500 mt-1">Full-day AI transformation for teams</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">$3,500</span>
                <span className="text-slate-400 text-lg">/employee</span>
                <p className="text-sm text-slate-500 mt-2">Capped at $15,000 per engagement</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Full-day hands-on AI workshop",
                  "Custom workflow analysis",
                  "AI tool selection & setup",
                  "Team-specific prompt libraries",
                  "30-day follow-up support",
                  "ROI measurement framework",
                  "Upsell path to fractional CAIO retainer",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600">
                    <CheckIcon /><span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-white border border-slate-200 p-5 mb-6">
                <p className="text-sm font-semibold text-slate-700 mb-2">Example engagements</p>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                    <span className="block text-xs text-slate-500">1&ndash;4 people</span>
                    <span className="block font-bold text-slate-800">$3,500/ea</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                    <span className="block text-xs text-slate-500">5+ people</span>
                    <span className="block font-bold text-slate-800">$15,000</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                    <span className="block text-xs text-slate-500">Max cap</span>
                    <span className="block font-bold text-accent">$15,000</span>
                  </div>
                </div>
              </div>

              <CTAButton href="/book-demo" variant="secondary" className="w-full text-center">
                Book a Discovery Call
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-16 text-center shadow-sm">
            <p className="uppercase tracking-widest text-accent font-semibold text-sm mb-4">Speed to Lead ROI</p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              If you recapture just{" "}<span className="text-slate-900 font-bold">1 extra job per week</span>{" "}at{" "}<span className="text-slate-900 font-bold">$500 average</span>, that&rsquo;s
            </p>
            <p className="text-5xl md:text-7xl font-extrabold text-accent mb-4">
              $26,000<span className="text-2xl md:text-3xl text-slate-400">/year</span>
            </p>
            <p className="text-lg text-slate-500">from leads you were <span className="text-orange font-semibold">already paying for</span>.</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-light mb-8">
              <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">30-Day Results Guarantee</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
              If Speed to Lead doesn&rsquo;t generate{" "}<span className="text-slate-900 font-bold">more conversations with your leads</span>{" "}within 30 days, we&rsquo;ll refund every penny.{" "}<span className="text-accent font-semibold">No questions asked.</span>
            </p>
            <p className="text-slate-400 text-sm">We track it, we prove it, and we stand behind it.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Stop Losing Revenue.{" "}<span className="text-accent">Start&nbsp;Today.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            No contracts. No risk. Just measurable results for your Winnipeg business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book a Free Consultation</CTAButton>
            <CTAButton href="/#roi-calculator" variant="secondary">Calculate Your ROI</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
