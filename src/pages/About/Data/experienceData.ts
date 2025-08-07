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
];
