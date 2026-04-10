import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
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
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            Our Mission
          </p>
          <h1
            className="mt-3 max-w-3xl tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-extrabold">About </span>
            <span className="font-serif italic font-bold">Almaworks</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            Almaworks is Columbia University&apos;s premier startup accelerator,
            part of the broader{" "}
            <a
              href="https://coreatcu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] underline underline-offset-4 hover:text-accent"
            >
              CORE
            </a>{" "}
            entrepreneurship initiative. We provide mentorship, resources, and
            community — never taking equity, IP, or fees.
          </p>
        </div>
      </section>

      {/* Mission banner — dark bg image */}
      <section className="relative flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/mentorship-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
          <blockquote>
            <p className="font-serif italic text-2xl leading-relaxed text-white lg:text-3xl">
              &ldquo;We don&apos;t take any equity, IP, or fees. Our only goal
              is to help Columbia founders succeed.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            How it works
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-serif text-5xl font-bold text-warm-border">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program perks */}
      <section className="border-t border-warm-border bg-cream-dark" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-extrabold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Program Perks
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#6B6B6B]">
            Almaworks is built for founders. We offer cohort companies a unique set
            of value-adds, including world-class mentorship from experts in the NYC
            startup ecosystem, access to VCs and investors, resources from Columbia
            Startup Lab, and more.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-[#6B6B6B]">
            As a Columbia University-led initiative, we&apos;re also able to offer
            unprecedented access to the Columbia community: student product testers,
            resume drops, campus space reservations, and campus media that collectively
            reach more than 13,000 subscribers and followers.
          </p>
        </div>
      </section>

      {/* Eligibility + Mentors */}
      <section className="border-t border-warm-border bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2
                className="font-extrabold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Who Can Apply
              </h2>
              <ul className="mt-8 space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="font-extrabold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                50+ Mentors
              </h2>
              <p className="mt-4 text-lg text-[#6B6B6B]">
                Expert mentors covering every aspect of building a company.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {mentorAreas.map((area) => (
                  <div key={area} className="border border-warm-border bg-cream-dark px-4 py-3">
                    <p className="text-sm font-bold text-[#1A1A1A]">{area}</p>
                  </div>
                ))}
              </div>
              <img
                src="/images/mentor-logos.png"
                alt="Mentor organizations"
                className="mt-6 w-full"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Day banner */}
      <section className="relative flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/demo-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
            Demo Day
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Pitch to a room full of investors and compete for the annual $250,000
            Columbia Venture Competition.
          </p>
          <img
            src="/images/investor-logos.png"
            alt="Investor organizations"
            className="mt-8 max-w-sm invert opacity-50"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
            Ready to join the next cohort?
          </h2>
          <p className="mt-3 text-[#6B6B6B]">
            Applications for Fall 2026 open soon.
          </p>
          <Link
            href="/get-involved"
            className="mt-8 inline-block bg-[#1A1A1A] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#333]"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
