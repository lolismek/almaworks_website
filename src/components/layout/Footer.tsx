import Link from "next/link";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/alma.works/" },
      { label: "LinkedIn", href: "https://linkedin.com/company/almaworks" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "almaworks@columbia.edu", href: "mailto:almaworks@columbia.edu" },
      { label: "almaworkscu@gmail.com", href: "mailto:almaworkscu@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold tracking-tight">
              ALMAWORKS
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Columbia University&apos;s premier startup accelerator. No equity.
              No fees. Just support.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
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

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Almaworks &mdash; Columbia
          University
        </div>
      </div>
    </footer>
  );
}
