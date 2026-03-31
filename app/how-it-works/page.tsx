import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "How It Works — Your Lead Nest",
  description:
    "See how Your Lead Nest's instant follow-up system responds to every new inquiry in under 60 seconds. AI-powered SMS, email, and phone outreach — fully automated, zero manual work.",
};

function IconPlug() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a6 6 0 0 1-12 0V8h12Z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-4">The Problem</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
            The Lead Response Gap Is{" "}<span className="text-orange">Killing Your Revenue</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-14">
            Most businesses take <span className="font-bold text-slate-900">hours or even days</span> to follow up with a new lead. By then, the prospect has moved on.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-10">
            {[
              { stat: "78%", text: "of customers buy from the company that responds first." },
              { stat: "5 min", text: "After five minutes your odds of qualifying a lead drop by 80%." },
              { stat: "47 hrs", text: "The average small-business response time to a new web lead." },
            ].map((item) => (
              <div key={item.stat} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3">{item.stat}</p>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-xl md:text-2xl font-semibold text-slate-800">
            Your Lead Nest closes the gap &mdash;{" "}
            <span className="text-accent">every lead gets a response in under 60 seconds.</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-4">The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Five Steps. Fully Automated.</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[39px] top-4 bottom-4 w-px bg-slate-200" />
            <div className="space-y-10 md:space-y-14">
              {[
                { num: 1, title: "Connect Your Lead Sources", desc: "Plug in your website forms, Facebook Ads, Google Ads, CRM pipelines, Calendly, and more. One-time setup — takes about 15 minutes.", Icon: IconPlug },
                { num: 2, title: "A New Lead Comes In", desc: "The instant someone fills out a form, clicks an ad, or enters your pipeline, our system detects it in real time.", Icon: IconBolt },
                { num: 3, title: "AI Message Sent in Seconds", desc: "Within 60 seconds the lead receives a personalized SMS and email — written by AI, sounding like you — with a clear next step.", Icon: IconMessage },
                { num: 4, title: "Conversation Handled Automatically", desc: "If the lead replies, the AI continues the conversation — answering questions, overcoming objections, and guiding them toward booking.", Icon: IconChat },
                { num: 5, title: "Booking Confirmed", desc: "The AI books the appointment directly on your calendar. You get a notification. The lead gets a confirmation. Done.", Icon: IconCalendar },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-5 md:gap-8">
                  <div className="relative z-10 flex-shrink-0 w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full bg-accent-light border-2 border-accent flex items-center justify-center">
                    <span className="text-accent font-bold text-xl md:text-2xl">{step.num}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-3 mb-2 text-accent">
                      <step.Icon />
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-4">Real Examples</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">What Your Leads Actually See</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              No robotic templates. Every message is generated by AI to match your brand voice and the lead&apos;s specific inquiry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 text-center">SMS — sent in 14 seconds</p>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="bg-slate-100 px-5 py-3 flex items-center justify-between text-xs text-slate-500">
                  <span>9:41 AM</span><span className="font-semibold text-slate-700">Messages</span><span>5G</span>
                </div>
                <div className="px-5 py-3 border-b border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">SL</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Summit Landscaping</p>
                    <p className="text-xs text-slate-400">Business</p>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-4 min-h-[220px]">
                  <div className="flex justify-start">
                    <div className="bg-accent-light border border-accent/20 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed text-slate-800">
                        Hey Sarah! Thanks for requesting a quote from Summit Landscaping. I&apos;d love to learn more about your yard. Are you looking at a full redesign or specific maintenance work? I have a few openings this week if you want to chat.
                      </p>
                      <p className="text-xs text-slate-400 mt-2 text-right">9:41 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed text-slate-700">Mostly the front yard — new sod and maybe some flower beds.</p>
                      <p className="text-xs text-slate-400 mt-2 text-right">9:42 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-accent-light border border-accent/20 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed text-slate-800">
                        That sounds great, Sarah. I have Thursday at 10 AM or Friday at 2 PM open for a quick site visit. Which works best for you?
                      </p>
                      <p className="text-xs text-slate-400 mt-2 text-right">9:42 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 text-center">Email — sent in 22 seconds</p>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="bg-slate-100 px-5 py-3 flex items-center gap-2 text-xs text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="font-semibold text-slate-700">Inbox</span>
                </div>
                <div className="px-5 py-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-800 text-sm mb-1">Re: Your landscaping quote request</p>
                  <p className="text-xs text-slate-400">From: Mike &lt;mike@summitlandscaping.com&gt;</p>
                  <p className="text-xs text-slate-400">To: sarah.johnson@gmail.com</p>
                </div>
                <div className="px-5 py-6 min-h-[220px]">
                  <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>Hi Sarah,</p>
                    <p>Thanks for reaching out about landscaping for your property on Elm Street. We&apos;d love to help with the front yard project you mentioned.</p>
                    <p>I&apos;ve attached a few examples of similar sod and flower-bed work we did in your neighbourhood last month. We typically start with a free 20-minute site visit so we can give you an accurate quote.</p>
                    <p>Want to pick a time? <span className="text-accent underline">Book directly on our calendar here.</span></p>
                    <p className="text-slate-400">— Mike, Summit Landscaping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-4">Integrations</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Connects to the Tools You Already Use</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              No rip-and-replace. Your Lead Nest plugs into your existing lead sources and starts working immediately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { name: "Website Forms", desc: "Any HTML form, Wix, Squarespace, or custom-built site. We capture submissions the moment they happen.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg> },
              { name: "Facebook Lead Ads", desc: "Instant form leads from Facebook and Instagram are captured in real time — no CSV downloads, no delays.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
              { name: "Google Ads", desc: "Lead form extensions and landing page conversions trigger instant follow-up the moment a prospect converts.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><path d="m16 10-5.12 6.4a1 1 0 0 1-1.56 0L7 13.6" /></svg> },
              { name: "GoHighLevel Pipelines", desc: "Already on GHL? We work natively inside your existing pipelines, workflows, and contact records.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M3 3v18h18" /><path d="m7 16 4-8 4 5 4-9" /></svg> },
              { name: "WordPress & Gravity Forms", desc: "WordPress sites with Contact Form 7, Gravity Forms, WPForms, or Elementor forms — all supported out of the box.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg> },
              { name: "Calendly", desc: "When someone books through Calendly, the AI instantly sends a confirmation and pre-meeting warm-up message.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg> },
            ].map((item) => (
              <div key={item.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10 text-sm">
            Don&apos;t see your tool? We support 100+ integrations via Zapier and webhooks.{" "}
            <a href="/book-demo" className="text-accent underline hover:text-accent-hover">Ask us about yours.</a>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-4">Zero Friction</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What You <span className="text-orange">Don&apos;t</span> Have to Do
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We remove every objection so you can focus on closing deals, not wrestling with software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "No CRM Switch Required", desc: "Keep the tools you love. Your Lead Nest layers on top of your existing CRM — GoHighLevel, HubSpot, Salesforce, or a spreadsheet." },
              { title: "No Tech Skills Needed", desc: "If you can fill out a form, you can set this up. We handle all the technical wiring during onboarding at no extra cost." },
              { title: "No Manual Follow-Up", desc: "Stop copying, pasting, and forgetting. Every lead is followed up automatically, 24 hours a day, 7 days a week." },
              { title: "No Script Writing", desc: "Our AI generates personalized messages based on your business, your tone, and the lead's specific request. No templates to maintain." },
              { title: "No Long-Term Contracts", desc: "Month-to-month billing. Stay because it works, not because you are locked in. Cancel any time with one click." },
              { title: "No Missed Leads — Ever", desc: "Weekends, holidays, 3 AM — it does not matter. Every single lead gets an instant, human-sounding response." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent"><IconShield /></span>
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Never Lose a Lead Again?</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute demo. We will connect your lead sources, show you the AI in action, and have you live in under a day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-demo" variant="primary">Book Your Free Demo</CTAButton>
            <CTAButton href="/pricing" variant="secondary">See Pricing</CTAButton>
          </div>
          <p className="mt-6 text-sm text-slate-400">No credit card required. No commitment. Just results.</p>
        </div>
      </section>
    </>
  );
}
