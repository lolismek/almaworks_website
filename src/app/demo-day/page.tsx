import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Day",
  description:
    "Almaworks Demo Day — where our cohort companies pitch to investors and compete in the Columbia Venture Competition.",
};

export default function DemoDay() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            The Main Event
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-serif italic font-bold">Demo Day</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            The culmination of each Almaworks cohort — founders pitch to a room
            full of investors, mentors, and the Columbia community.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-warm-border bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2
                className="font-extrabold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                What is Demo Day?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                After 8 weeks of intensive mentorship, workshops, and growth
                sprints, each cohort company presents their startup to an audience
                of investors, industry experts, and the broader Columbia community.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                Demo Day also serves as preparation for the annual{" "}
                <strong className="text-[#1A1A1A]">$250,000 Columbia Venture Competition</strong>,
                one of the largest university startup competitions in the country.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-warm-border bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B]/50">Format</p>
                <p className="mt-2 text-[#1A1A1A]">5-minute pitches followed by Q&A from investor panel</p>
              </div>
              <div className="rounded-xl border border-warm-border bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B]/50">Audience</p>
                <p className="mt-2 text-[#1A1A1A]">VCs, angel investors, Columbia faculty, and alumni entrepreneurs</p>
              </div>
              <div className="rounded-xl border border-warm-border bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B]/50">Next Demo Day</p>
                <p className="mt-2 text-[#1A1A1A]">End of Fall 2026 cohort — date TBA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor logos */}
      <section className="border-t border-warm-border bg-cream-dark" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Past investors from
          </h2>
          <img
            src="/images/investor-logos.png"
            alt="Demo Day investor organizations"
            className="mx-auto mt-10 max-w-lg opacity-50 grayscale"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-warm-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
            Interested in attending?
          </h2>
          <p className="mt-3 text-[#6B6B6B]">
            Investors and community members can request an invite to our next Demo Day.
          </p>
          <Link
            href="/get-involved"
            className="mt-8 inline-block rounded-full bg-[#1A1A1A] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#333] hover:shadow-lg"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
