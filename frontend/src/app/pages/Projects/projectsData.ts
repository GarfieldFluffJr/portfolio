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
    name: "MindView",
    description:
      "An interactive 3D brain viewer built for physicians that clearly visualizes tumor progression across multiple timepoints,with collaborative tools for faster, shared clinical decisions. -- https://devpost.com/software/mindview --",
    githubLink: "https://github.com/GarfieldFluffJr/MindView",
    liveLink: "https://mind-view-gamma.vercel.app/",
    demoLink: "https://youtu.be/9CTsuVTGyxg",
    techStack: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "Tensorflow",
      "Gemini API",
      "Three.js",
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
  {
    name: "Terence",
    description:
      "Terence is a Python package that significantly simplifies the GitHub API to allow for the retrieval of file contents of public GitHub repositories. Once a Terence class instance is authenticated with a GitHub developer token, it can fetch the contents and information of a repository with one method call. Terence is fully built using Python and the GitHub API, and is published on PyPi using Twine. Terence has been tested substantially with manual python test cases and pytest suites which are both available on GitHub. Furthermore, CI/CD workflows have been implemented to automatically matrix test different python environments on all client pytest suites on every commit, and Terence will automatically be updated on PyPi on every release on GitHub. You can view the documentation on GitHub.",
    githubLink: "https://github.com/GarfieldFluffJr/Terence",
    liveLink: "https://pypi.org/project/terence/",
    demoLink: "",
    techStack: ["Python", "GitHub API", "PyTest"],
  },
  {
    name: "MacNewFile",
    description:
      "MacNewFile is a downloadable application which modifies the Finder right-click menu on MacOS. It adds missing features such as creating new files (word, text, excel), copying the current filepath, and opening a new terminal instance. Built on Xcode with the Finder Extension and available for download via zip or Homebrew. Within a week, it has reached 35 GitHub stars, 300+ users, and 3k+ project views!",
    githubLink: "https://github.com/GarfieldFluffJr/MacNewFile",
    liveLink: "",
    demoLink: "https://youtu.be/RFxfSQ_tTjo",
    techStack: ["Objective-C", "Xcode"],
  },
];
