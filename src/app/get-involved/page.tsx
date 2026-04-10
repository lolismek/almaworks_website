import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Apply as a founder, become a mentor, or connect with Almaworks — Columbia's premier startup accelerator.",
};

const ways = [
  {
    title: "Apply as a Founder",
    description:
      "Join the next cohort and get 8 weeks of mentorship, resources, and community — with zero equity and zero fees.",
    details: [
      "1-6 founders per team",
      "At least one current Columbia affiliate (undergrad, grad, or recent alum within 5 years)",
      "Evidence of market validation or initial product-market fit",
      "Commitment to weekly Friday sessions (2-5pm) for 8 weeks",
    ],
    cta: "Applications for Fall 2026 will open soon",
    ctaLink: "https://subscribepage.io/almaworked",
    ctaLabel: "Subscribe for Updates",
  },
  {
    title: "Become a Mentor",
    description:
      "Share your expertise with the next generation of Columbia founders. We're always looking for mentors with experience in growth, product, fundraising, legal, finance, and wellness.",
    details: [
      "Flexible time commitment — office hours and workshops",
      "Direct access to high-potential student startups",
      "Join 50+ mentors from the NYC ecosystem",
    ],
    cta: "Interested in mentoring?",
    ctaLink: "mailto:almaworks@columbia.edu?subject=Mentor%20Interest",
    ctaLabel: "Reach Out",
  },
  {
    title: "Partner With Us",
    description:
      "Offer your product or service to our cohort companies and get in front of the next generation of Columbia startups.",
    details: [
      "Reach 100+ graduated startups and growing",
      "Direct exposure to Columbia's entrepreneurial community",
    ],
    cta: "Want to become a partner?",
    ctaLink: "mailto:almaworks@columbia.edu?subject=Partnership%20Interest",
    ctaLabel: "Get in Touch",
  },
];

export default function GetInvolved() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            Join the Community
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-serif italic font-bold">Get Involved</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            Whether you&apos;re a founder, mentor, investor, or partner — there&apos;s a
            place for you in the Almaworks community.
          </p>
        </div>
      </section>

      {/* Ways to get involved — full width cards, not indented columns */}
      <section className="border-t border-warm-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {ways.map((way, i) => (
            <div
              key={way.title}
              className={`grid gap-8 py-20 lg:grid-cols-2 lg:gap-16 ${
                i > 0 ? "border-t border-warm-border" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
                  {way.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#6B6B6B]">
                  {way.description}
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {way.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-[#6B6B6B]">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="text-sm text-[#6B6B6B]">{way.cta}</p>
                  <a
                    href={way.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-[#1A1A1A] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#333]"
                  >
                    {way.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-warm-border bg-cream-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Contact us
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B]">
            Have questions? We&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="mailto:almaworks@columbia.edu"
              className="text-base font-medium text-[#1A1A1A] underline underline-offset-4 hover:text-accent"
            >
              almaworks@columbia.edu
            </a>
            <a
              href="mailto:almaworkscu@gmail.com"
              className="text-base font-medium text-[#1A1A1A] underline underline-offset-4 hover:text-accent"
            >
              almaworkscu@gmail.com
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="https://instagram.com/alma.works/" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com/company/almaworks" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
