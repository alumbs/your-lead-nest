"use client";

import { useState, FormEvent } from "react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", monthlyLeadVolume: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-slate-800 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-8">
              See Your Lead Nest in Action&nbsp;&mdash; Book Your Free 15-Minute Demo
            </h1>
            <h2 className="text-xl font-semibold text-accent mb-4">What You&apos;ll Get</h2>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex items-start gap-3"><span className="mt-1 text-accent">&#10003;</span><span>A live demo tailored to your industry so you can see exactly how Your Lead Nest works for your business</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-accent">&#10003;</span><span>A lead source analysis to identify where your best opportunities are slipping through the cracks</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-accent">&#10003;</span><span>A custom setup recommendation with a clear plan to get you live fast</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-accent">&#10003;</span><span>No sales pressure&nbsp;&mdash; just an honest conversation about whether we&apos;re the right fit</span></li>
            </ul>
          </div>

          <div className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-10 min-h-[480px]">
            <svg className="w-16 h-16 text-accent mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <p className="text-xl font-semibold text-slate-800 mb-2">Calendly booking widget will be embedded here</p>
            <p className="text-slate-500 text-sm">Pick a 15-minute slot that works for you</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-3">Or Request a Demo Below</h2>
          <p className="text-slate-500 text-center mb-10">Fill out the form and we&apos;ll reach out within one business day.</p>

          {submitted ? (
            <div className="rounded-xl bg-white border border-accent/30 p-10 text-center shadow-sm">
              <span className="inline-block text-accent text-5xl mb-4">&#10003;</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thanks, {formData.name || "there"}!</h3>
              <p className="text-slate-600">Your demo request has been received. We&apos;ll be in touch shortly to get you scheduled.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com" className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
                <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange} className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="" disabled>Select your industry</option>
                  <option value="HVAC/Plumbing">HVAC / Plumbing</option>
                  <option value="Dental/Healthcare">Dental / Healthcare</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Legal">Legal</option>
                  <option value="Auto Services">Auto Services</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="monthlyLeadVolume" className="block text-sm font-medium text-slate-700 mb-1">Monthly Lead Volume</label>
                <select id="monthlyLeadVolume" name="monthlyLeadVolume" required value={formData.monthlyLeadVolume} onChange={handleChange} className="w-full rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="" disabled>Select volume</option>
                  <option value="Under 50">Under 50</option>
                  <option value="50-200">50 - 200</option>
                  <option value="200-500">200 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors cursor-pointer">
                Request a Demo
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Prefer to Talk Now?</h2>
          <p className="text-slate-500 mb-6">Skip the form&nbsp;&mdash; give us a call and we&apos;ll walk you through everything live.</p>
          <a href="tel:+18005551234" className="inline-block text-3xl sm:text-4xl font-bold text-accent hover:text-accent-hover transition-colors">
            (800) 555-1234
          </a>
          <p className="text-slate-400 text-sm mt-3">Monday &ndash; Friday, 8 AM &ndash; 6 PM EST</p>
        </div>
      </section>
    </main>
  );
}
