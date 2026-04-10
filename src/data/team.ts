export interface TeamMember {
  name: string;
  role?: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    name: "Ella Sy",
    imageUrl: "/images/team/ella-sy.png",
    linkedinUrl: "https://linkedin.com/in/ella-sy-9846a52a7",
  },
  {
    name: "Sophia Huh",
    imageUrl: "/images/team/sophia-huh.png",
    linkedinUrl: "https://linkedin.com/in/sherrytaoxy",
  },
  {
    name: "Esra Lepadatu",
    imageUrl: "/images/team/esra-lepadatu.png",
    linkedinUrl: "https://linkedin.com/in/esralepadatu",
  },
  {
    name: "Caitlyn Tang",
    imageUrl: "/images/team/caitlyn-tang.png",
  },
  {
    name: "Kelly Trinh",
    imageUrl: "/images/team/kelly-trinh.png",
    linkedinUrl: "https://linkedin.com/in/trinhkelly",
  },
  {
    name: "Alexandru-Iulius Jerpelea",
    imageUrl: "/images/team/alexandru-jerpelea.png",
    linkedinUrl: "https://linkedin.com/in/alexandru-iulius-jerpelea-5828b2181",
  },
  {
    name: "Arm Komolhiran",
    imageUrl: "/images/team/arm-komolhiran.png",
  },
  {
    name: "Siddharth Rout",
    imageUrl: "/images/team/siddharth-rout.png",
    linkedinUrl: "https://linkedin.com/in/siddharth-rout-69a0191b9",
  },
];

export const mentors: TeamMember[] = [
  { name: "Growth Strategy Mentors", role: "Startup Growth & Scaling" },
  { name: "Product Development Mentors", role: "Product & Engineering" },
  { name: "Fundraising Mentors", role: "VC & Angel Investment" },
  { name: "Legal & Compliance Mentors", role: "Legal & Regulatory" },
  { name: "Finance & Accounting Mentors", role: "Financial Strategy" },
  { name: "Wellness & Resilience Mentors", role: "Founder Wellness" },
];
