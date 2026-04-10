export default function Testimonial() {
  return (
    <section className="bg-cream-dark" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Visit.org logo — circular like old site */}
          <div className="shrink-0">
            <div className="h-64 w-64 overflow-hidden rounded-full lg:h-80 lg:w-80">
              <img
                src="/images/testimonial.png"
                alt="Visit.org"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div>
            <blockquote>
              <p className="font-serif italic text-xl leading-relaxed text-[#1A1A1A] lg:text-2xl">
                &ldquo;The Almaworks experience was super helpful and unique for
                us at visit.org. We expanded our NYC network of mentors,
                investors, and, most importantly, fellow entrepreneurs. The team
                was absolutely incredible in putting the program together, and
                creating a supportive, family-like environment.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8">
              <p className="text-base font-bold text-[#1A1A1A]">
                Michal Alter
              </p>
              <p className="text-sm text-[#6B6B6B]">CEO, Visit.org</p>
              <p className="mt-1 text-xs font-semibold text-badge-text">
                Two-time Inc. 5000 Honoree
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
