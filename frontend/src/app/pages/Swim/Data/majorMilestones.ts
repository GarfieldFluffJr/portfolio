import { FaSwimmer, FaTrophy, FaMedal } from "react-icons/fa";

import type { IconType } from "react-icons";

type Milestone = {
  title: String;
  icon: IconType;
  date: String;
  description: String;
};

export const majorMilestones: Milestone[] = [
  {
    title: "Paris 2024 Olympic Trials Qualifier",
    icon: FaSwimmer,
    date: "Apr 2024",
    description:
      "Canadian international team qualification. Highest domestic qualifying standard.",
  },
  {
    title: "2025 USPORTS National Finalist",
    icon: FaTrophy,
    date: "Mar 2025",
    description:
      "Finaled at the highest standard competition at the Canadian university level. 3x Ontario University Athletics Championships Medalist.",
  },
  {
    title: "2025 Rookie of the Year",
    icon: FaMedal,
    date: "Apr 2025",
    description:
      "University of Waterloo Men's Swimming 2025 Rookie of the Year.",
  },
];
