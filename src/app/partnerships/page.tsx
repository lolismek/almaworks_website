import type { Metadata } from "next";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Explore the exclusive partner perks available to Almaworks accelerator startups.",
};

export default function Partnerships() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-300">
            Exclusive Perks
          </p>
          <h1
            className="mt-3 font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Our Partners
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Almaworks teams get access to exclusive discounts and credits from
            leading startup tools and platforms.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="bg-white" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-navy-200 hover:shadow-lg"
              >
                {/* Icon placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-sm font-bold text-navy-700">
                  {partner.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {partner.description}
                </p>
                <div className="mt-4 rounded-lg bg-navy-50 p-3">
                  <p className="text-sm font-medium text-navy-800">
                    {partner.benefit}
                  </p>
                </div>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-800"
                  >
                    Learn more
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
