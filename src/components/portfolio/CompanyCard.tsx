import type { Company } from "@/data/companies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="group overflow-hidden border border-warm-border bg-white transition-all hover:shadow-md">
      {/* Logo area — generous, white background */}
      <div className="flex h-44 items-center justify-center bg-white p-8">
        {company.logoUrl ? (
          <img
            src={company.logoUrl}
            alt={`${company.name} logo`}
            className="max-h-full max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-3xl font-bold text-[#6B6B6B]/20">
            {company.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="border-t border-warm-border p-5">
        <h3 className="text-base font-bold text-[#1A1A1A]">{company.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
          {company.description}
        </p>
        {company.badge && (
          <span className="mt-3 inline-block bg-badge-bg px-3 py-1 text-xs font-semibold text-badge-text">
            {company.badge}
          </span>
        )}
      </div>
    </div>
  );
}
