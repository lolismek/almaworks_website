import Link from "next/link";
import { companies, notableAlumni } from "@/data/companies";

export default function AlumniSuccess() {
  return (
    <section className="bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <h2
              className="font-serif italic font-bold tracking-tight text-[#1A1A1A]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Our portfolio
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B]">
              Almaworks graduates have been accepted to Y Combinator, TechStars,
              ERA, and more.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-sm font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-accent sm:block"
          >
            View all companies
          </Link>
        </div>

        {/* Company cards — large, clean white cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.slice(0, 6).map((company) => (
            <div
              key={company.name}
              className="group overflow-hidden border border-warm-border bg-white transition-all hover:shadow-md"
            >
              <div className="flex h-44 items-center justify-center bg-white p-8">
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-warm-border p-5">
                <h3 className="text-base font-bold text-[#1A1A1A]">{company.name}</h3>
                <p className="mt-1 text-sm text-[#6B6B6B] line-clamp-2">{company.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notable Alumni — prominent cards */}
        <div className="mt-16 border-t border-warm-border pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]/60">
            Notable Alumni
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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

        <Link
          href="/portfolio"
          className="mt-8 inline-block text-sm font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-accent sm:hidden"
        >
          View all companies
        </Link>
      </div>
    </section>
  );
}
