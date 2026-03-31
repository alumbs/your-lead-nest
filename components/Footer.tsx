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
              AI-powered lead response automation for Winnipeg small businesses.
              Respond to every lead in under 60 seconds — automatically, 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-slate-800 transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-slate-800 transition-colors">Pricing</Link></li>
              <li><Link href="/results" className="hover:text-slate-800 transition-colors">Results</Link></li>
              <li><Link href="/faq" className="hover:text-slate-800 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book-demo" className="hover:text-slate-800 transition-colors">Book a Demo</Link></li>
              <li><Link href="/speed-to-lead-winnipeg" className="hover:text-slate-800 transition-colors">Speed to Lead Winnipeg</Link></li>
              <li><Link href="/gohighlevel-winnipeg" className="hover:text-slate-800 transition-colors">GoHighLevel Winnipeg</Link></li>
              <li><Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Lead Nest. All rights reserved.</p>
          <p className="text-sm">Proudly serving Winnipeg small businesses.</p>
        </div>
      </div>
    </footer>
  );
}
