export default function Mentorship() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/mentorship-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        <p className="text-5xl font-extrabold text-white lg:text-7xl">
          50+ mentors
        </p>
        <p className="mt-4 text-3xl font-extrabold text-white lg:text-5xl">
          5+ startups
        </p>
      </div>
    </section>
  );
}
