"use client";

import { useState } from "react";
import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

const faqs = [
  { question: "Do I need to switch my CRM?", answer: "Nope. We build everything on GoHighLevel, which becomes your all-in-one CRM, but we handle the entire migration for you. If you love your current CRM, we can often integrate with it too — just let us know during onboarding and we'll figure out the best path forward." },
  { question: "Will the messages sound robotic or generic?", answer: "Not at all. Every message is written to match your brand voice and feel like it's coming directly from you or your team. We customize the tone, wording, and flow during setup so leads feel like they're talking to a real person, not a bot." },
  { question: "How long does setup take?", answer: "Most businesses are fully live within 3 to 5 business days. That includes connecting your lead sources, building out your follow-up sequences, and testing everything end to end. We do the heavy lifting so you can stay focused on running your business." },
  { question: "What happens when a lead replies?", answer: "You get notified instantly so you can jump into the conversation whenever you're ready. The system keeps the lead warm and engaged until you take over. You'll never lose a lead just because you were busy with a job or away from your desk." },
  { question: "Is there a contract or commitment?", answer: "No long-term contracts. We offer simple month-to-month plans because we believe the results should keep you around, not a contract. You can cancel anytime — though once you see the difference, you probably won't want to." },
  { question: "How is this different from just using GoHighLevel myself?", answer: "GoHighLevel is a powerful platform, but it's also complex. Most business owners don't have the time to learn the system, build workflows, write follow-up sequences, and maintain everything. We do all of that for you so you get the benefits without the learning curve or the headaches." },
  { question: "Do you serve businesses outside Winnipeg?", answer: "Yes! While we're proudly based in Winnipeg and many of our clients are local, the system works for service-based businesses anywhere in Canada. If speed to lead matters for your business, we can help no matter where you're located." },
  { question: "What lead sources do you connect to?", answer: "We connect to all the major ones — Facebook and Instagram ads, Google Ads, your website contact forms, landing pages, and more. If a lead comes in, we make sure it gets an instant response regardless of where it originated." },
  { question: "Can I customize the follow-up messages?", answer: "Absolutely. You have full approval over every message before anything goes live. We write the initial drafts based on what works best for your industry, and then we refine them together until you're completely happy with the tone and content." },
  { question: "What if I already have someone handling leads?", answer: "That's great — this makes their job easier, not redundant. The system handles the instant response and initial follow-up so your team can focus on closing deals instead of chasing cold leads. Think of it as giving your sales process a turbo boost." },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-200">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-accent" aria-expanded={isOpen}>
        <span className="pr-4 text-lg font-bold text-slate-800 md:text-xl">{question}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pr-12 text-base leading-relaxed text-slate-600 md:text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-slate-50 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Everything you need to know about Your Lead Nest and how it helps your business respond faster, close more deals, and stop losing leads.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">Still Have Questions?</h2>
          <p className="mb-10 text-lg text-slate-600 md:text-xl">
            Book a free demo and we'll walk you through exactly how Your Lead Nest works for your business.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/book-demo">Book Your Free Demo</CTAButton>
            <CTAButton href="/pricing" variant="secondary">View Pricing</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
