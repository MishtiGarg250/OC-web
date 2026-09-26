export interface SponsorItem {
  name: string;
  tier: string;
  logo: string;
  width: number;
  height: number;
  description: string;
  engagement: string;
  link?: string;
  highlight?: boolean;
}

export interface SponsorTierGroup {
  category: string;
  badge: string;
  description: string;
  sponsors: SponsorItem[];
}

export const sponsorTiers: SponsorTierGroup[] = [
  {
    category: "Title Partner",
    badge: "Principal Ecosystem Anchor",
    description: "Driving the foundational infrastructure and keynote tracks for OpenCode 2026.",
    sponsors: [
      {
        name: "Taskade",
        tier: "Title Partner",
        logo: "/logos_taskade.svg",
        width: 190,
        height: 70,
        highlight: true,
        description: "Collaborative AI workspace powering student builders, hackathon squads, and project workspaces.",
        engagement: "Sponsored flagship keynote + hands-on AI workflow build challenge",
        link: "https://www.taskade.com",
      },
    ],
  },
  {
    category: "Cloud & Compute Partners",
    badge: "Infrastructure Giants",
    description: "Providing high-speed compute, cloud credits, and deployment clinics for participants.",
    sponsors: [
      {
        name: "DigitalOcean",
        tier: "Cloud Partner",
        logo: "/logos_digital-ocean.svg",
        width: 190,
        height: 60,
        description: "Developer-loved cloud infrastructure for instant container and VM deployment.",
        engagement: "Cloud credits, scaling workshops, and production architecture clinics",
        link: "https://www.digitalocean.com",
      },
      {
        name: "UpCloud",
        tier: "Cloud Partner",
        logo: "/logos_upcloud.svg",
        width: 170,
        height: 55,
        description: "High-performance compute clusters and low-latency storage for rapid prototyping.",
        engagement: "Bare-metal performance sprint track + latency optimization masterclass",
        link: "https://upcloud.com",
      },
    ],
  },
  {
    category: "Web3 & Innovation Partners",
    badge: "Decentralized Pioneers",
    description: "Backing decentralized data, smart contracts, and next-gen blockchain applications.",
    sponsors: [
      {
        name: "Solana",
        tier: "Ecosystem Partner",
        logo: "/logos_solana.svg",
        width: 170,
        height: 55,
        description: "High-throughput blockchain engine powering fast, censorship-resistant decentralized apps.",
        engagement: "Web3 starter kits, developer bounties, and ecosystem mentor hours",
        link: "https://solana.com",
      },
      {
        name: "Filecoin",
        tier: "Innovation Partner",
        logo: "/logos_filecoin.svg",
        width: 170,
        height: 55,
        description: "Decentralized data storage and preservation layer powering open web applications.",
        engagement: "On-chain data storage challenge + decentralized storage bounties",
        link: "https://filecoin.io",
      },
      {
        name: "Polygon Labs",
        tier: "Innovation Partner",
        logo: "/logos_polygon.svg",
        width: 170,
        height: 55,
        description: "Zero-knowledge scaling protocols and Layer 2 Ethereum rollups.",
        engagement: "ZK-proof live demos, smart contract hack track + micro-grants",
        link: "https://polygon.technology",
      },
    ],
  },
  {
    category: "Developer Productivity Partners",
    badge: "Essential Dev Tools",
    description: "Empowering contributors with industry-standard code editors, IDEs, and automation suites.",
    sponsors: [
      {
        name: "GitHub",
        tier: "Productivity Partner",
        logo: "/logos_github.svg",
        width: 170,
        height: 55,
        description: "The world's leading developer and AI-powered collaboration platform.",
        engagement: "Maintainer AMAs, GitHub Actions deep-dives, and Copilot access",
        link: "https://github.com",
      },
      {
        name: "Replit",
        tier: "DevTools Partner",
        logo: "/logos_replit.svg",
        width: 170,
        height: 55,
        description: "Browser-first collaborative software creation and instant application hosting.",
        engagement: "Starter templates, hands-on build labs, and interactive judging demos",
        link: "https://replit.com",
      },
      {
        name: "JetBrains",
        tier: "Tooling Partner",
        logo: "/images/jetbrains.png",
        width: 160,
        height: 55,
        description: "Smart IDEs and developer tools for polyglot software engineering.",
        engagement: "All-Products educational pack licenses for top leaderboard finishers",
        link: "https://www.jetbrains.com",
      },
      {
        name: "1Password",
        tier: "Security Partner",
        logo: "/images/1password.svg",
        width: 160,
        height: 50,
        description: "Enterprise-grade credential and secrets management for engineering teams.",
        engagement: "Security best practices clinic + secrets scanning tooling",
        link: "https://1password.com",
      },
    ],
  },
  {
    category: "Government & Academic Patrons",
    badge: "Institutional Backing",
    description: "Fostering technology entrepreneurship, research excellence, and national innovation ecosystems.",
    sponsors: [
      {
        name: "EDII",
        tier: "Academic Patron",
        logo: "/images/EDII.png",
        width: 150,
        height: 60,
        description: "Entrepreneurship Development Institute of India fostering student ventures.",
        engagement: "Startup incubation mentorship + incubation grant pipeline",
      },
      {
        name: "DST",
        tier: "National Patron",
        logo: "/images/DST.png",
        width: 150,
        height: 60,
        description: "Department of Science and Technology, Government of India.",
        engagement: "National innovation endorsement and academic research mentorship",
      },
      {
        name: "NSTEDB",
        tier: "Innovation Patron",
        logo: "/images/NSTEDB.png",
        width: 150,
        height: 60,
        description: "National Science & Technology Entrepreneurship Development Board.",
        engagement: "Deep-tech incubation pathway and national patent facilitation",
      },
    ],
  },
];
