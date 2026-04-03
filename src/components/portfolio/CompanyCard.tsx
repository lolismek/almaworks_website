import type { Company } from "@/data/companies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-navy-200 hover:shadow-lg">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
        {company.logoUrl ? (
          <img
            src={company.logoUrl}
            alt={`${company.name} logo`}
            className="h-full w-full object-contain p-1"
          />
        ) : (
          <span className="text-lg font-bold text-slate-400">
            {company.name.charAt(0)}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900">
        {company.name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">
        {company.description}
      </p>
      {company.badge && (
        <span className="mt-3 inline-block rounded-full bg-accent-warm/10 px-3 py-1 text-xs font-semibold text-amber-600">
          {company.badge}
        </span>
      )}
    </div>
  );
}
