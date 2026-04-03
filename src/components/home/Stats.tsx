const stats = [
  { value: "100+", label: "Graduated Startups" },
  { value: "$150M+", label: "Collectively Raised" },
  { value: "50+", label: "Expert Mentors" },
  { value: "$250K", label: "Annual Competition Prize" },
];

export default function Stats() {
  return (
    <section className="border-b border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
