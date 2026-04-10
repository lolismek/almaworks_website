import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1A1A1A]/60" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="leading-[1.08] tracking-tight text-white" style={{ fontSize: "var(--text-display)" }}>
            <span className="font-extrabold">Columbia&apos;s home for</span>
            <br />
            <span className="font-serif italic font-bold">ambitious founders</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Almaworks takes no equity and helps early-stage startups run by
            Columbia-affiliated student entrepreneurs achieve significant,
            sustainable growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/get-involved"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Get Involved
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
