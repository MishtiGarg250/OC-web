export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "contributor" | "sponsor";
}

export const faqData: FAQItem[] = [
  // Contributor FAQs
  {
    id: "eligibility",
    category: "contributor",
    question: "Who is eligible to participate in OpenCode?",
    answer: "OpenCode is open to all students, developers, and tech enthusiasts worldwide regardless of university or background. Whether you are an undergraduate, postgraduate, or self-taught developer, you are welcome to register and contribute.",
  },
  {
    id: "beginner-friendly",
    category: "contributor",
    question: "I have never made a Git Pull Request before. Can I participate?",
    answer: "Absolutely! OpenCode is intentionally engineered for beginners. Repositories include issues tagged 'good-first-issue' and mentors host beginner-friendly Git workshops and office hours on Discord to guide you step-by-step.",
  },
  {
    id: "how-to-contribute",
    category: "contributor",
    question: "How does the issue claiming and PR submission workflow work?",
    answer: "Browse our project repositories, find an unassigned issue, and comment to claim it. Once assigned by a project mentor, write your solution locally, push to your fork, and open a Pull Request. After mentor review and approval, your PR is merged and points are awarded to the live leaderboard.",
  },
  {
    id: "prizes-and-certificates",
    category: "contributor",
    question: "What prizes, rewards, and recognitions do contributors receive?",
    answer: "Top leaderboard finishers receive cash bounties, developer swag boxes, sponsor credits (such as JetBrains and DigitalOcean perks), and verified certificates of achievement. All contributors with at least one merged PR receive an official OpenCode participation certificate.",
  },
  {
    id: "community-support",
    category: "contributor",
    question: "Where do discussions, mentoring, and technical doubts take place?",
    answer: "All communication happens in our active Discord community. Every project has dedicated channels where mentors, maintainers, and peers collaborate in real time.",
  },

  // Sponsor FAQs
  {
    id: "sponsor-benefits",
    category: "sponsor",
    question: "What are the primary benefits of sponsoring OpenCode 2026?",
    answer: "Sponsors gain direct visibility across 2,500+ top engineering students, early access to pre-vetted developer talent for internship and full-time hiring, opportunities to drive developer adoption for their APIs and developer tools, and prominent branding across all digital and on-campus collateral.",
  },
  {
    id: "custom-tracks",
    category: "sponsor",
    question: "Can our company propose a custom challenge track or bounty?",
    answer: "Yes! Tier partners can sponsor bespoke challenge tracks focused on their SDKs, protocols, cloud platforms, or APIs. Our team assists in designing problem statements, judging criteria, and dedicated workshop sessions.",
  },
  {
    id: "talent-acquisition",
    category: "sponsor",
    question: "How does the talent pipeline and recruitment access work for partners?",
    answer: "Depending on your sponsorship tier, partners receive opt-in participant resumes, leaderboard performance metrics, priority access for hiring AMAs, and the opportunity to extend interview invites directly to top contributors.",
  },
  {
    id: "brochure-and-tiers",
    category: "sponsor",
    question: "Where can we download the official sponsorship prospectus?",
    answer: "You can download our complete sponsorship brochure directly via the 'Download Brochure' button on this site, or contact our corporate outreach leads at geekhaven@iiita.ac.in for custom deliverables.",
  },
  {
    id: "registration-process",
    category: "sponsor",
    question: "How can our team register or schedule an exploratory call?",
    answer: "Simply submit your company details through our online Sponsor Registration Form (/sponsor-registration) or reach out to our corporate relations coordinators directly by phone or email. Our team responds within 24 hours.",
  },
];
