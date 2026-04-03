import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Program",
  description:
    "Learn about Almaworks, Columbia University's 8-week startup accelerator program for student founders.",
};

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with your team info, product details, and growth plan.",
  },
  {
    number: "02",
    title: "8-Week Program",
    description:
      "Mandatory Friday sessions (2-5pm), mentor office hours, workshops, and community networking.",
  },
  {
    number: "03",
    title: "Demo Day",
    description:
      "Pitch to investors and compete for the $250,000 Columbia Venture Competition prize pool.",
  },
];

const eligibility = [
  "1-6 founders per team",
  "At least one current Columbia undergraduate, graduate, or recent alumnus (within 5 years)",
  "Strong commitment to growth prioritization during the 8-week period",
  "Evidence of market validation and initial product-market fit efforts",
];

const mentorAreas = [
  "Growth Strategy",
  "Product Development",
  "Fundraising",
  "Legal & Compliance",
  "Finance & Accounting",
  "Wellness & Resilience",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-300">
            The Program
          </p>
          <h1
            className="mt-3 max-w-2xl font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            About Almaworks
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Almaworks is Columbia University&apos;s premier startup accelerator,
            part of the broader{" "}
            <a
              href="https://coreatcu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-4 hover:text-white"
            >
              CORE
            </a>{" "}
            entrepreneurship initiative. We provide mentorship, resources, and
            community — never taking equity, IP, or fees.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy-50" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-extrabold tracking-tight text-slate-900"
            style={{ fontSize: "var(--text-h2)" }}
          >
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-extrabold text-navy-200">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-white" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Eligibility */}
            <div>
              <h2
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Who Can Apply
              </h2>
              <ul className="mt-8 space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentorship */}
            <div>
              <h2
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: "var(--text-h2)" }}
              >
                50+ Mentors
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                Expert mentors from the NYC startup ecosystem covering every
                aspect of building a company.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {mentorAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Ready to join the next cohort?
          </h2>
          <p className="mt-3 text-slate-500">
            Applications for Fall 2026 open soon.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-full bg-navy-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-600 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
