export interface Company {
  name: string;
  description: string;
  logoUrl: string;
  cohort: string;
  website?: string;
  notable?: boolean;
  badge?: string;
}

export const companies: Company[] = [
  // Fall 2025
  {
    name: "Dawn",
    description: "AR glasses with AI software for manufacturing worker training and skill development",
    logoUrl: "/images/companies/dawn.png",
    cohort: "Fall 2025",
  },
  {
    name: "ReGlove",
    description: "AI-powered rehabilitation glove designed to help stroke survivors regain motor control",
    logoUrl: "/images/companies/reglove.png",
    cohort: "Fall 2025",
  },
  {
    name: "Ludus",
    description: "Automated flashcard creation tool for language learners with pre-loaded dictionaries",
    logoUrl: "/images/companies/ludus.png",
    cohort: "Fall 2025",
  },
  {
    name: "Hearify",
    description: "Application that eases aural rehabilitation for the hard-of-hearing community",
    logoUrl: "/images/companies/hearify.png",
    cohort: "Fall 2025",
  },
  {
    name: "Wagoo",
    description: "Voice-activated productivity assistant with hundreds of integrations for task automation",
    logoUrl: "/images/companies/wagoo.png",
    cohort: "Fall 2025",
  },
  {
    name: "Vitband",
    description: "Wearable device that tracks muscles in real time using sEMG technology for athletes",
    logoUrl: "/images/companies/vitband.png",
    cohort: "Fall 2025",
  },
  {
    name: "PollenPal",
    description: "AI beehive monitoring system detecting threats via computer vision and sensors",
    logoUrl: "/images/companies/pollenpal.png",
    cohort: "Fall 2025",
  },
  // Spring 2025
  {
    name: "Manglovo Health",
    description: "Biotech firm developing hormone-free oral contraceptive therapeutics",
    logoUrl: "/images/companies/manglovo.png",
    cohort: "Spring 2025",
  },
  {
    name: "ROA",
    description: "AI-powered SaaS platform revolutionizing restaurant operations addressing waste and labor issues",
    logoUrl: "/images/companies/roa.png",
    cohort: "Spring 2025",
  },
  {
    name: "Silo",
    description: "Automated portfolio generator for engineers using LLM technology",
    logoUrl: "/images/companies/silo.png",
    cohort: "Spring 2025",
  },
  {
    name: "Saturn",
    description: "Blockchain-based mutual fund on Solana offering diversified digital asset exposure",
    logoUrl: "/images/companies/saturn.png",
    cohort: "Spring 2025",
  },
  {
    name: "SWERV",
    description: "Consumer ventilation product made to improve human health and comfort with air filtering",
    logoUrl: "/images/companies/swerv.png",
    cohort: "Spring 2025",
  },
  {
    name: "Sante Health",
    description: "AI machine learning platform predicting infectious disease outbreaks for health systems",
    logoUrl: "/images/companies/sante.jpg",
    cohort: "Spring 2025",
  },
];

export const notableAlumni: Company[] = [
  {
    name: "Coursedog",
    description: "Academic operations platform",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
    badge: "YC W19",
  },
  {
    name: "The Clear Cut",
    description: "Diamond buying platform",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
    badge: "Techstars / Forbes 30U30",
  },
  {
    name: "Visit.org",
    description: "Social impact experience marketplace",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
    badge: "Inc. 5000 (2x)",
  },
  {
    name: "Battlecard",
    description: "Competitive intelligence platform",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
    badge: "YC W20",
  },
  {
    name: "Wheeli",
    description: "Ride-sharing for women",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
    badge: "Techstars '17",
  },
  {
    name: "FINDMINE",
    description: "AI-powered outfit recommendations",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
  },
  {
    name: "Behold.ai",
    description: "AI radiology diagnostics",
    logoUrl: "",
    cohort: "Alumni",
    notable: true,
  },
];

export const cohorts = [...new Set(companies.map((c) => c.cohort))];
