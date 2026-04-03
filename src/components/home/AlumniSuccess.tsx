import { notableAlumni } from "@/data/companies";

export default function AlumniSuccess() {
  return (
    <section className="bg-navy-800" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Our Alumni Have Gone On To...
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Almaworks graduates have been accepted to Y Combinator, TechStars,
            ERA, and more.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {notableAlumni.map((company) => (
            <div
              key={company.name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-lg font-bold text-white">{company.name}</h3>
              <p className="mt-1 text-xs text-white/50">{company.description}</p>
              {company.badge && (
                <span className="mt-3 inline-block rounded-full bg-accent-warm/20 px-3 py-1 text-xs font-semibold text-amber-300">
                  {company.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
