import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,52,96,0.4)_0%,_transparent_60%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-300">
            Columbia University
          </p>
          <h1
            className="font-extrabold leading-[1.08] tracking-tight text-white"
            style={{ fontSize: "var(--text-display)" }}
          >
            Columbia&apos;s Premier
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Startup Accelerator
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            We help student founders build, launch, and scale — with zero equity
            and zero fees. Over 100 startups have graduated and collectively
            raised $150M+.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
