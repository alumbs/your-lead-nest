"use client";

import { useState, useMemo } from "react";
import CTAButton from "./CTAButton";

const PRICE_PER_EMPLOYEE = 3500;
const MAX_ENGAGEMENT = 15000;

const employeeCounts = [5, 10, 25, 50, 100] as const;

export default function AIConsulting() {
  const [selectedIdx, setSelectedIdx] = useState(1); // default to 10

  const employeeCount = employeeCounts[selectedIdx];
  const isEnterprise = employeeCount === 100;

  const stats = useMemo(() => {
    const totalEngagement = Math.min(employeeCount * PRICE_PER_EMPLOYEE, MAX_ENGAGEMENT);
    // Hours saved: each person saves 2hrs/day * 250 working days
    const hoursSaved = employeeCount * 2 * 250;
    const blendedRate = 40; // $/hr
    const productivityGain = hoursSaved * blendedRate;
    return { totalEngagement, productivityGain, hoursSaved };
  }, [employeeCount]);

  return (
    <section id="ai-consulting" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
            AI Consulting
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            AI Consulting for Winnipeg Businesses &mdash;{" "}
            <span className="text-accent">Your Team. With AI. Doing More.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We offer AI consulting for Winnipeg businesses that want to go beyond
            automation and build real AI capability into their team. In a single
            full-day session, we assess your workflows, identify high-leverage AI
            opportunities, and train your people to actually use them. No hype. No
            vague roadmaps. You leave with a clear plan and hands-on skills.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Employee count toggle */}
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                How many employees on your team?
              </p>
              <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                {employeeCounts.map((count, idx) => (
                  <button
                    key={count}
                    onClick={() => setSelectedIdx(idx)}
                    className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                      selectedIdx === idx
                        ? "bg-accent text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {count === 100 ? "100+" : count}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing display */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-6">
                <p className="text-sm font-medium text-slate-500">Investment</p>
                <div className="mt-2">
                  <p className="text-sm text-slate-600">
                    ${PRICE_PER_EMPLOYEE.toLocaleString()} per employee (max ${MAX_ENGAGEMENT.toLocaleString()})
                  </p>
                  <p className="mt-2 text-4xl font-extrabold text-slate-900">
                    {isEnterprise ? (
                      "Contact us"
                    ) : (
                      <>
                        ${stats.totalEngagement.toLocaleString()}
                        <span className="text-base font-medium text-slate-500 ml-1">
                          total
                        </span>
                      </>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Full-day AI transformation session
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-accent-50 border border-accent/20 p-6">
                <p className="text-sm font-medium text-accent">Productivity ROI</p>
                <div className="mt-2">
                  <p className="text-sm text-slate-600">
                    A team of {employeeCount} each saving 2&nbsp;hrs/day =
                    {" "}<strong>{stats.hoursSaved.toLocaleString()}</strong> hours recovered/year.
                  </p>
                  <p className="mt-2 text-4xl font-extrabold text-accent">
                    ${stats.productivityGain.toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    in recaptured productivity &mdash; every year
                  </p>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="mt-8 rounded-xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-700 mb-3">
                What&apos;s included
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Full-day, on-site or remote AI consulting session",
                  "Custom to your industry, tools, and workflows",
                  "Practical — your team leaves knowing what to do Monday morning",
                  "AI tool selection & setup",
                  "Follow-up implementation support available",
                  "Built by people who have built real AI systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <CTAButton href="/book-demo" variant="primary">
                Book a Discovery Call
              </CTAButton>
              <p className="mt-3 text-sm text-slate-400">
                Not sure if this is right for you? Let&apos;s talk for 20 minutes. No pitch, just clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
