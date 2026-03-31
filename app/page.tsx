import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-light px-5 py-2 text-sm font-medium text-accent">
                <svg className="h-4 w-4 fill-accent" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" /></svg>
                Trusted by 50+ Winnipeg businesses
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl">
                You Have <span className="text-orange">5 Minutes</span> to Respond
                <span className="mt-2 block text-accent">&mdash; Or You Lose the Lead</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
                Your Lead Nest automatically follows up with every new lead in
                <strong className="text-slate-900"> under 60 seconds</strong> &mdash; via text, email,
                and voicemail &mdash; so you never miss a sale again.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <CTAButton href="/book-demo" variant="primary">
                  Book Your Free Demo
                </CTAButton>
                <CTAButton href="/how-it-works" variant="secondary">
                  See How It Works
                </CTAButton>
              </div>
            </div>

            <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96 lg:mx-0 lg:ml-auto">
              <div className="absolute inset-0 animate-ping rounded-full border border-accent/15 [animation-duration:3s]" />
              <div className="absolute inset-6 animate-ping rounded-full border border-accent/20 [animation-duration:2.5s] [animation-delay:0.3s]" />
              <div className="absolute inset-12 animate-ping rounded-full border border-accent/30 [animation-duration:2s] [animation-delay:0.6s]" />

              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-accent-light to-accent-50 shadow-[0_0_80px_rgba(22,163,74,0.15)]">
                <svg viewBox="0 0 64 64" className="h-20 w-20 drop-shadow-[0_0_12px_rgba(22,163,74,0.4)]" fill="none">
                  <path d="M36 4L12 36h16l-4 24 24-32H32l4-24z" className="fill-accent stroke-accent" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>

              <span className="absolute top-6 right-4 animate-bounce rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-accent shadow-md [animation-duration:2s]">
                &lt; 60s
              </span>
              <span className="absolute bottom-10 left-2 animate-bounce rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-orange shadow-md [animation-duration:2.4s] [animation-delay:0.5s]">
                24 / 7
              </span>
              <span className="absolute top-20 left-0 animate-bounce rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md [animation-duration:2.8s] [animation-delay:1s]">
                Automated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN SECTION ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Your Leads Are Going Cold While You&apos;re{" "}
            <span className="text-orange">Busy Working</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            The data is brutal. If you&apos;re not first, you&apos;re forgotten.
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

      {/* ===== SOLUTION / 3-STEP SECTION ===== */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            How <span className="text-accent">Your Lead Nest</span> Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            Three steps. Zero manual effort. Instant results.
          </p>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="pointer-events-none absolute top-16 left-[16.67%] hidden h-0.5 w-[66.66%] bg-gradient-to-r from-accent via-accent/50 to-accent md:block" />

            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white shadow-[0_0_30px_rgba(22,163,74,0.2)]">
                1
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-800">Lead Comes In</h3>
              <p className="mt-2 text-slate-500">
                A prospect fills out your form, clicks your ad, or sends a message &mdash; from any source.
              </p>
              <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-accent" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white shadow-[0_0_30px_rgba(22,163,74,0.2)]">
                2
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-800">Instant Follow-Up Fires</h3>
              <p className="mt-2 text-slate-500">
                Within seconds, your lead gets a personalized text, email, and voicemail drop &mdash; automatically.
              </p>
              <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm">
                <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
                  <path d="M36 8L14 34h14l-4 22 22-26H32l4-22z" className="fill-orange stroke-orange" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white shadow-[0_0_30px_rgba(22,163,74,0.2)]">
                3
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-800">Customer Replies, You Close</h3>
              <p className="mt-2 text-slate-500">
                The lead is warm and engaged. You step in, have the conversation, and close the deal.
              </p>
              <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-accent" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF / TESTIMONIALS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Real Results from <span className="text-accent">Real Businesses</span>
          </h2>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-accent/30 bg-accent-light px-8 py-5 text-center">
            <p className="text-lg font-bold text-slate-800 sm:text-xl">
              <span className="text-accent">3x increase</span> in lead-to-booking rate within{" "}
              <span className="text-accent">30 days</span>
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;We went from losing half our leads to booking 80% of them within a week of
                setting up Your Lead Nest. The automated follow-ups are a game-changer.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
                  JM
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Jason Mitchell</p>
                  <p className="text-sm text-slate-500">Mitchell Roofing &amp; Exteriors</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;I used to spend my evenings returning calls. Now the system handles
                first contact instantly and I just show up to close. Best investment this
                year.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-sm font-bold text-orange">
                  SP
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Sarah Proulx</p>
                  <p className="text-sm text-slate-500">Prairie Home Cleaning Co.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.82l-4 3.9.94 5.5L10 13.47 5.06 16.22l.94-5.5-4-3.9 5.61-.98L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                &ldquo;Our Google Ads were generating leads but we couldn&apos;t keep up. Your Lead
                Nest tripled our conversion rate without adding a single staff member.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-accent">
                  DK
                </div>
                <div>
                  <p className="font-semibold text-slate-800">David Kim</p>
                  <p className="text-sm text-slate-500">Elm City Dental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION LOGOS ===== */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Works with the tools you already use
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { name: "GoHighLevel", icon: "GHL" },
              { name: "Facebook Ads", icon: "fb" },
              { name: "Google Ads", icon: "G" },
              { name: "WordPress", icon: "WP" },
              { name: "Gravity Forms", icon: "GF" },
              { name: "Calendly", icon: "Cal" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex h-20 w-36 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-accent/40"
              >
                <span className="text-xl font-extrabold text-accent">{tool.icon}</span>
                <span className="mt-1 text-xs text-slate-500">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Stop Losing Leads.{" "}
            <span className="text-accent">Start Closing Them.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
            Every minute you wait is a lead your competitor is closing. Let Your Lead Nest
            do the heavy lifting &mdash; so you can focus on what you do best.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/book-demo" variant="primary">
              Book Your Free Demo
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            No credit card required &bull; Setup in under 24 hours &bull; Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
