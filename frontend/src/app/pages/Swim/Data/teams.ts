type Team = {
  name: String;
  duration: String;
  location: String;
  notes: String[];
  imageLink: string;
  imageAltText: string;
};

export const Teams: Team[] = [
  {
    name: "University of Waterloo Varsity Team",
    duration: "2024 - Present",
    location: "Waterloo, ON, CA",
    notes: [
      "USPORTS National Finalist",
      "OUA Provincial Medalist",
      "Rookie of the Year",
      "USPORTS Academic All-Canadian",
    ],
    imageLink: "/images/Swim/Varsity.jpg",
    imageAltText: "Waterloo Varsity Photo",
  },
  {
    name: "York Swim Club",
    duration: "2022 - 2024",
    location: "Toronto, ON, CA",
    notes: [
      "Olympic Trials Qualifier",
      "Nationals Finalist",
      "Provincial Medalist",
      "Club Record Holder",
    ],
    imageLink: "/images/Swim/York.jpg",
    imageAltText: "York Swim Club Photo",
  },
  {
    name: "Richmond Hill Swimming Dragons",
    duration: "2012 - 2022",
    location: "Richmond Hill, ON, CA",
    notes: [
      "Junior Provincial Finalist",
      "Festivals Finalist",
      "Learned to swim!",
    ],
    imageLink: "/images/Swim/RHSD.jpg",
    imageAltText: "RHSD Club Photo",
  },
];
