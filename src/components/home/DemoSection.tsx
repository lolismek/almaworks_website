export default function DemoSection() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/demo-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
            Demo Day
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/60">
            Get funded
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Throughout the program, mentors will help you refine your pitch to
            get you in shape for Almaworks Demo Day, as well as the annual
            $250,000 Columbia Venture Competition.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Past Demo Days have included investors from
          </p>
          <img
            src="/images/investor-logos.png"
            alt="Demo Day investor organizations"
            className="mt-4 max-w-md invert opacity-60"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
    </section>
  );
}
