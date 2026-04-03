import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-navy-700">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2
          className="font-extrabold tracking-tight text-white"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/60">
          No equity. No fees. Just the support, mentorship, and resources you
          need to succeed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Apply Now
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
