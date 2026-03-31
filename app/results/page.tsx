import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "See how Winnipeg small businesses are booking more appointments and closing more deals with Your Lead Nest's AI-powered lead response automation.",
  keywords: [
    "speed to lead results",
    "lead response case studies Winnipeg",
    "HVAC lead automation",
    "dental clinic lead follow up",
    "real estate lead response time",
  ],
};

const stats = [
  { value: "50,000+", label: "Leads Responded To" },
  { value: "<45s", label: "Avg. Response Time" },
  { value: "3.2x", label: "Avg. Conversion Lift" },
];

const caseStudies = [
  {
    id: "hvac",
    industry: "Home Services",
    type: "HVAC",
    business: "Prairie Comfort Heating & Cooling",
    city: "Winnipeg, MB",
    problem: "Prairie Comfort was averaging an 8-hour response time to new leads coming in from Facebook ads and their website contact form. By the time they followed up, prospects had already booked with a competitor. They were spending $3,200/month on ads but converting less than 5% of inquiries into booked appointments.",
    setup: "We connected their Facebook Lead Ads and website inquiry forms to Your Lead Nest. Every new submission now triggers an instant SMS, email, and voicemail drop within 38 seconds -- 24/7, including nights, weekends, and holidays.",
    results: [
      { metric: "Response Time", before: "8 hours", after: "38 seconds" },
      { metric: "Bookings", before: "12/month", after: "46/month", lift: "+280%" },
      { metric: "Cost Per Booking", before: "$267", after: "$70", lift: "-74%" },
      { metric: "Monthly Revenue", before: "$18,000", after: "$52,000", lift: "+189%" },
    ],
    quote: "We went from chasing leads to having a full schedule. The system responds before I even see the notification. Our bookings nearly tripled in the first 60 days.",
    author: "Jason M.",
    role: "Owner, Prairie Comfort Heating & Cooling",
    accentColor: "orange",
  },
  {
    id: "dental",
    industry: "Health & Wellness",
    type: "Dental",
    business: "Bridgewater Family Dental",
    city: "Winnipeg, MB",
    problem: "Bridgewater Family Dental was losing a significant number of new patient inquiries that came in after hours, on weekends, and during lunch breaks when the front desk was unavailable. Over 60% of their website form submissions went unanswered for 4+ hours.",
    setup: "Your Lead Nest was connected to their website booking form, Google Business Profile, and Instagram DMs. After-hours inquiries now receive an instant personalized SMS with a direct link to book an appointment.",
    results: [
      { metric: "After-Hours Response", before: "Next business day", after: "Under 40 seconds" },
      { metric: "New Patient Bookings", before: "22/month", after: "32/month", lift: "+45%" },
      { metric: "No-Show Rate", before: "18%", after: "7%", lift: "-61%" },
      { metric: "Monthly New Patient Revenue", before: "$8,800", after: "$14,400", lift: "+64%" },
    ],
    quote: "We were shocked at how many leads we were losing after hours. Now every single inquiry gets a response instantly, and our new patient numbers have jumped 45%.",
    author: "Dr. Priya S.",
    role: "Owner, Bridgewater Family Dental",
    accentColor: "accent",
  },
  {
    id: "realestate",
    industry: "Professional Services",
    type: "Real Estate",
    business: "Makenzie Cole Realty",
    city: "Winnipeg, MB",
    problem: "Makenzie was receiving 80+ leads per month from Zillow, Google Ads, and her website, but only converting a handful into showings. Most leads went cold within hours because she was physically unable to respond while showing properties.",
    setup: "We integrated Your Lead Nest with her Zillow lead feed, Google Ads forms, and website contact page. Every new lead now gets an instant SMS, a personalized email with relevant listings, and an automated voicemail drop — all within 45 seconds.",
    results: [
      { metric: "Lead Response Time", before: "3-6 hours", after: "42 seconds" },
      { metric: "Showings Booked", before: "8/month", after: "33/month", lift: "+4.1x" },
      { metric: "Leads Contacted", before: "40%", after: "100%", lift: "+150%" },
      { metric: "Closed Deals (Quarterly)", before: "3", after: "9", lift: "+200%" },
    ],
    quote: "I used to lose leads while I was on showings. Now Your Lead Nest follows up instantly, and by the time I'm free, the showing is already booked. I've more than quadrupled my showings.",
    author: "Makenzie C.",
    role: "Realtor, Makenzie Cole Realty",
    accentColor: "orange",
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Proven Results</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Real Businesses.{" "}<span className="text-accent">Real Results.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            See how Winnipeg small businesses are using Your Lead Nest to respond faster, book more appointments, and grow revenue — on autopilot.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{stat.value}</p>
                <p className="text-slate-500 text-sm md:text-base font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Detailed breakdowns of how Your Lead Nest transformed lead follow-up for three Winnipeg businesses.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="relative">
                <div className="mb-8">
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                    study.accentColor === "orange" ? "bg-orange-light text-orange" : "bg-accent-light text-accent"
                  }`}>
                    {study.industry} &middot; {study.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{study.business}</h3>
                  <p className="text-slate-500 text-sm">{study.city}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <h4 className="text-orange font-bold text-sm uppercase tracking-wide mb-3">The Problem</h4>
                      <p className="text-slate-600 leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <h4 className="text-accent font-bold text-sm uppercase tracking-wide mb-3">The Setup</h4>
                      <p className="text-slate-600 leading-relaxed">{study.setup}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col">
                    <h4 className="text-accent font-bold text-sm uppercase tracking-wide mb-5">The Results</h4>
                    <div className="space-y-4 flex-1">
                      {study.results.map((r) => (
                        <div key={r.metric} className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                          <div className="min-w-0">
                            <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{r.metric}</p>
                            <div className="flex items-center gap-3 text-sm">
                              <span className="text-slate-400 line-through">{r.before}</span>
                              <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                              <span className="text-slate-800 font-bold">{r.after}</span>
                            </div>
                          </div>
                          {r.lift && (
                            <span className="text-sm font-extrabold px-3 py-1 rounded-full whitespace-nowrap bg-accent-light text-accent">
                              {r.lift}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="mt-8 bg-white rounded-2xl p-6 md:p-8 border-l-4 border-accent shadow-sm">
                  <p className="text-slate-700 text-lg md:text-xl italic leading-relaxed mb-4">&ldquo;{study.quote}&rdquo;</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
                      {study.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">{study.author}</p>
                      <p className="text-slate-500 text-xs">{study.role}</p>
                    </div>
                  </footer>
                </blockquote>

                {index < caseStudies.length - 1 && (
                  <div className="absolute -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2">
                    <div className="w-px h-8 md:h-12 bg-gradient-to-b from-slate-300 to-transparent" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Ready to See Results{" "}<span className="text-accent">Like These?</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
            Join 50+ Winnipeg businesses that respond to every lead in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">Book Your Free Demo</CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">See How It Works</CTAButton>
          </div>
          <p className="text-slate-400 text-sm mt-6">No contracts. No setup fees. Cancel anytime.</p>
        </div>
      </section>
    </>
  );
}
