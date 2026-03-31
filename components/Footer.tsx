import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-slate-900 font-bold text-xl tracking-tight">
              Your<span className="text-accent">Lead</span>Nest
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-md">
              Speed to lead automation and AI consulting for Winnipeg businesses.
              Stop losing revenue. Start working smarter.
            </p>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/speed-to-lead-winnipeg" className="hover:text-slate-800 transition-colors">Speed to Lead</Link></li>
              <li><Link href="/ai-consulting-winnipeg" className="hover:text-slate-800 transition-colors">AI Consulting</Link></li>
              <li><Link href="/#roi-calculator" className="hover:text-slate-800 transition-colors">ROI Calculator</Link></li>
              <li><Link href="/faq" className="hover:text-slate-800 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book-demo" className="hover:text-slate-800 transition-colors">Book a Call</Link></li>
              <li><Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Lead Nest. All rights reserved.</p>
          <p className="text-sm">Your Lead Nest &mdash; Winnipeg&apos;s response advantage.</p>
        </div>
      </div>
    </footer>
  );
}
