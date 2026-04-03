import type { Metadata } from "next";
import { companies, notableAlumni, cohorts } from "@/data/companies";
import CompanyCard from "@/components/portfolio/CompanyCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore 100+ startups that have graduated from Almaworks, Columbia's premier startup accelerator.",
};

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-300">
            100+ Startups and Counting
          </p>
          <h1
            className="mt-3 font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Our Portfolio
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Meet the startups that have graduated from our accelerator and gone
            on to raise $150M+ collectively.
          </p>
        </div>
      </section>

      {/* Cohort sections */}
      {cohorts.map((cohort) => {
        const cohortCompanies = companies.filter((c) => c.cohort === cohort);
        return (
          <section
            key={cohort}
            className="border-b border-slate-100 bg-white"
            style={{ padding: "var(--spacing-section) 0" }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {cohort}
              </h2>
              <p className="mt-2 text-slate-500">
                {cohortCompanies.length} companies
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cohortCompanies.map((company) => (
                  <CompanyCard key={company.name} company={company} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Notable Alumni */}
      <section className="bg-navy-50" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="font-extrabold tracking-tight text-slate-900"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Notable Alumni
          </h2>
          <p className="mt-3 text-slate-500">
            Standout companies from previous cohorts.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notableAlumni.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
