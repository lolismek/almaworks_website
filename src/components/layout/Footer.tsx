import Link from "next/link";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
      { label: "Demo Day", href: "/demo-day" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Apply as Founder", href: "/get-involved" },
      { label: "Become a Mentor", href: "/get-involved" },
      { label: "Cohort Updates", href: "/updates" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/alma.works/" },
      { label: "LinkedIn", href: "https://linkedin.com/company/almaworks" },
      { label: "almaworks@columbia.edu", href: "mailto:almaworks@columbia.edu" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-border bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/images/logo-color.png" alt="Almaworks" className="h-8 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
              Columbia University&apos;s premier startup accelerator. No equity.
              No fees. Just support.
            </p>
            <a
              href="https://coreatcu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <img
                src="/images/core-logo.png"
                alt="CORE at Columbia University"
                className="h-6 w-auto opacity-40 transition-opacity hover:opacity-70"
              />
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]/50">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] transition-colors hover:text-[#1A1A1A]"
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-warm-border pt-8 text-center text-xs text-[#6B6B6B]/50">
          &copy; {new Date().getFullYear()} Almaworks &mdash; Columbia University
        </div>
      </div>
    </footer>
  );
}
