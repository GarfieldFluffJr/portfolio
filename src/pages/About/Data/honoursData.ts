import type { IconType } from "react-icons";
import { FiBook } from "react-icons/fi";
import { FaSwimmer } from "react-icons/fa";

type Honours = {
  name: string;
  date: string;
  icon: IconType;
  description: string;
};

export const HonoursData: Honours[] = [
  {
    name: "Governor General's Academic Medal of Canada",
    date: "Jun 2024",
    icon: FiBook,
    description: "text here",
  },
  {
    name: "Swim",
    date: "Apr, 2024",
    icon: FaSwimmer,
    description: "text here",
  },
];
