"use client";

import { useState, useMemo } from "react";
import CTAButton from "./CTAButton";

const MONTHLY_PRICE = 497;

const setupFees = [
  { label: "1 person", price: 997 },
  { label: "3 person", price: 2500 },
  { label: "Larger team", price: null },
];

export default function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(15);
  const [leadValue, setLeadValue] = useState(500);
  const [recaptureRate, setRecaptureRate] = useState(30);
  const [showPrice, setShowPrice] = useState(false);
  const [teamSize, setTeamSize] = useState(0);

  const stats = useMemo(() => {
    const monthlyRecovered = Math.round(
      missedCalls * 4.33 * (recaptureRate / 100) * leadValue
    );
    const annualROI = monthlyRecovered * 12;
    const jobsThatPay = Math.round(annualROI / (MONTHLY_PRICE * 12));
    return { monthlyRecovered, annualROI, jobsThatPay };
  }, [missedCalls, leadValue, recaptureRate]);

  return (
    <section id="roi-calculator" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          See How Much Revenue{" "}
          <span className="text-accent">You&apos;re Leaving on the Table</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
          Adjust the sliders to match your business. The math speaks for itself.
        </p>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Sliders */}
            <div className="space-y-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Missed calls per week
                  </label>
                  <span className="text-lg font-bold text-accent">
                    {missedCalls}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full accent-accent h-2 rounded-lg appearance-none bg-slate-200 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>5</span>
                  <span>50+</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Average value per lead
                  </label>
                  <span className="text-lg font-bold text-accent">
                    ${leadValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={100}
                  value={leadValue}
                  onChange={(e) => setLeadValue(Number(e.target.value))}
                  className="w-full accent-accent h-2 rounded-lg appearance-none bg-slate-200 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$200</span>
                  <span>$5,000+</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Estimated recapture rate
                  </label>
                  <span className="text-lg font-bold text-accent">
                    {recaptureRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={5}
                  value={recaptureRate}
                  onChange={(e) => setRecaptureRate(Number(e.target.value))}
                  className="w-full accent-accent h-2 rounded-lg appearance-none bg-slate-200 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>10%</span>
                  <span>60%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-between rounded-2xl border border-accent/30 bg-accent-50 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Your estimated recovery
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm text-slate-600">Monthly revenue recovered</p>
                    <p className="text-4xl font-extrabold text-slate-900">
                      ${stats.monthlyRecovered.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Annual ROI</p>
                    <p className="text-4xl font-extrabold text-accent">
                      ${stats.annualROI.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/70 px-5 py-3">
                    <p className="text-sm text-slate-700">
                      Just <span className="font-bold text-accent">{stats.jobsThatPay} recaptured {stats.jobsThatPay === 1 ? "job" : "jobs"}</span> pay
                      for the entire year of service
                    </p>
                  </div>
                </div>
              </div>

              {!showPrice ? (
                <button
                  onClick={() => setShowPrice(true)}
                  className="mt-8 w-full rounded-lg bg-accent px-6 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
                >
                  See What This Costs &rarr;
                </button>
              ) : (
                <div className="mt-8 space-y-5">
                  <div className="rounded-xl border border-accent/20 bg-white px-6 py-5">
                    <p className="text-sm font-medium text-slate-500">Monthly investment</p>
                    <p className="mt-1 text-3xl font-extrabold text-slate-900">
                      $497<span className="text-base font-medium text-slate-500">/mo</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Per location &bull; 24/7 coverage
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      One-time setup fee
                    </p>
                    <div className="flex gap-2">
                      {setupFees.map((fee, idx) => (
                        <button
                          key={fee.label}
                          onClick={() => setTeamSize(idx)}
                          className={`flex-1 rounded-lg border px-3 py-2 text-center text-sm transition-colors ${
                            teamSize === idx
                              ? "border-accent bg-accent-light text-accent font-semibold"
                              : "border-slate-200 bg-white text-slate-600 hover:border-accent/40"
                          }`}
                        >
                          <span className="block text-xs">{fee.label}</span>
                          <span className="block font-bold mt-0.5">
                            {fee.price ? `$${fee.price.toLocaleString()}` : "Contact us"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <CTAButton href="/book-demo" variant="primary" className="w-full text-center">
                    Start Recovering Lost Revenue
                  </CTAButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
