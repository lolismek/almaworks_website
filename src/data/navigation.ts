export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  {
    label: "Program",
    children: [
      { label: "Partnerships", href: "/partnerships" },
      { label: "Demo Day", href: "/demo-day" },
      { label: "Cohort Updates", href: "/updates" },
    ],
  },
] as const;
