"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 100, prefix: "", suffix: "+", label: "Graduated Startups" },
  { end: 150, prefix: "$", suffix: "M+", label: "Collectively Raised" },
  { end: 50, prefix: "", suffix: "+", label: "Expert Mentors" },
  { end: 250, prefix: "$", suffix: "K", label: "Annual Competition Prize" },
];

function useCountUp(end: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, started]);

  return value;
}

function StatItem({ stat, started, index }: {
  stat: typeof stats[number];
  started: boolean;
  index: number;
}) {
  const value = useCountUp(stat.end, 1500 + index * 200, started);

  return (
    <div
      className={`${
        index < stats.length - 1 ? "lg:border-r lg:border-warm-border lg:pr-8" : ""
      }`}
    >
      <p className="font-serif text-5xl font-bold tracking-tight text-[#1A1A1A] lg:text-6xl">
        {stat.prefix}{value}{stat.suffix}
      </p>
      <p className="mt-3 text-sm font-medium text-[#6B6B6B]">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>

        {/* As Featured In — centered, full width */}
        <div className="mt-20 border-t border-warm-border pt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]/60">
            As featured in
          </p>
          <img
            src="/images/press-logos.png"
            alt="Featured in AlleyWatch, Technical.ly, New York Business Journal, Columbia Spectator, Columbia College Today"
            className="mx-auto mt-8 w-full max-w-2xl"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </section>
  );
}
