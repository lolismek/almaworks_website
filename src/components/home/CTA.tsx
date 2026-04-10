import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/feedback-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/75" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/70">
          No equity. No fees. Just the support, mentorship, and resources you
          need to succeed.
        </p>
        <p className="mx-auto mt-2 text-sm text-white/50">
          We don&apos;t take any equity, IP, or fees. Space is limited and extremely competitive.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/get-involved"
            className="bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Get Involved
          </Link>
          <Link
            href="/portfolio"
            className="border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            View Portfolio
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/40">
          Not a founder? We also host initiatives through{" "}
          <a
            href="https://coreatcu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white/60"
          >
            CORE
          </a>
          .
        </p>
      </div>
    </section>
  );
}
