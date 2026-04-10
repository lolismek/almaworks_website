import type { Metadata } from "next";
import { team } from "@/data/team";
import TeamCard from "@/components/team/TeamCard";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team and mentors behind Almaworks, Columbia's premier startup accelerator.",
};

const mentorAreas = [
  "Growth Strategy",
  "Product Development",
  "Fundraising",
  "Legal & Compliance",
  "Finance & Accounting",
  "Wellness & Resilience",
];

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B]/60">
            The People
          </p>
          <h1
            className="mt-3 tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            <span className="font-extrabold">Meet the </span>
            <span className="font-serif italic font-bold">Team</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
            The students and alumni driving Columbia&apos;s startup ecosystem forward.
          </p>
        </div>
      </section>

      {/* Student Team */}
      <section className="border-t border-warm-border bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-xl font-bold text-[#1A1A1A]">Student Leadership</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors — parallax banner */}
      <section className="relative flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/mentorship-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="text-4xl font-extrabold text-white lg:text-5xl">
            50+ mentors
          </p>
          <p className="mt-2 text-xl text-white/70">
            from the NYC startup ecosystem
          </p>
        </div>
      </section>

      {/* Mentor details */}
      <section className="bg-cream" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="max-w-xl text-lg text-[#6B6B6B]">
            Almaworks startups are advised by world-class mentors with expertise
            across every aspect of building a company — from organizations across
            the NYC startup ecosystem.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mentorAreas.map((area) => (
              <div key={area} className="border border-warm-border bg-cream-dark px-6 py-4">
                <p className="text-sm font-bold text-[#1A1A1A]">{area}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img
              src="/images/mentor-logos.png"
              alt="Mentor organizations including HubSpot, Cooley, SumAll, and more"
              className="mx-auto w-full max-w-2xl"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
