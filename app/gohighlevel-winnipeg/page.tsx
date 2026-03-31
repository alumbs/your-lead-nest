import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "GoHighLevel Winnipeg — Local GHL Expert Setup & Management",
  description:
    "Looking for GoHighLevel setup and management in Winnipeg? Your Lead Nest is Winnipeg's local GHL expert. We build, manage, and optimize your GoHighLevel CRM so you can focus on your business.",
  keywords: [
    "GoHighLevel Winnipeg",
    "GHL setup Winnipeg",
    "GoHighLevel expert Manitoba",
    "GoHighLevel CRM Winnipeg",
    "GHL agency Winnipeg",
    "GoHighLevel implementation Winnipeg",
    "CRM automation Winnipeg",
  ],
  alternates: {
    canonical: "https://yourleadnest.com/gohighlevel-winnipeg",
  },
};

export default function GoHighLevelWinnipegPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            GoHighLevel in Winnipeg
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Winnipeg&apos;s Local <span className="text-accent">GoHighLevel</span> Expert
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            GoHighLevel is the most powerful CRM for small businesses — but most owners don&apos;t have time to learn it.
            We set up, manage, and optimize GHL for Winnipeg businesses so you get the results without the headaches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">Get GHL Set Up for You</CTAButton>
            <CTAButton href="/pricing" variant="secondary">See Pricing</CTAButton>
          </div>
        </div>
      </section>

      {/* What is GHL */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
            What Is GoHighLevel?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4 text-lg">
            <p>
              <strong className="text-slate-800">GoHighLevel (GHL)</strong> is an all-in-one sales and marketing platform
              built for small businesses and agencies. It replaces the need for multiple tools by combining CRM, email marketing,
              SMS automation, appointment scheduling, pipeline management, reputation management, and more into a single platform.
            </p>
            <p>
              For Winnipeg service businesses, GHL is a game-changer. Instead of juggling separate tools for email (Mailchimp),
              scheduling (Calendly), CRM (HubSpot), and texting (Twilio), everything lives in one place. The problem?
              GHL has a steep learning curve, and most business owners don&apos;t have 40+ hours to figure it out.
            </p>
            <p>
              That&apos;s where we come in. <strong className="text-slate-800">Your Lead Nest is Winnipeg&apos;s local GoHighLevel
              expert.</strong> We handle the entire setup, build your automations, and manage your account — so you get the
              benefits of GHL without touching the backend.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            What We Build for You in GoHighLevel
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Instant Lead Follow-Up",
                desc: "Automated SMS, email, and voicemail drops that fire within 60 seconds of any new lead. AI-written, personalized to your brand.",
              },
              {
                title: "Pipeline Management",
                desc: "Custom sales pipelines that match your business workflow. See every lead's status at a glance and never let one fall through the cracks.",
              },
              {
                title: "Appointment Booking",
                desc: "Built-in calendar and scheduling that syncs with your availability. Leads book directly — no back-and-forth emails needed.",
              },
              {
                title: "Reputation Management",
                desc: "Automated review requests after every job. Build your Google reviews and stand out in Winnipeg local search results.",
              },
              {
                title: "Email & SMS Campaigns",
                desc: "Nurture sequences, re-engagement campaigns, and seasonal promotions — all automated and branded to your business.",
              },
              {
                title: "Reporting & Analytics",
                desc: "Track lead sources, conversion rates, response times, and ROI. Know exactly what's working and where to invest more.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
            Why Choose a Local Winnipeg GHL Expert?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "We Understand the Winnipeg Market",
                desc: "We know the seasonal rhythms, the local industries, and the competitive landscape. Our automations are built for how Winnipeg businesses actually operate — not generic templates from a national agency.",
              },
              {
                title: "Local Support, Not a Ticket Queue",
                desc: "When you need help, you talk to someone who knows your business and your market. No waiting days for a reply from a faceless support team on the other side of the country.",
              },
              {
                title: "Done-For-You, Not DIY",
                desc: "We don't hand you a login and wish you luck. We build everything, test everything, and maintain everything. You focus on running your business.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GHL vs DIY */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
            GoHighLevel: DIY vs. Done-For-You
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-4 text-sm font-bold text-slate-700"></th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">DIY GoHighLevel</th>
                  <th className="px-6 py-4 text-sm font-bold text-accent">Your Lead Nest</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  ["Setup time", "40-80+ hours", "We handle it all"],
                  ["Learning curve", "Steep", "None for you"],
                  ["Automation building", "You figure it out", "Built & tested for you"],
                  ["Ongoing maintenance", "On you", "Managed by us"],
                  ["Local market knowledge", "Generic", "Winnipeg-specific"],
                  ["Support", "GHL docs & forums", "Direct local support"],
                ].map(([label, diy, yln]) => (
                  <tr key={label} className="border-t border-slate-100">
                    <td className="px-6 py-4 font-medium text-slate-800">{label}</td>
                    <td className="px-6 py-4">{diy}</td>
                    <td className="px-6 py-4 font-semibold text-accent">{yln}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Ready to Get GoHighLevel Working for Your Winnipeg Business?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a free demo and we&apos;ll show you exactly how we&apos;ll set up GHL to capture more leads and close more deals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo">Book Your Free Demo</CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">See How It Works</CTAButton>
          </div>
          <p className="text-slate-400 text-sm mt-6">No contracts. 30-day guarantee. Cancel anytime.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "GoHighLevel Setup & Management — Winnipeg",
            provider: {
              "@type": "LocalBusiness",
              name: "Your Lead Nest",
              areaServed: { "@type": "City", name: "Winnipeg" },
            },
            description:
              "Professional GoHighLevel CRM setup, automation building, and ongoing management for Winnipeg small businesses.",
            serviceType: "CRM Implementation and Automation",
            areaServed: {
              "@type": "City",
              name: "Winnipeg",
              containedInPlace: { "@type": "AdministrativeArea", name: "Manitoba" },
            },
          }),
        }}
      />
    </>
  );
}
