type Education = {
  name: string;
  location: string;
  degree: string;
  duration: string;
  notes: string[];
};

export const educationData: Education[] = [
  {
    name: "University of Waterloo",
    location: "Waterloo, ON, CA",
    degree: "Bachelor of Software Engineering",
    duration: "2024 - 2029",
    notes: [
      "Varsity Swimming (USPORTS Finalist, OUA Medalist, Rookie of the Year)",
    ],
  },
  {
    name: "Parkdale Collegiate Institute",
    location: "Toronto, ON, CA",
    degree: "International Baccalaureate + OSSD",
    duration: "2020 - 2024",
    notes: [
      "Varsity Swim Team (Captain, MVP)",
      "Coding Club Founder",
      "Announcements Team President",
    ],
  },
];
