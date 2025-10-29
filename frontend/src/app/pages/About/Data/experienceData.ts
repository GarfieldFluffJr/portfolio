type Experience = {
  company: string;
  location: string;
  position: string;
  duration: string;
  description: string;
  tech: string[];
};

export const experienceData: Experience[] = [
  {
    company: "Gale (YC W25)",
    location: "San Francisco, CA, USA",
    position: "Software Engineer Intern",
    duration: "Oct 2025 - Present",
    description: "Incoming Winter 2026",
    tech: [],
  },
  {
    company: "Levanta Labs",
    location: "Toronto, ON, CA",
    position: "Software Engineer Intern",
    duration: "May 2025 - Aug 2025",
    description:
      "Devopling custom software solutions for clients ranging from early-stage SaaS companies to established B2B organizations. Implementing RESTful APIs with MySQL databases, and developing full-scale platforms with React and Docker.",
    tech: [
      "React",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Docker",
      "Tailwind.css",
      "Astro",
    ],
  },
  {
    company: "City of Toronto",
    location: "Toronto, ON, CA",
    position: "Lifeguard and Swim Instructor",
    duration: "Apr 2022 - Aug 2024",
    description:
      "Ensured patron safety and established good patron rapport. Operated pools and facilities and encouraged a welcoming environment. Taught and examined swim skills, received overwhelming patron satisfaction and supervisor recognition letter. Maintained 7 professional qualifications and completed 25+ training hours annually.",
    tech: [
      "National Lifeguard",
      "Standard First-Aid",
      "CPR-C",
      "Instructor",
      "Patron Rapport",
    ],
  },
  {
    company: "Christie Gardens",
    location: "Toronto, ON, CA",
    position: "Pianist",
    duration: "Jan 2023 - Jun 2023",
    description:
      "Organized and performed a piano concert at the local elderly home. Showcased my RCM 10 piano repertoire.",
    tech: ["RCM Piano 10"],
  },
  {
    company: "University of Toronto",
    location: "Toronto, ON, CA",
    position: "Mentor",
    duration: "Jul 2022 - Jul 2022",
    description:
      "Aided UofT students and professors in delivering engineering lectures and workshops. Facilitated an interactive, hands-on experience which resulted in increased learning of participants in the Jr. DEEP Enriched Engineering Program.",
    tech: [],
  },
  {
    company: "Feng Da Education",
    location: "Toronto, ON, CA",
    position: "Math Contest Tutor",
    duration: "Dec 2020 - Sept 2021",
    description:
      "Taught advanced, contest-level math concepts to 12-13 year olds by creating personalized lessons and weekly homework practice to engage and motivate students to learn in preparation of the Canadian Kangaroo Math Contest.",
    tech: [],
  },
];
