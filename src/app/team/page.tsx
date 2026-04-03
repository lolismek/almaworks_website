import type { Metadata } from "next";
import { team } from "@/data/team";
import TeamCard from "@/components/team/TeamCard";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Almaworks, Columbia's premier startup accelerator.",
};

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-300">
            The People
          </p>
          <h1
            className="mt-3 font-extrabold tracking-tight text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Meet the Team
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            The students and alumni driving Columbia&apos;s startup ecosystem forward.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
