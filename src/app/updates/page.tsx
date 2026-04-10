import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cohort Updates",
  description:
    "Latest updates from Almaworks cohorts — news, milestones, and what our startups are building.",
};

const updates = [
  {
    date: "Spring 2026",
    title: "Spring 2026 Cohort Announced",
    description:
      "Our newest cohort is underway. Stay tuned for company announcements and Demo Day details.",
    current: true,
  },
  {
    date: "Fall 2025",
    title: "Fall 2025 Cohort Graduates",
    description:
      "7 companies graduated — Dawn, ReGlove, Ludus, Hearify, Wagoo, Vitband, and PollenPal — spanning AR/VR, healthtech, edtech, and climate.",
  },
  {
    date: "Spring 2025",
    title: "Spring 2025 Cohort Graduates",
    description:
      "6 companies graduated — Manglovo Health, ROA, Silo, Saturn, SWERV, and Sante Health — covering biotech, AI, blockchain, and consumer hardware.",
  },
];

export default function Updates() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            What&apos;s Happening
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-extrabold">Cohort </span>
            <span className="font-serif italic font-bold">Updates</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            News, milestones, and announcements from our cohorts.
          </p>
        </div>
      </section>

      {/* Updates — simple stacked cards */}
      <section className="border-t border-warm-border bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="divide-y divide-warm-border">
            {updates.map((update) => (
              <div key={update.title} className="py-10 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#6B6B6B]">
                    {update.date}
                  </p>
                  {update.current && (
                    <span className="bg-accent-light px-2.5 py-0.5 text-xs font-semibold text-accent">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-bold text-[#1A1A1A]">
                  {update.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[#6B6B6B]">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-warm-border bg-cream-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
            Stay in the loop
          </h2>
          <p className="mt-3 text-[#6B6B6B]">
            Subscribe to get updates on new cohorts and announcements.
          </p>
          <a
            href="https://subscribepage.io/almaworked"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#1A1A1A] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#333]"
          >
            Subscribe for Updates
          </a>
        </div>
      </section>
    </>
  );
}
