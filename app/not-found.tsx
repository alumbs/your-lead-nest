import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
