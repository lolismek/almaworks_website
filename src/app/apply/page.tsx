import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Almaworks, Columbia University's premier startup accelerator. No equity, no fees.",
};

const timeline = [
  {
    step: "Apply",
    description: "Submit your application with team info, product details, and growth milestones.",
  },
  {
    step: "Review",
    description: "Our team reviews applications and conducts interviews with selected teams.",
  },
  {
    step: "Program",
    description: "8 weeks of intensive mentorship, workshops, and community building.",
  },
  {
    step: "Demo Day",
    description: "Pitch to investors and compete in the Columbia Venture Competition.",
  },
];

const requirements = [
  "1-6 founders per team",
  "At least one current Columbia undergraduate, graduate, or recent alumnus (within 5 years)",
  "Evidence of market validation or initial product-market fit efforts",
  "Commitment to attending mandatory Friday sessions (2-5pm) for 8 weeks",
  "Willingness to prioritize growth during the program",
];

export default function Apply() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-300">
            Join Us
          </p>
          <h1
            className="mt-3 font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Apply to Almaworks
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Take your startup to the next level with Columbia&apos;s premier
            accelerator. No equity, no fees.
          </p>
        </div>
      </section>

      {/* Status Banner */}
      <section className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200">
              <svg
                className="h-4 w-4 text-amber-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-amber-800">
              Applications for <strong>Fall 2026</strong> will open soon.{" "}
              <a
                href="https://subscribepage.io/almaworked"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-amber-900"
              >
                Subscribe for updates
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-extrabold tracking-tight text-slate-900"
            style={{ fontSize: "var(--text-h2)" }}
          >
            How It Works
          </h2>
          <div className="mt-12 grid gap-0 md:grid-cols-4">
            {timeline.map((item, i) => (
              <div key={item.step} className="relative pb-10 pl-10 md:pb-0 md:pl-0 md:pr-8">
                {/* Connector line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-4 top-10 h-full w-px bg-navy-200 md:left-0 md:right-0 md:top-4 md:h-px md:w-full" />
                )}
                {/* Step number */}
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-xs font-bold text-white md:relative md:mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-navy-50" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            className="font-extrabold tracking-tight text-slate-900"
            style={{ fontSize: "var(--text-h2)" }}
          >
            What We Look For
          </h2>
          <ul className="mt-8 space-y-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-navy-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-slate-600">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-700">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">
            Ready to apply?
          </h2>
          <p className="mt-3 text-white/60">
            When applications open, you&apos;ll be able to submit directly from
            this page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://subscribepage.io/almaworked"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Stay Updated
            </a>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Learn About the Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
