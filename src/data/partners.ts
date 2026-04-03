export interface Partner {
  name: string;
  description: string;
  benefit: string;
  link?: string;
}

export const partners: Partner[] = [
  {
    name: "Brex",
    description: "AI-powered spend platform for startups",
    benefit: "50,000 points sign-up bonus, $200k+ SaaS discounts including $2,500 OpenAI credits and $5k AWS",
    link: "https://brex.com/almaworks",
  },
  {
    name: "Airtable",
    description: "No-code database and spreadsheet platform",
    benefit: "$2,000 free credit + swag kit",
  },
  {
    name: "Deel",
    description: "Global HR and talent management platform",
    benefit: "3 months free, then 30% off",
  },
  {
    name: "Intercom",
    description: "AI-first customer service platform",
    benefit: "1-year discount for startups under $1M funding",
  },
  {
    name: "Pilot",
    description: "Bookkeeping and finance services",
    benefit: "20% off for 6 months, 10% off CFO services",
    link: "https://pilot.com/partner/almaworksaccelerator",
  },
  {
    name: "Zendesk",
    description: "Customer service software",
    benefit: "6 months free access to Suite and Sales CRM",
  },
  {
    name: "Gusto",
    description: "Payroll, benefits, and HR platform",
    benefit: "3 months free access",
  },
  {
    name: "Carta",
    description: "Cap table and equity management",
    benefit: "Automatic Launch program eligibility",
  },
  {
    name: "Columbia Startup Lab",
    description: "Co-working space in SoHo, NYC",
    benefit: "Subsidized workspace and programming",
  },
];
