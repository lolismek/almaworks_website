const highlights = [
  {
    title: "World-Class Mentorship",
    description:
      "50+ mentors from the NYC startup ecosystem covering growth, product, funding, legal, finance, and wellness.",
  },
  {
    title: "VC & Investor Access",
    description:
      "Direct connections to venture capitalists and angel investors through our extensive network and Demo Day events.",
  },
  {
    title: "Columbia Startup Lab",
    description:
      "Subsidized co-working space in SoHo through Columbia Startup Lab, plus campus facilities and resources.",
  },
  {
    title: "Demo Day & Pitch Prep",
    description:
      "Refine your pitch and present to investors. Prepare for the annual $250,000 Columbia Venture Competition.",
  },
  {
    title: "Campus Resources",
    description:
      "Access student product testers, resume distribution, campus media reach of 13,000+ subscribers, and more.",
  },
  {
    title: "Zero Equity, Zero Fees",
    description:
      "We take no equity, no IP, and charge no fees. Our only goal is to help Columbia founders succeed.",
  },
];

const mentorAreas = [
  "Growth Strategy",
  "Product Development",
  "Fundraising",
  "Legal & Compliance",
  "Finance & Accounting",
  "Wellness & Resilience",
];

export default function ProgramHighlights() {
  return (
    <section className="bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            What we offer
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B]">
            Everything you need to turn your idea into a thriving startup — backed
            by Columbia&apos;s entrepreneurial ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-warm-border bg-warm-border sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-cream p-8 transition-colors hover:bg-cream-dark"
            >
              <h3 className="text-lg font-bold text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mentor areas — flat rectangles */}
        <div className="mt-20">
          <h3
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            50+ Mentors
          </h3>
          <p className="mt-4 max-w-xl text-lg text-[#6B6B6B]">
            Almaworks startups are advised by world-class mentors with expertise
            across every aspect of building a company — from organizations across
            the NYC startup ecosystem.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mentorAreas.map((area) => (
              <div
                key={area}
                className="border border-warm-border bg-cream-dark px-6 py-4"
              >
                <p className="text-sm font-bold text-[#1A1A1A]">{area}</p>
              </div>
            ))}
          </div>

          {/* Mentor logos — centered, full width */}
          <div className="mt-12 text-center">
            <img
              src="/images/mentor-logos.png"
              alt="Mentor organizations including HubSpot, Cooley, SumAll, and more"
              className="mx-auto w-full max-w-2xl"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
