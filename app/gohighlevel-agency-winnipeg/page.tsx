import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "GoHighLevel Agency Winnipeg | Your Lead Nest",
  description:
    "Your Lead Nest is Winnipeg's GoHighLevel agency. We set up automation workflows, CRM pipelines, and funnels so local businesses capture and convert more leads — fast.",
  keywords: [
    "GoHighLevel agency Winnipeg",
    "GoHighLevel Winnipeg",
    "GHL agency Winnipeg",
    "GoHighLevel setup Winnipeg",
    "GoHighLevel automation Winnipeg",
    "CRM agency Winnipeg",
    "marketing automation Winnipeg",
  ],
  alternates: {
    canonical: "https://yourleadnest.com/gohighlevel-agency-winnipeg",
  },
};

const faqItems = [
  {
    question: "What is GoHighLevel?",
    answer:
      "GoHighLevel (GHL) is an all-in-one sales and marketing platform that combines CRM, email and SMS automation, appointment scheduling, pipeline management, reputation management, and funnel building into a single tool. It replaces the need for Mailchimp, Calendly, HubSpot, and other separate software.",
  },
  {
    question: "How much does GoHighLevel cost?",
    answer:
      "GoHighLevel plans start at $97/month for the Starter plan and $297/month for the Unlimited plan. As your agency, we handle the setup, configuration, and ongoing management so you get maximum value from the platform without the learning curve.",
  },
  {
    question: "Do I need an agency or can I DIY GoHighLevel?",
    answer:
      "You can DIY, but most business owners find the setup takes 40-80+ hours. GoHighLevel has a steep learning curve with hundreds of features. An agency like Your Lead Nest handles everything — setup, automation building, testing, and maintenance — so you can focus on running your business instead of learning software.",
  },
  {
    question: "What businesses is GoHighLevel best for in Winnipeg?",
    answer:
      "GoHighLevel works best for service-based businesses that rely on leads and appointments: HVAC companies, plumbers, electricians, cleaners, landscapers, dental offices, salons, real estate agents, and other local trades and professionals. If you get leads by phone, form, or chat, GHL can automate your follow-up.",
  },
];

export default function GoHighLevelAgencyWinnipegPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            GoHighLevel Agency in Winnipeg
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            GoHighLevel Agency in Winnipeg —{" "}
            <span className="text-accent">Setup, Automation &amp; Support</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Stop losing leads to slow follow-up. Your Lead Nest is Winnipeg&apos;s
            dedicated GoHighLevel agency — we build the automations, CRM pipelines,
            and funnels that turn inquiries into booked jobs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">
              Book a Free GHL Audit
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What We Do With GoHighLevel */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            What We Do With GoHighLevel
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Automation Workflows",
                desc: "Instant lead follow-up via SMS, email, and voicemail drops. When a new lead comes in, your automation fires within 60 seconds — no manual work required.",
              },
              {
                title: "CRM Setup & Pipelines",
                desc: "Custom sales pipelines built around your workflow. Track every lead from first inquiry to closed deal, with automated stage transitions and reminders.",
              },
              {
                title: "Funnel & Landing Pages",
                desc: "High-converting landing pages and funnels designed for Winnipeg service businesses. Capture leads with forms, calendars, and chat widgets — all inside GHL.",
              },
              {
                title: "Appointment Booking",
                desc: "Built-in calendar scheduling that syncs with your availability. Leads book directly — no back-and-forth needed. Automated reminders reduce no-shows.",
              },
              {
                title: "Reputation Management",
                desc: "Automated Google review requests sent after every completed job. Build your online reputation and dominate Winnipeg local search results.",
              },
              {
                title: "Reporting & Analytics",
                desc: "See exactly where your leads come from, your response times, conversion rates, and ROI. Data-driven decisions, not guesswork.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Winnipeg Businesses Choose GoHighLevel */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
            Why Winnipeg Businesses Choose GoHighLevel
          </h2>
          <div className="space-y-6">
            {[
              {
                stat: "78%",
                title: "of customers buy from the first business to respond",
                desc: "Speed to lead is everything. GoHighLevel automates your response so you're first — every time, 24/7, even at 2 AM.",
              },
              {
                stat: "62%",
                title: "of small businesses miss calls during business hours",
                desc: "Missed calls are missed revenue. GHL's missed call text back fires an automatic SMS within seconds, keeping the conversation alive.",
              },
              {
                stat: "3+ hrs",
                title: "is the average response time for Winnipeg service businesses",
                desc: "By the time most businesses reply, the lead has already called a competitor. GHL cuts your response time to under 60 seconds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 flex gap-6 items-start"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-accent shrink-0">
                  {item.stat}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Audit",
                desc: "We review your current lead flow, response times, and tools. We identify exactly where leads are falling through the cracks and what automation will have the biggest impact.",
              },
              {
                step: "2",
                title: "Build",
                desc: "We set up your GoHighLevel account from scratch — CRM pipelines, automation workflows, funnels, calendar booking, and integrations with your existing tools. Everything is customized to your business.",
              },
              {
                step: "3",
                title: "Automate",
                desc: "We launch your automations, monitor performance, and continuously optimize. You get weekly reports showing response times, lead conversion, and revenue impact.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Who We Work With
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            We specialize in Winnipeg service businesses that rely on leads,
            calls, and appointments to grow.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HVAC Companies",
              "Plumbers",
              "Electricians",
              "Cleaners",
              "Landscapers",
              "Dental Offices",
              "Salons & Spas",
              "Real Estate Agents",
              "Roofing Companies",
              "Auto Detailers",
              "Home Renovators",
              "Fitness Studios",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white border border-slate-200 rounded-xl py-4 px-3 text-sm font-medium text-slate-700"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Ready to Put GoHighLevel to Work for Your Winnipeg Business?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a free GHL audit and we&apos;ll show you exactly how automation
            can capture more leads and close more deals — without adding to your
            workload.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book a Free GHL Audit</CTAButton>
            <CTAButton href="/pricing" variant="secondary">
              See Pricing
            </CTAButton>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            No contracts. 30-day guarantee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* JSON-LD: LocalBusiness + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "Your Lead Nest",
                description:
                  "Winnipeg's GoHighLevel agency — automation workflows, CRM setup, funnel builds, and ongoing support for local service businesses.",
                url: "https://yourleadnest.com/gohighlevel-agency-winnipeg",
                areaServed: {
                  "@type": "City",
                  name: "Winnipeg",
                  containedInPlace: {
                    "@type": "AdministrativeArea",
                    name: "Manitoba",
                  },
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Winnipeg",
                  addressRegion: "MB",
                  addressCountry: "CA",
                },
                priceRange: "$$",
                serviceType: [
                  "GoHighLevel Agency",
                  "CRM Setup & Automation",
                  "Sales Funnel Building",
                  "Lead Response Automation",
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
