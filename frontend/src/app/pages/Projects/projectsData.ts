type Project = {
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  demoLink: string;
  techStack: string[];
};

export const projectsData: Project[] = [
  {
    name: "Cook Buddy",
    description:
      "A friendly, interactive AI assistant who not only cooks alongside you but adapts recipes to fit whatever ingredients you have on hand. Has gas and heat sensors to provide safety and real-time data on cooking. Users are able to have fully-fledged conversations. Processed 2+ million data points with OpenAI's Batch API to fine-tune LLaMa LLM to generate recipes.",
    githubLink: "https://github.com/GarfieldFluffJr/Cook-Buddy",
    liveLink: "",
    demoLink: "https://www.youtube.com/watch?v=q-WvIjfFc7Q&ab_channel=Louie",
    techStack: [
      "Python",
      "Raspberry Pi",
      "OpenAI",
      "LLaMa 3.1",
      "GCP",
      "HTML/CSS/JS",
      "Unsloth",
      "Hugging Face",
    ],
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcases everything I've done, ranging from my professional experiences to my swim career! Uses Framer Motion for smooth animations. Backend server was built using Node.js and server-side REST api routes were implemented using Express.js. Resend external api was used for emailing service with rate limiting. Frontend hosted on Vercel and backend on Render, stored in a mono repo.",
    githubLink: "https://github.com/GarfieldFluffJr/portfolio",
    liveLink: "",
    demoLink: "",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Framer Motion",
    ],
  },
];
