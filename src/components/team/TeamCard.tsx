import type { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group text-center">
      <div className="mx-auto aspect-square w-40 overflow-hidden rounded-lg bg-cream-dark transition-all group-hover:shadow-md">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-bold text-[#6B6B6B]/30">{initials}</span>
          </div>
        )}
      </div>

      <h3 className="mt-4 text-sm font-bold text-[#1A1A1A]">
        {member.name}
      </h3>

      {member.role && (
        <p className="mt-0.5 text-xs text-[#6B6B6B]">{member.role}</p>
      )}

      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#6B6B6B] transition-colors hover:text-[#1A1A1A]"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}
