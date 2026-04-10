import type { Metadata } from "next";
import { companies, notableAlumni, cohorts } from "@/data/companies";
import CompanyCard from "@/components/portfolio/CompanyCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore 100+ startups that have graduated from Almaworks, Columbia's premier startup accelerator.",
};

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            100+ Startups and Counting
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-extrabold">Our </span>
            <span className="font-serif italic font-bold">Portfolio</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            Almaworks companies represent the best and brightest student minds in
            New York City. Our graduates have collectively raised more than $150M
            in funding.
          </p>
        </div>
      </section>

      {/* Cohort sections */}
      {cohorts.map((cohort) => {
        const cohortCompanies = companies.filter((c) => c.cohort === cohort);
        return (
          <section
            key={cohort}
            className="border-t border-warm-border bg-cream"
            style={{ padding: "var(--spacing-section) 0" }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
                {cohort}
              </h2>
              <p className="mt-1 text-[#6B6B6B]">
                {cohortCompanies.length} companies
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cohortCompanies.map((company) => (
                  <CompanyCard key={company.name} company={company} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Notable Alumni — pill badges, not cards */}
      <section className="border-t border-warm-border bg-cream-dark" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Notable Alumni
          </h2>
          <p className="mt-3 text-[#6B6B6B]">
            Almaworks graduates have been accepted to Y Combinator, TechStars, ERA, and more.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {notableAlumni.map((company) => (
              <div
                key={company.name}
                className="border border-warm-border bg-white px-6 py-5"
              >
                <p className="text-lg font-bold text-[#1A1A1A]">{company.name}</p>
                <p className="mt-1 text-sm text-[#6B6B6B]">{company.description}</p>
                {company.badge && (
                  <p className="mt-2 text-xs font-semibold text-badge-text">{company.badge}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-warm-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1A1A1A]">
            Want to see your startup here?
          </h2>
          <p className="mt-3 text-[#6B6B6B]">
            Applications for the next cohort open soon.
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
