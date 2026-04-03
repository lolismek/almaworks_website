export default function Testimonial() {
  return (
    <section className="bg-white" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Quote mark */}
        <svg
          className="mx-auto h-10 w-10 text-navy-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        <blockquote className="mt-8">
          <p
            className="font-semibold leading-relaxed text-slate-800"
            style={{ fontSize: "var(--text-h3)" }}
          >
            The Almaworks experience was super helpful... creating a supportive,
            family-like environment.
          </p>
        </blockquote>

        <div className="mt-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-100 text-lg font-bold text-navy-700">
            MA
          </div>
          <p className="mt-4 text-base font-semibold text-slate-900">
            Michal Alter
          </p>
          <p className="text-sm text-slate-500">CEO, Visit.org</p>
          <p className="mt-1 text-xs font-medium text-accent-warm">
            Two-time Inc. 5000 Honoree
          </p>
        </div>
      </div>
    </section>
  );
}
