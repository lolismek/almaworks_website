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
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            Exclusive Perks
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-extrabold">Our </span>
            <span className="font-serif italic font-bold">Partners</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            Almaworks teams get access to exclusive discounts and credits from
            leading startup tools and platforms.
          </p>
        </div>
      </section>

      {/* Partners list — clean table-like layout, no awkward icon boxes */}
      <section className="border-t border-warm-border bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="divide-y divide-warm-border">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group py-8 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B6B6B]">
                      {partner.description}
                    </p>
                  </div>
                  <div className="sm:text-right sm:ml-8 shrink-0">
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      {partner.benefit}
                    </p>
                    {partner.link && (
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                      >
                        Learn more
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
