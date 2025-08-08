import type { IconType } from "react-icons";
import { FiBook, FiMusic } from "react-icons/fi";
import { FaSwimmer } from "react-icons/fa";

type Honours = {
  name: string;
  date: string;
  icon: IconType;
  status: string;
  description: string;
};

export const HonoursData: Honours[] = [
  {
    name: "Governor General's Medal of Canada",
    date: "Jun 2024",
    icon: FiBook,
    status: "Award Recipient",
    description:
      "Ranked 1 out of my graduating class of 2024. Awarded for the highest academic average in high school.",
  },
  {
    name: "Paris 2024 Olympic Trials",
    date: "Apr 2024",
    icon: FaSwimmer,
    status: "Qualifier",
    description:
      "Canadian Olympic Swimming Trials Qualifier. Canadian Nationals Finalist (9th). Ontario Provincials Silver Medalist.",
  },
  {
    name: "RCM Piano Level 10",
    date: "Apr 2023",
    icon: FiMusic,
    status: "First-Class Honours",
    description:
      "Graduated the Royal Conservatory of Music Level 10 Piano Curriculum, the highest level before earning a professional degree.",
  },
];
