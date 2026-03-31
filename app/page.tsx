import CTAButton from "@/components/CTAButton";
import ROICalculator from "@/components/ROICalculator";
import AIConsulting from "@/components/AIConsulting";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Speed to Lead &amp; AI Consulting for Winnipeg Businesses
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Your next customer called.{" "}
              <span className="text-accent">Someone else answered.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Most Winnipeg businesses lose deals before they ever talk to anyone.
              We fix that &mdash; fast response, full pipeline, no guesswork.
              Whether you need missed call text back running in under a minute or
              your entire team working smarter with AI, Your Lead Nest gives
              Winnipeg businesses an unfair advantage.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CTAButton href="#roi-calculator" variant="primary">
                See How It Works
              </CTAButton>
              <CTAButton href="#ai-consulting" variant="secondary">
                Explore AI Consulting
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN SECTION ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Every Missed Call Is a{" "}
            <span className="text-orange">Lost Job</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            The data is clear: if you&apos;re not first, you&apos;re forgotten.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1">
              <p className="text-5xl font-extrabold text-accent sm:text-6xl">78%</p>
              <p className="mt-4 text-lg font-semibold text-slate-800">First Responder Wins</p>
              <p className="mt-2 text-sm text-slate-500">
                The first business to respond captures the deal nearly 4 out of 5 times.
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/5" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1">
              <p className="text-5xl font-extrabold text-orange sm:text-6xl">5+ hrs</p>
              <p className="mt-4 text-lg font-semibold text-slate-800">Average Response Time</p>
              <p className="mt-2 text-sm text-slate-500">
                Most small businesses take over 5 hours to follow up with new leads.
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-orange/5" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1">
              <p className="text-5xl font-extrabold text-red-600 sm:text-6xl">10x</p>
              <p className="mt-4 text-lg font-semibold text-slate-800">Lead Loss After 5 Min</p>
              <p className="mt-2 text-sm text-slate-500">
                Your odds of qualifying a lead drop 10x if you wait longer than 5 minutes.
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-red-500/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROI CALCULATOR ===== */}
      <ROICalculator />

      {/* ===== AI CONSULTING ===== */}
      <AIConsulting />

      {/* ===== SOCIAL PROOF / TESTIMONIALS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Winnipeg businesses are already ahead.{" "}
            <span className="text-accent">Here&apos;s how.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            Local businesses that are already recovering lost revenue and working smarter.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Placeholder testimonial 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;We were losing half our after-hours leads. Within the first month,
                we recovered enough jobs to pay for the entire year of service.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
                  JM
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Jason M.</p>
                  <p className="text-sm text-slate-500">Roofing &amp; Exteriors, Winnipeg</p>
                </div>
              </div>
            </div>

            {/* Placeholder testimonial 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;The AI workshop changed how our entire team works. We&apos;re getting
                proposals out in half the time and our clients notice the difference.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-sm font-bold text-orange">
                  SP
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Sarah P.</p>
                  <p className="text-sm text-slate-500">Professional Services, Winnipeg</p>
                </div>
              </div>
            </div>

            {/* Placeholder testimonial 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;Our ads were generating leads but we couldn&apos;t keep up. Now every
                inquiry gets a response instantly. Our conversion rate tripled.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
                  DK
                </div>
                <div>
                  <p className="font-semibold text-slate-800">David K.</p>
                  <p className="text-sm text-slate-500">Dental Practice, Winnipeg</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Case studies coming soon. These reflect early client experiences.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Ready to stop losing leads?{" "}
            <span className="text-accent">Start&nbsp;today.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
            Most clients are up and running within a week.
            No contracts. No risk. Just measurable results for your Winnipeg business.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/book-demo" variant="primary">
              Book a 20-Minute Call
            </CTAButton>
            <CTAButton href="#roi-calculator" variant="secondary">
              Calculate Your ROI
            </CTAButton>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            No commitment required &bull; Free consultation &bull; Winnipeg-based team
          </p>
        </div>
      </section>
    </>
  );
}
